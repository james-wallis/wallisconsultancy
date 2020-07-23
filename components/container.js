import PropTypes from 'prop-types';

export default function Container({ children }) {
  return (
    <div className="w-screen flex justify-center">
      <div className="flex px-4 w-full xl:w-xl">
        {children}
      </div>
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
