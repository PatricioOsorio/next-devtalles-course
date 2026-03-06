import Link from 'next/link';

export const Navbar = () => {
  const links = [
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Pricing', href: '/pricing' },
  ];

  return (
    <div className="navbar bg-primary text-primary-content shadow-sm rounded-lg my-2">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost">
          Home
        </Link>
      </div>

      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
