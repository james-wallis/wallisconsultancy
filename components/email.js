import { FaEnvelope } from 'react-icons/fa';

export default function Email() {
  return (
    <a href="mailto:mw@wallisfamilymediation.co.uk" className="flex items-center m-2">
      <FaEnvelope />
      <p className="ml-2">
        Email: mw@wallisfamilymediation.co.uk
      </p>
    </a>
  );
}
