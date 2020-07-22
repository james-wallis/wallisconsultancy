import Container from './container'
import Navigation from './navigation'

export default function Header() {
  return (
    <div className="w-screen">
      <Container>
        <div className="flex items-center font-open-sans justify-between h-24 w-full">
          <div className="flex h-full justify-between items-center">
            <div className="hidden sm:flex pt-2 h-full w-32">
              <img
                src="/images/mike-wallis-head.png"
                className="h-full sm:ml-8 sm:pr-8"
              />
            </div>
            <div className="w-10/12">
              <h2 className="text-2xl sm:text-3xl font-light font-lato">Wallis Consultancy</h2>
              <p className="text-gray-999 text-sm">
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
  )
}