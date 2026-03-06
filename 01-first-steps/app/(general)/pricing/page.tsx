import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'This is the pricing page',
  keywords: ['pricing', 'page', 'nextjs'],
};

const PricingPage = () => {
  return (
    <>
      <h1>Hello from PricingPage</h1>
    </>
  );
};

export default PricingPage;
