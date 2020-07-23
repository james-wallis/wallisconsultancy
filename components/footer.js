import Link from 'next/link';
import Container from './container';

const links = [
  {
    title: 'Terms & Conditions',
    href: '/terms',
  },
  {
    title: 'Complaints',
    href: '/complaint',
  },
  {
    title: 'Data Privacy Notice',
    href: '/privacynotice',
  },
];

export default function Footer() {
  return (
    <footer className="w-screen bg-black-27">
      <Container>
        <div className="flex items-center justify-between w-full p-8 font-open-sans text-white text-sm flex-col md:flex-row">
          <div>
            <a
              href="https://www.linkedin.com/in/mike-wallis-b82a9140/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-a1 transition-colors ease-linear duration-100 my-2 md:my-0 block"
            >
              Connect on linkedin
            </a>
          </div>
          <ul className="flex flex-col md:flex-row items-center">
            {links.map(({ title, href }) => (
              <li key={href} className="my-2 md:my-0 mx-4 hover:text-gray-a1 transition-colors ease-linear duration-100">
                <Link href={href}>
                  <a>
                    {title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
