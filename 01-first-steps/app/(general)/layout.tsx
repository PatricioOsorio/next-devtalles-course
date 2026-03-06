import { PropsWithChildren } from 'react';

export default function GeneralLayout({ children }: PropsWithChildren) {
  return (
    <article className="flex flex-col items-center justify-center h-screen">
      <h1 className="font-light">General layout</h1>
      {children}
    </article>
  );
}
