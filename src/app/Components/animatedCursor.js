import AnimatedCursor from 'react-animated-cursor';

export default function CustomCursor() {
    return (
        <AnimatedCursor 
        innerSize={18}
        outerSize={8}
        color='15, 23, 42'
        outerAlpha={0.5}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link',]}
          />
    );
}