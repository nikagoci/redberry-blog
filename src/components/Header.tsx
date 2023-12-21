import HeaderBlog from "../assets/header-blog.png";

const Header = () => {
  return (
    <header className="h-[328px]">
      <div className="flex items-center justify-between def-container pt-[64px]">
        <h1 className="text-[#1A1A1F] font-bold leading-[72px] text-[64px]">
          ბლოგი
        </h1>
        <img src={HeaderBlog} alt="Blog" />
      </div>
    </header>
  );
};

export default Header;
