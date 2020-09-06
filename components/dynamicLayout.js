import { NextSeo } from 'next-seo';
import { join } from 'path';
import PropTypes from 'prop-types';
import Layout from './layout';
import PrintMarkdown from './markdown/printMarkdown';

export default function DynamicLayout({
  slug, title, image, markdown, links,
}) {
  const canonical = join(process.env.CANONICAL_URL, slug);
  // eslint-disable-next-line import/no-dynamic-require
  const webPSrc = require(`../images/${image}?webp`);
  // eslint-disable-next-line import/no-dynamic-require
  const imgSrc = require(`../images/${image}`);
  return (
    <Layout pageTitle={title} links={links}>
      <NextSeo
        title={title}
        canonical={canonical}
        openGraph={{
          url: canonical,
          title: `${title} | Wallis Consultancy`,
        }}
      />
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
    </Layout>
  );
}

DynamicLayout.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  markdown: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.exact({
    title: PropTypes.string,
    href: PropTypes.string,
  })).isRequired,
};
