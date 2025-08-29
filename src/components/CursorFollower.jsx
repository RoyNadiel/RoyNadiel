import React, { useState, useEffect } from 'react';
import './CursorFollower.css';

const CursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  // Nuevo estado para controlar la visibilidad del cursor personalizado
  const [isVisible, setIsVisible] = useState(false); 

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      // Aseguramos que el cursor sea visible si se mueve dentro del documento
      if (!isVisible) setIsVisible(true); 
    };

    const handleMouseEnterDocument = () => {
      // Cuando el cursor entra en el área del documento/ventana
      setIsVisible(true);
    };

    const handleMouseLeaveDocument = () => {
      // Cuando el cursor sale del área del documento/ventana
      setIsVisible(false);
    };

    const handleMouseEnterInteractive = (e) => {
      if (e.target.closest('[data-interactive="true"]')) {
        setIsHoveringInteractive(true);
      }
    };

    const handleMouseLeaveInteractive = (e) => {
      if (e.target.closest('[data-interactive="true"]')) {
        setIsHoveringInteractive(false);
      }
    };

    const handleMouseDown = () => {
      setIsClicking(true);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    // Agregamos los listeners de eventos
    document.addEventListener('mousemove', handleMouseMove);
    // Escuchamos 'mouseleave' y 'mouseenter' en la ventana para saber si el cursor sale/entra del navegador
    window.addEventListener('mouseleave', handleMouseLeaveDocument);
    window.addEventListener('mouseenter', handleMouseEnterDocument); 

    // Listeners para elementos interactivos
    document.addEventListener('mouseenter', handleMouseEnterInteractive, true); 
    document.addEventListener('mouseleave', handleMouseLeaveInteractive, true); 
    
    // Listeners para clic
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    // Limpieza: removemos todos los listeners cuando el componente se desmonta
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeaveDocument);
      window.removeEventListener('mouseenter', handleMouseEnterDocument);
      document.removeEventListener('mouseenter', handleMouseEnterInteractive, true);
      document.removeEventListener('mouseleave', handleMouseLeaveInteractive, true);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []); // Array de dependencias vacío para que se ejecute solo una vez al montar

  return (
    <div
      className={`cursor-follower
        ${isHoveringInteractive ? 'interactive-hover' : ''}
        ${isClicking ? 'clicking' : ''}
        ${!isVisible ? 'hidden' : ''} 
        `} 
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    >
    </div>
  );
};

export default CursorFollower;