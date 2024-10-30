import Menu from "./Menu";

const Header = () => {
  return (
    <div className="bg-indigo-700 text-white w-full ">
      <div className="container mx-auto flex justify-between align-center items-center p-10">
        <div className="site-info">
          <h1>Joe Deo</h1>
          <p>joe@joie.com</p>
          <p>+97665544</p>
        </div>
        <Menu />
      </div>
    </div>
  );
};
export default Header;
