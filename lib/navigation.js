import { join } from 'path';
import { getAllDynamicPages, getPageContentBySlug } from './markdown';

// eslint-disable-next-line import/prefer-default-export
export function getNavigationLinks() {
  const dynamicPages = getAllDynamicPages(['title', 'slug']);

  const { title: homePageTitle } = getPageContentBySlug('home', ['title']);
  const homePage = {
    title: homePageTitle,
    slug: '/',
  };

  const links = [homePage, ...dynamicPages].map(({ title, slug }) => ({
    title,
    href: join('/', slug),
  }));

  return links;
}
