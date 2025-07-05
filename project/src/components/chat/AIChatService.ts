
import yaml from 'js-yaml';
import { KnowledgeBaseItem } from './types';

export class AIChatService {
  private knowledgeBase: KnowledgeBaseItem[] = [];
  private language: string = 'en';

  async loadKnowledgeBase(lang: string): Promise<void> {
    this.language = lang;
    try {
      const response = await fetch(`/config_${lang}.yaml`);
      if (!response.ok) {
        throw new Error(`Failed to fetch config for language: ${lang}`);
      }
      const yamlText = await response.text();
      this.knowledgeBase = yaml.load(yamlText) as KnowledgeBaseItem[];
    } catch (error) {
      console.error("Error loading knowledge base:", error);
      this.knowledgeBase = [];
    }
  }

  getWelcomeMessage(): { text: string; suggestions?: string[] } {
    const welcomeItem = this.knowledgeBase.find(item => item.category.toLowerCase().includes('general') || item.category.toLowerCase().includes('sapaan'));
    if (welcomeItem) {
      return { text: welcomeItem.answer, suggestions: welcomeItem.suggestions };
    }
    return { text: "Welcome! How can I assist you?" };
  }

  findAnswer(userMessage: string): { text: string; suggestions?: string[] } | null {
    const lowerCaseMessage = userMessage.toLowerCase();
    let bestMatch: KnowledgeBaseItem | null = null;
    let maxScore = 0;

    for (const item of this.knowledgeBase) {
      for (const question of item.questions) {
        const score = this.calculateMatchScore(lowerCaseMessage, question.toLowerCase());
        if (score > maxScore) {
          maxScore = score;
          bestMatch = item;
        }
      }
    }

    if (maxScore > 0.5 && bestMatch) { // Threshold can be adjusted
      return { text: bestMatch.answer, suggestions: bestMatch.suggestions };
    }

    return null;
  }

  private calculateMatchScore(message: string, question: string): number {
    const messageWords = new Set(message.split(' '));
    const questionWords = new Set(question.split(' '));
    const intersection = new Set([...messageWords].filter(word => questionWords.has(word)));
    const union = new Set([...messageWords, ...questionWords]);
    return intersection.size / union.size;
  }
}
