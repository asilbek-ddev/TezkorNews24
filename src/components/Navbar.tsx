import RouterLink from "../hooks/RouterLink";
import headerBannerImg from "../assets/header_banner_img.png";
import searchSvg from "../assets/search.svg";
import globe from "../assets/globe.svg";

const navbarLinks = [
  { title: "O'zbekiston", path: "#" },
  { title: "Jahon", path: "#" },
  { title: "Iqtisodiyot", path: "#" },
  { title: "Jamiyat", path: "#" },
  { title: "Sport", path: "#" },
  { title: "Texnologiya", path: "#" },
];

const Navbar = () => {
  return (
    <header className="containers flex flex-col gap-2.5 select-none px-4">
      <div className="hidden lg:block">
        <img
          className="w-350 max-h-100! object-cover cursor-pointer hover:opacity-95 transition-opacity duration-300 rounded-b-lg"
          src={headerBannerImg}
          alt="Home Banner Image"
        />
      </div>
      <nav className="bg-white h-16 flex items-center justify-between border border-gray-300 px-3 rounded-lg">
        <RouterLink
          to="/"
          className="flex items-center lg:text-xl font-black text-[#0C2F75] uppercase"
        >
          <span className="hidden lg:block">Tezkor</span>
          <span className="lg:hidden">TEZ</span>
          -News{" "}
          <span className="w-8 h-8 lg:w-9 lg:h-9 flex items-center bg-[#0C2F75] border border-[#0C2F75] rounded-full p-1 text-white">
            24
          </span>
        </RouterLink>

        <ul className="hidden lg:flex">
          {navbarLinks.map((link) => (
            <li key={link.title} className="inline-block mx-4">
              <RouterLink
                to={link.path}
                className="text-sm font-bold text-black capitalize hover:text-[#0C2F75] transition-colors duration-300"
              >
                {link.title}
              </RouterLink>
            </li>
          ))}
        </ul>

        <ul className="flex items-center gap-2.5">
          <li className="h-10 px-1 flex items-center justify-center gap-0.5 text-sm font-medium rounded-lg bg-[rgb(248,248,248)] cursor-pointer hover:opacity-85 transition-opacity duration-300">
            <img className="w-5 h-5 opacity-75" src={globe} alt="Globe Icon" />
            O'zbekcha
          </li>
          <li className="w-10 h-10 flex items-center justify-center rounded-lg bg-[rgb(248,248,248)] cursor-pointer hover:opacity-85 transition-opacity duration-300">
            <img
              className="w-5 h-5 opacity-75"
              src={searchSvg}
              alt="Search Icon"
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
