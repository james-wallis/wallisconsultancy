import Container from './container'
import Phone from './phone'
import Email from './email'
import SocialIcons from './socialIcons'

export default function SocialBar() {
  return (
    <div className="hidden md:block bg-gray-fb w-screen border-b border-gray-e9">
      <Container>
        <div className="flex items-center justify-between px-8 text-gray-999 text-sm font-open-sans w-full">
          <div className="flex">
            <Phone />
            <Email />
          </div>
          <div>
            <SocialIcons />
          </div>
        </div>
      </Container>
    </div>
  )
}
