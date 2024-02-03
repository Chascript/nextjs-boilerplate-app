import React from 'react';

interface Props {
  firstName: string;
}

export function Greetings({ firstName }: Props) {
  return (
    <div>
      <h1>
        Hello,
        {firstName}
        !
      </h1>
    </div>
  );
}

export default Greetings;
