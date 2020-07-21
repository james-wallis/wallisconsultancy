import Link from 'next/link';
import { useRouter } from 'next/router'

const links = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Areas of Mediation',
    href: '/mediation',
  }
]

export default function Navigation() {
  const { pathname } = useRouter();
  return (
    <nav className="mr-8 font-open-sans h-full flex flex-row text-gray-333 text-sm">
      {links.map(({ title, href }) => {
        const active = pathname === href ? 'active-link' : '';
        return <Link href={href} key={href}>
          <a className={`${active} px-6 h-full flex justify-center items-center border-b-4 border-white hover:border-theme-green transition-colors ease-linear duration-100`}>
            <span className="block ">{title}</span>
          </a>
        </Link>
      })}
    </nav>
  )
}
