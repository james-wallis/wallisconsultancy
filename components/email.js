import { FaEnvelope } from 'react-icons/fa';

export default function Email() {
  return (
    <a href="mailto:mail@mike-wallis.com" className="flex items-center m-2">
      <FaEnvelope />
      <p className="ml-2">
        Email: mail@mike-wallis.com
      </p>
    </a>
  );
}
