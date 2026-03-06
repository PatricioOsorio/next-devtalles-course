import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'This is the contact page',
  keywords: ['contact', 'page', 'nextjs'],
};

const ContactPage = () => {
  return (
    <>
      <h1>Hello from ContactPage</h1>
    </>
  );
};

export default ContactPage;
