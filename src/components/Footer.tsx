import RouterLink from "../hooks/RouterLink";
import facebookSvg from "../assets/facebook.svg";
import instagramSvg from "../assets/instagram.svg";
import telegramSvg from "../assets/telegram.svg";
import youtubeSvg from "../assets/youtube.svg";

const Footer = () => {
  return (
    <footer className="containers flex-col mt-10 py-2 hidden lg:flex select-none px-4">
      <div className="flex items-center justify-between">
        <RouterLink
          to="/"
          className="flex items-center text-xl font-black text-[#0C2F75] uppercase"
        >
          Tezkor-News{" "}
          <span className="w-9 h-9 flex items-center bg-[#0C2F75] border border-[#0C2F75] rounded-full p-1 text-white">
            24
          </span>
        </RouterLink>

        <ul className="flex items-center justify-between gap-5.5">
          <li>
            <RouterLink
              to="/about"
              className="font-semibold text-gray-700 hover:text-[#0C2F75] transition-colors duration-300"
            >
              Sayt Haqida
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/contact"
              className="font-semibold text-gray-700 hover:text-[#0C2F75] transition-colors duration-300"
            >
              Bog'lanish
            </RouterLink>
          </li>
        </ul>

        <ul className="flex items-center justify-between gap-5">
          <li>
            <a
              href="https://www.facebook.com/tezkornews24"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebookSvg} alt="Facebook" className="w-7 h-7" />
            </a>
          </li>

          <li>
            <a
              href="https://www.instagram.com/tezkornews24"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagramSvg} alt="Instagram" className="w-7 h-7" />
            </a>
          </li>

          <li>
            <a
              href="https://www.youtube.com/tezkornews24"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={youtubeSvg} alt="YouTube" className="w-7 h-7" />
            </a>
          </li>

          <li>
            <a
              href="https://t.me/tezkornews24"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={telegramSvg} alt="Telegram" className="w-7 h-7" />
            </a>
          </li>
        </ul>
      </div>
      <p className="text-center text-gray-500 mt-4 cursor-text">
        &copy; {new Date().getFullYear()} Tezkor News 24. Barcha huquqlar
        himoyalangan.
      </p>
    </footer>
  );
};

export default Footer;
