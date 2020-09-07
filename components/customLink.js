import Link from 'next/link';
import PropTypes from 'prop-types';

export default function CustomLink({ children, href }) {
  return href.startsWith('/') || href === '' ? (
    <Link href={href}>
      <a>
        {children}
      </a>
    </Link>
  ) : (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

CustomLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
};
