import SocialBar from './socialBar'
import Header from './header'
import Breadcrumb from './breadcrumb'
import Container from './container'
import Contact from './contact'
import Footer from './footer'

export default function Layout({ children, pageTitle }) {
  return (
    <div className="flex flex-col md:h-screen">
      <SocialBar />
      <Header />
      <Breadcrumb pageTitle={pageTitle} />
      <Container>
        <main className="sm:mx-2 md:mx-8 my-4 sm:my-12 font-open-sans text-gray-76 sm:text-sm leading-relaxed w-screen">
          {children}
        </main>
      </Container>
      <div className="flex flex-col flex-1 justify-end">
        <Contact />
        <Footer />
      </div>
    </div>
  )
}
