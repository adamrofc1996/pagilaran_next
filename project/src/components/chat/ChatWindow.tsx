
import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Send, Sparkles, X } from 'lucide-react';
import ChatLanguageSwitcher from './ChatLanguageSwitcher';
import { ChatMessage } from './types';

interface ChatWindowProps {
  isOpen: boolean;
  onClose: () => void;
  sendMessage: (message: string) => void;
  messages: ChatMessage[];
  position: { x: number; y: number };
}

export const ChatWindow: React.FC<ChatWindowProps> = ({ isOpen, onClose, sendMessage, messages, position }) => {
  const { t } = useTranslation();
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = () => {
    if (inputValue.trim()) {
      sendMessage(inputValue.trim());
      setInputValue('');
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    sendMessage(suggestion);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed bg-white rounded-2xl shadow-2xl flex flex-col transform z-[999] animate-fade-in-up font-sans resize overflow-auto min-w-[300px] min-h-[400px] max-w-[90vw] max-h-[90vh]"
      style={{ bottom: `${position.y + 80}px`, right: `${position.x}px` }}
    >
      {/* Header */}
      <div className="bg-[#075E54] p-3 text-white flex justify-between items-center rounded-t-2xl">
        <div className="flex items-center">
          <Sparkles className="w-5 h-5 mr-2" />
          <h3 className="font-bold text-base">{t('Chatbot Service')}</h3>
        </div>
        <div className="flex items-center">
          <ChatLanguageSwitcher />
          <button onClick={onClose} className="hover:bg-white/20 p-1 rounded-full ml-2">
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 p-3 overflow-y-auto bg-gray-50">
        {messages.map((msg) => (
          <div key={msg.id}>
            <div className={`flex my-1.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`py-2 px-3 rounded-lg max-w-xs text-sm leading-snug ${msg.sender === 'user' ? 'bg-[#DCF8C6] text-gray-800 rounded-br-none' : 'bg-white text-gray-800 rounded-bl-none'}`}>
                <p>{msg.text}</p>
              </div>
            </div>
            {msg.sender === 'ai' && msg.suggestions && (
              <div className="flex flex-wrap gap-1.5 mt-2 mb-3">
                {msg.suggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="px-3 py-1 bg-gray-100 text-primary-700 rounded-full text-xs hover:bg-primary-100 transition-colors border border-gray-200"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-3 border-t border-gray-200 bg-white rounded-b-2xl">
        <div className="relative">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder={t('User Message...')}
            className="w-full pr-11 pl-4 py-2 bg-white rounded-full focus:outline-none focus:ring-1 focus:ring-[#075E54] text-sm shadow-sm"
          />
          <button
            onClick={handleSend}
            className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-[#075E54] text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#128C7E] transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
