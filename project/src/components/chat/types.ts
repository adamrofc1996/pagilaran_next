
export interface KnowledgeBaseItem {
  category: string;
  questions: string[];
  answer: string;
  suggestions?: string[];
}

export interface ChatMessage {
  id: number;
  text: string;
  sender: 'user' | 'ai';
  suggestions?: string[];
}
