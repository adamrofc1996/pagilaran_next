
import React, { useState, useRef, useCallback } from 'react';
import { MessageSquare, X } from 'lucide-react';

interface ChatIconProps {
  onClick: () => void;
  isOpen: boolean;
  position: { x: number; y: number };
  setPosition: React.Dispatch<React.SetStateAction<{ x: number; y: number }>>;
}

export const ChatIcon: React.FC<ChatIconProps> = ({ onClick, isOpen, position, setPosition }) => {
  const [isDragging, setIsDragging] = useState(false);
  const iconRef = useRef<HTMLButtonElement>(null);
  const dragStartPos = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragStartPos.current = { x: e.clientX, y: e.clientY };
    if (iconRef.current) {
      iconRef.current.style.transition = 'none'; // Disable transition during drag
    }
  };

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStartPos.current.x;
    const dy = e.clientY - dragStartPos.current.y;
    setPosition(prev => {
      const newX = Math.max(24, Math.min(window.innerWidth - 72, prev.x - dx));
      const newY = Math.max(24, Math.min(window.innerHeight - 72, prev.y - dy));
      return { x: newX, y: newY };
    });
    dragStartPos.current = { x: e.clientX, y: e.clientY };
  }, [isDragging, setPosition]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    if (iconRef.current) {
      iconRef.current.style.transition = 'transform 0.3s'; // Re-enable transition
    }
  }, [setIsDragging]);

  React.useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  return (
    <button
      ref={iconRef}
      onMouseDown={handleMouseDown}
      onClick={isDragging ? (e) => e.preventDefault() : onClick} // Prevent click on drag end
      style={{ bottom: `${position.y}px`, right: `${position.x}px` }}
      className="fixed bg-[#25D366] text-white w-14 h-14 rounded-full shadow-xl flex items-center justify-center transform hover:scale-105 transition-transform duration-200 z-[1000] cursor-grab"
      aria-label={isOpen ? 'Close chat' : 'Open chat'}
    >
      {isOpen ? (
        <X className="w-8 h-8 transition-transform duration-300 transform rotate-90" />
      ) : (
        <MessageSquare className="w-8 h-8 transition-transform duration-300" />
      )}
    </button>
  );
};
