import error404 from "../assets/404-error.mp4";
import RouterLink from "../hooks/RouterLink";

const NotFound = () => {
  return (
    <div
      className="h-screen flex flex-col justify-center items-center bg-black text-white text-center p-5"
    >
      <video
        autoPlay
        muted
        playsInline
        height="auto"
        style={{ maxWidth: "90%", borderRadius: "12px" }}
      >
        <source src={error404} type="video/mp4" />
        Brauzeringiz video ni qo'llab-quvvatlamaydi.
      </video>

      <RouterLink
        to="/"
        className="py-3.5 px-10 bg=[#ff3366] border text-white rounded-[50px] no-underline text-[1.2rem] font-bold mt-6"
      >
        Bosh sahifaga qaytish
      </RouterLink>
    </div>
  );
};

export default NotFound;
