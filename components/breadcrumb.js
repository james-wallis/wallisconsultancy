import PropTypes from 'prop-types';
import Container from './container';

export default function Breadcrumb({ children }) {
  return (
    <div className="flex items-center w-screen bg-theme-green py-3">
      <Container>
        <h2 className="text-3xl text-white sm:ml-8 font-light font-lato">
          {children}
        </h2>
      </Container>
    </div>
  );
}

Breadcrumb.propTypes = {
  children: PropTypes.node.isRequired,
};
