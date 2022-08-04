import React, { ReactElement, ReactChild, ReactNode, ReactText } from 'react';

export interface MyTextProps {
  //   children?: ReactText;
  //   children?: ReactChild | ReactChild[];
  children?: ReactNode;
}

export function MyText({ children }: MyTextProps) {
  return <div>{children}</div>;
}
