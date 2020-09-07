import PropTypes from 'prop-types';
import SocialBar from './socialBar';
import Header from './header';
import Breadcrumb from './breadcrumb';
import Container from './container';
import Contact from './contact';
import Footer from './footer';

export default function Layout({ children, pageTitle, links }) {
  return (
    <div className="flex flex-col md:h-screen">
      <SocialBar />
      <Header links={links} />
      <Breadcrumb>
        {pageTitle}
      </Breadcrumb>
      <Container>
        <main className="sm:mx-2 md:mx-8 my-4 sm:my-12 font-open-sans text-gray-76 sm:text-sm leading-relaxed w-screen">
          {children}
        </main>
      </Container>
      <div className="flex flex-col flex-1 justify-end">
        <Contact />
        <Footer links={links} />
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pageTitle: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.exact({
    title: PropTypes.string,
    href: PropTypes.string,
    navigation: PropTypes.bool,
    footer: PropTypes.bool,
  })).isRequired,
};
