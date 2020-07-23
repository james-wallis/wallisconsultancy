import Container from './container';
import Navigation from './navigation';

export default function Header() {
  // eslint-disable-next-line import/no-unresolved
  const webpSrc = require('../images/mike-wallis-head.jpg?webp');
  const imgSrc = require('../images/mike-wallis-head.jpg');
  return (
    <div className="w-screen">
      <Container>
        <div className="flex items-center font-open-sans justify-between h-24 w-full">
          <div className="flex h-full justify-between items-center">
            <div className="hidden sm:flex pt-2 h-full w-32">
              <picture>
                <source srcSet={webpSrc} type="image/webp" />
                <source srcSet={imgSrc} type="image/jpeg" />
                <img
                  src={`${process.env.BACKEND_URL}${imgSrc}`}
                  alt="Mike Wallis headshot"
                  className="h-full sm:ml-8 sm:pr-8"
                />
              </picture>
            </div>
            <div className="w-10/12">
              <h1 className="text-2xl sm:text-3xl font-light font-lato">Wallis Consultancy</h1>
              <p className="text-gray-333 text-sm">
                A
                <em className="text-black"> personal </em>
                service from a retired senior banker and family magistrate
              </p>
            </div>
          </div>
          <Navigation />
        </div>
      </Container>
    </div>
  );
}
