import LogoSVG from "/@/assets/LogoSvg";

const Header = () => {
  return (
    <header className="py-2 w-screen m-0 p-0">
      <nav className="my-2">
        <LogoSVG />
      </nav>
      <div className="bg-[url('/@/assets/img/header.png')] h-72 bg-cover bg-no-repeat flex items-center">
        <h2 className="text-6xl sm:text-7xl text-neutral-300 max-w-md">A casa do código e da massa</h2>
      </div>

    </header>
  )
}

export default Header;
