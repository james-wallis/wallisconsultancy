import Phone from './phone'
import Email from './email'
import SocialIcons from './socialIcons'

export default function SocialBar() {
  return (
    <div
      className="bg-gray-fb flex items-center w-screen justify-between px-8 text-gray-999 text-sm font-open-sans border-b border-gray-e9"
    >
      <div className="flex">
        <Phone />
        <Email />
      </div>
      <div>
        <SocialIcons />
      </div>
    </div>
  )
}
