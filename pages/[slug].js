import PropTypes from 'prop-types';
import DynamicLayout from '../components/dynamicLayout';
import { getDynamicPageContentBySlug, getAllDynamicPages } from '../lib/markdown';
import { getNavigationLinks } from '../lib/navigation';

export default function DynamicPage({ page, links }) {
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

DynamicPage.propTypes = {
  page: PropTypes.shape({
    title: PropTypes.string,
    slug: PropTypes.string,
    image: PropTypes.string,
    markdown: PropTypes.string,
  }).isRequired,
  links: PropTypes.arrayOf(PropTypes.exact({
    title: PropTypes.string,
    href: PropTypes.string,
  })).isRequired,
};

export async function getStaticProps({ params }) {
  const links = getNavigationLinks();
  const { slug } = params;
  const page = getDynamicPageContentBySlug(slug, [
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

export async function getStaticPaths() {
  const posts = getAllDynamicPages(['slug']);
  const paths = posts.map(({ slug }) => ({
    params: {
      slug,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}
