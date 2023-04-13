import { FaEnvelope } from 'react-icons/fa';

export default function Email() {
  return (
    <a href="mailto:michaelawallis@yahoo.co.uk" className="flex items-center m-2">
      <FaEnvelope />
      <p className="ml-2">
        Email: michaelawallis@yahoo.co.uk
      </p>
    </a>
  );
}
