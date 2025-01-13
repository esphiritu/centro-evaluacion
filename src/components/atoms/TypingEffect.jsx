'use client';
import Typewriter from 'typewriter-effect';

function TypingEffect() {
  return (
    <>
      <Typewriter
        options={{
          strings: ['Aprendamos junto con la AI', 'Ventas directas', 'Marketing digital', 'Gestión emocional', 'Administración del tiempo',],
          autoStart: true,
          loop: true,
          delay: 100,
          deleteSpeed: 50,
          cursor: '|',
          cursorClassName: 'text-teal-300 text-5xl',
        }}
        onInit={(typewriter) => {
          typewriter.typeString('Marketing')
            .callFunction(() => {
              console.log('String typed out!');
            })
            .pauseFor(2500)
            .deleteAll()
            .callFunction(() => {
              console.log('All strings were deleted');
            })
            .start();
        }}
      />
    </>
  )
}

export default TypingEffect