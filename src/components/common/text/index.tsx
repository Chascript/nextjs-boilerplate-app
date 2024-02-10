import React from 'react';

interface Props {
  element?: 'span' | 'p' | 'div' | 'strong' | 'em' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  position?: 'left' | 'center' | 'right';
  fontWeight?: 'light' | 'normal' | 'medium' | 'bold' | 'extrabold' | 'semibold';
  className?: string;
  children: React.ReactNode;
}

export const Text = ({
  element: Element = 'span',
  position = 'left',
  fontWeight = 'normal',
  className,
  children,
}: Props) => {
  const elementClassNames = {
    span: 'text-sm text-gray-600',
    p: 'text-base text-gray-800',
    div: 'text-lg text-gray-700',
    strong: 'text-lg font-bold text-black',
    em: 'italic text-base text-gray-600',
    h1: 'text-4xl font-bold text-gray-900',
    h2: 'text-3xl font-bold text-gray-900',
    h3: 'text-2xl font-bold text-gray-900',
    h4: 'text-xl font-bold text-gray-900',
    h5: 'text-lg font-bold text-gray-900',
    h6: 'text-base font-bold text-gray-900',
  };
  const elementClassName = elementClassNames[Element] || '';
  const fontWeightClass = fontWeight ? `font-${fontWeight}` : '';

  const combinedClassName = `${className} text-${position} ${fontWeightClass} ${elementClassName}`;

  return (
    <Element className={combinedClassName}>
      {children}
    </Element>
  );
};

export default Text;
