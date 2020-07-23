import PropTypes from 'prop-types';
import { FaBars } from 'react-icons/fa';

export default function Hamburger({ toggleMenu }) {
  return (
    <button
      onClick={toggleMenu}
      type="button"
      className="block sm:hidden fixed top-0 right-0 text-white bg-theme-green p-2 text-4xl rounded-sm mt-4 mr-4 z-50 outline-none focus:outline-none"
    >
      <FaBars />
    </button>
  );
}

Hamburger.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
};
