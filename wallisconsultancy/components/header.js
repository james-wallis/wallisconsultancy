import Container from './container'
import Navigation from './navigation'

export default function Header() {
  return (
    <div className="w-screen">
      <Container>
        <div className="flex items-center font-open-sans justify-between h-20 w-full">
          <div className="flex h-full justify-between items-center">
            <div className="flex pt-2 h-full">
              <img
                src="/images/mike-wallis-head.png"
                className="h-full ml-8 pr-8"
              />
            </div>
            <div>
              <h2 className="text-3xl font-light font-lato">Wallis Consultancy</h2>
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
