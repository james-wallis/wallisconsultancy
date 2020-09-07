import PropTypes from 'prop-types';
import PrintMarkdown from './printMarkdown';

export default function WithImage({ markdown, image }) {
  // eslint-disable-next-line import/no-dynamic-require
  const webPSrc = require(`../../images/${image}?webp`);
  // eslint-disable-next-line import/no-dynamic-require
  const imgSrc = require(`../../images/${image}`);
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-100 md:w-2/3 sm:pr-4 md:pr-8">
        <PrintMarkdown markdown={markdown} />
      </div>
      <div className="w-100 md:w-1/3 flex items-center justify-center">
        <picture>
          <source srcSet={webPSrc} type="image/webp" />
          <source srcSet={imgSrc} type="image/jpeg" />
          <img
            src={imgSrc}
            alt="Mike Wallis"
          />
        </picture>
      </div>
    </div>
  );
}

WithImage.propTypes = {
  markdown: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
