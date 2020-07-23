import Container from './container'

export default function Breadcrumb({ pageTitle }) {
  return (
    <div className="flex items-center w-screen bg-theme-green py-3">
      <Container>
        <h2 className="text-3xl text-white sm:ml-8 font-light font-lato">
          {pageTitle}
        </h2>
      </Container>
    </div>
  )
}
