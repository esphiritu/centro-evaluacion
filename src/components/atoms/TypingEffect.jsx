'use client';
import Typewriter from 'typewriter-effect';

function TypingEffect() {
  return (
    <>
      <Typewriter
        options={{
          strings: ['Desarrollo de habilidades digitales', 'Programas personalizados', 'Aprendizaje práctico', 'Formatos flexibles', 'Instructores expertos',],
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