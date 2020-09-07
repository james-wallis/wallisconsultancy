import PropTypes from 'prop-types';
import DynamicLayout from '../components/dynamicLayout';
import { getPageContentBySlug } from '../lib/markdown';
import { getNavigationLinks } from '../lib/navigation';

export default function IndexPage({ page, links }) {
  const {
    title,
    image,
    slug,
    markdown,
  } = page;
  return (
    <DynamicLayout title={title} image={image} slug={slug} markdown={markdown} links={links} />
  );
}

export async function getStaticProps() {
  const links = getNavigationLinks();

  const page = getPageContentBySlug('home', [
    'title',
    'image',
    'slug',
    'content',
  ]);

  return {
    props: {
      page: {
        ...page,
        markdown: page.content,
      },
      links,
    },
  };
}

IndexPage.propTypes = {
  page: PropTypes.shape({
    title: PropTypes.string,
    slug: PropTypes.string,
    image: PropTypes.string,
    markdown: PropTypes.string,
  }).isRequired,
  links: PropTypes.arrayOf(PropTypes.exact({
    title: PropTypes.string,
    href: PropTypes.string,
    navigation: PropTypes.bool,
    footer: PropTypes.bool,
  })).isRequired,
};
