import logo from "../../../assets/logo.png";

export default function Header() {
  return (
    <header className="flex w-full">
      <div className="flex w-[20%] m-0 p-0">
        <img className="p-4" src={logo} alt="logo" />
      </div>
      <nav className="w-[80%]">
        <ul className="text-2xl flex w-full">
          <li className="mt-5 ml-5 hover:bg-[#5D8947] cursor-pointer pl-2 pr-2 pt-1 pb-1 rounded-xl transition-colors duration-300">
            My projects
          </li>
          <li className="mt-5 ml-5 hover:bg-[#5D8947] cursor-pointer pl-2 pr-2 pt-1 pb-1 rounded-xl transition-colors duration-300">
            Contact
          </li>
          <li className="mt-5 ml-5 hover:bg-[#5D8947] cursor-pointer pl-2 pr-2 pt-1 pb-1 rounded-xl transition-colors duration-300">
            About me
          </li>
        </ul>
      </nav>
    </header>
  );
}
