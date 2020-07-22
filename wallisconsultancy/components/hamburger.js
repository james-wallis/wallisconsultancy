import { FaBars } from 'react-icons/fa';

export default function Hamburger({ toggleMenu }) {
  return (
    <div onClick={toggleMenu} className="block sm:hidden fixed top-0 right-0 text-white bg-theme-green p-2 text-4xl rounded-sm mt-4 mr-4 z-50">
      <FaBars />
    </div>
  )
}
