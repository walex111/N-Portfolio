import Link from "next/link";

const HamburgerMenu = () => {
  return (
    <div className="fixed pt-10 z-50">
      <Link passHref href="" className="">
        <a className="space-y-2">
          <span className="block w-5 h-0.5 bg-black"></span>
          <span className="block w-8 h-0.5 bg-black"></span>
          <span className="block w-8 h-0.5 bg-black"></span>
        </a>
      </Link>
    </div>
  );
};

export default HamburgerMenu;
