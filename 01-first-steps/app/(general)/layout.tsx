import { Navbar } from '@/components/navbar/Navbar';
import { PropsWithChildren } from 'react';

export default function GeneralLayout({ children }: PropsWithChildren) {
  return (
    <article className="flex h-screen w-screen flex-col">
      <header className="container mx-auto">
        <Navbar />
      </header>
      <main className="shrink-0">
        <div className="container mx-auto">{children}</div>
      </main>
      <footer className="mt-auto block py-4">
        <div className="container mx-auto">
          <span>Sticky footer</span>
        </div>
      </footer>
    </article>
  );
}
