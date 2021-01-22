import { FaTwitter, FaLinkedinIn } from 'react-icons/fa';

export default function SocialIcons() {
  return (
    <div className="flex flex-row">
      <a
        href="https://twitter.com/WallisMediation"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center m-2 border-2 border-solid border-gray-333 p-2 rounded-full hover:bg-blue-400 transition-colors duration-100 ease-in-out"
      >
        <FaTwitter aria-label="Twitter Icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/mike-wallis-b82a9140/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center m-2 border-2 border-solid border-gray-333 p-2 rounded-full hover:bg-blue-800 transition-colors duration-100 ease-in-out"
      >
        <FaLinkedinIn aria-label="LinkedIn Icon" />
      </a>
    </div>
  );
}
