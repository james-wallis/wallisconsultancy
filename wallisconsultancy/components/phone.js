import { FaPhoneAlt } from 'react-icons/fa';

export default function Phone() {
  return (
    <a href="tel:+447891760244" className="flex items-center m-2">
      <FaPhoneAlt />
      <p className="ml-2">Phone: 07891760244</p>
    </a>
  );
}
