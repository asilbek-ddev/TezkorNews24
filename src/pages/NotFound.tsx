import error404 from "../assets/404-error.svg";
import RouterLink from "../hooks/RouterLink";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-black text-white text-center p-5">
      <img className="w-full h-3/4" src={error404} alt="404 error logo" />

      <RouterLink
        to="/"
        className="py-3.5 px-10 bg-white border text-black rounded-[50px] no-underline text-[1.2rem] font-bold mt-6"
      >
        Bosh sahifaga qaytish
      </RouterLink>
    </div>
  );
};

export default NotFound;
