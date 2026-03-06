import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'This is the about page',
  keywords: ['about', 'page', 'nextjs'],
};

const AboutPage = () => {
  return (
    <>
      <h1>Hello from AboutPage</h1>
    </>
  );
};

export default AboutPage;
