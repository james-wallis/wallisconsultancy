import Phone from './phone'
import Email from './email'
import Address from './address'
import MessageForm from './messageForm'

export default function Contact() {
  return (
    <div className="text-gray-a1 border-b border-theme-light-blue bg-theme-navy-blue text-sm p-8 flex justify-between">
      <div className="w-1/3">
        <h3 className="text-lato text-2xl font-light text-white ml-2">Contact me</h3>
        <Phone />
        <Email />
        <Address />
      </div>
      <div className="w-2/3">
        <MessageForm />
      </div>
    </div>
  )
}
