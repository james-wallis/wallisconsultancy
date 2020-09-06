import Link from 'next/link';
import PropTypes from 'prop-types';

// TODO support external link and detect whether it's a local link or not
export default function CustomLink({ children, href }) {
  return (
    <Link href={href}>
      <a>
        {children}
      </a>
    </Link>
  );
}

CustomLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
};
