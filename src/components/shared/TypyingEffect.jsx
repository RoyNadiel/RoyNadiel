import React, { useState, useEffect } from 'react';

function TypingEffect({ text, typingSpeed = 100, deletingSpeed = 50, delay = 1000, loop = false }) {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0); // Índice del carácter actual en 'text'
  const [loopNum, setLoopNum] = useState(0); // Para controlar los bucles si loop es true

  useEffect(() => {
    const handleTyping = () => {
      const currentText = text; // El texto completo que queremos mostrar

      if (isDeleting) {
        // Modo borrado
        setDisplayedText(prev => currentText.substring(0, prev.length - 1));

        // Si ya se borró todo el texto
        if (displayedText === '') {
          setIsDeleting(false); // Cambia a modo escritura
          setIndex(0); // Reinicia el índice
          setLoopNum(prev => prev + 1); // Incrementa el contador de bucles
        }
      } else {
        // Modo escritura
        // Añade el siguiente carácter si todavía hay caracteres por escribir
        if (index < currentText.length) {
          setDisplayedText(prev => prev + currentText[index]);
          setIndex(prev => prev + 1);
        }

        // Si se terminó de escribir el texto completo
        if (index === currentText.length) {
          if (loop) {
            // Si es un bucle, esperamos un delay y empezamos a borrar
            setTimeout(() => setIsDeleting(true), delay);
          } else {
            // Si NO es un bucle y hemos terminado de escribir, no hacemos nada más.
            // Importante: No programar más timeouts si no hay loop y ya se escribió todo.
            return;
          }
        }
      }
    };

    // Detener completamente el temporizador si no estamos en modo loop y el texto ya se ha escrito
    if (!loop && !isDeleting && index === text.length) {
      return;
    }

    // Calcular el tiempo del siguiente paso
    const timeoutDuration = isDeleting ? deletingSpeed : typingSpeed;

    const timeout = setTimeout(handleTyping, timeoutDuration);

    // Función de limpieza
    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, index, text, typingSpeed, deletingSpeed, delay, loop, loopNum]); // Dependencias

  return (
    <span
      className="
        border-r-2 border-red-500 animate-[blink-caret_1.25s_step-end_infinite] mr-1">
      {displayedText}
    </span>
  );
}

export default TypingEffect;