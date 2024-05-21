import React, { useState, useEffect, useMemo } from 'react';

const Typewriter = () => {
  const [text, setText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const words = useMemo(() => ['Frontend Developer', 'MernStack Developer'], []);

  const typingSpeed = 200; 

  useEffect(() => {
    let isMounted = true;

    const typeLoop = async () => {
      for (const word of words) {
        if (!isMounted) return; 

        for (let i = 0; i <= word.length; i++) {
          setText(word.substring(0, i));
          await new Promise(resolve => setTimeout(resolve, typingSpeed));
        }
        setCursorVisible(false);
        await new Promise(resolve => setTimeout(resolve, 1000)); 
        setCursorVisible(true);

        for (let i = word.length; i >= 0; i--) {
          setText(word.substring(0, i));
          await new Promise(resolve => setTimeout(resolve, typingSpeed));
        }

        setCursorVisible(false);
        await new Promise(resolve => setTimeout(resolve, 1000)); 
        setCursorVisible(true);
      }

      
      typeLoop();
    };

    typeLoop();

    return () => {
      isMounted = false; 
    };
  }, [words]);

  return (
    <div>
      <p>
        {text}
        <span style={{ color: cursorVisible ? '#fff' : 'inherit',opacity: cursorVisible ? 0.3 : 0}}>
        {cursorVisible && '|'}
        </span> 
      </p>
    </div>
  );
};

export default Typewriter;
