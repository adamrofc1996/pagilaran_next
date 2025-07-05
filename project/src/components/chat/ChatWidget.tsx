import React, { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ChatIcon } from './ChatIcon';
import { ChatWindow } from './ChatWindow';
import { AIChatService } from './AIChatService';
import { ChatMessage } from './types';

const chatService = new AIChatService();

export const ChatWidget: React.FC = () => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [position, setPosition] = useState({ x: 24, y: 24 });

  const initializeChat = useCallback(async () => {
    await chatService.loadKnowledgeBase(i18n.language);
    const welcomeMessage = chatService.getWelcomeMessage();
    setMessages([
      {
        id: Date.now(),
        text: welcomeMessage.text || t('chat_widget.welcome_message'),
        sender: 'ai',
        suggestions: welcomeMessage.suggestions,
      },
    ]);
  }, [i18n.language, t]);

  useEffect(() => {
    initializeChat();
  }, [initializeChat]);

  const toggleChat = () => {
    if (!isOpen) {
      // Refresh chat when opening
      initializeChat();
    }
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (text: string) => {
    const userMessage: ChatMessage = { id: Date.now(), text, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);

    const aiResponse = chatService.findAnswer(text);

    setTimeout(() => {
      const aiMessage: ChatMessage = {
        id: Date.now() + 1,
        sender: 'ai',
        ...(aiResponse
          ? { text: aiResponse.text, suggestions: aiResponse.suggestions }
          : { 
              text: i18n.language === 'id' 
                ? 'Maaf, saya tidak memiliki informasi tersebut. Silakan hubungi layanan pelanggan kami di +62 285 123456 untuk bantuan lebih lanjut.'
                : "I'm sorry, but I don't have that information. Please feel free to contact our customer service at +62 285 123456 for further assistance.",
              suggestions: chatService.getWelcomeMessage().suggestions 
            }),
      };
      setMessages((prev) => [...prev, aiMessage]);
    }, 500); // Simulate AI thinking time
  };

  return (
    <>
      <ChatIcon onClick={toggleChat} isOpen={isOpen} position={position} setPosition={setPosition} />
      <ChatWindow
        isOpen={isOpen}
        onClose={toggleChat}
        sendMessage={handleSendMessage}
        messages={messages}
        position={position}
      />
    </>
  );
};
