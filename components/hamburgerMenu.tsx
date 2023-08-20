import Link from "next/link";

const HamburgerMenu = () => {
  return (
    <div className="flex justify-end pt-10 z-50 sticky">
      <Link passHref href="" className="">
        <a className="space-y-2">
          <span className="block w-5 h-0.5 bg-neutral-600"></span>
          <span className="block w-8 h-0.5 bg-neutral-600"></span>
          <span className="block w-8 h-0.5 bg-neutral-600"></span>
        </a>
      </Link>
    </div>
  );
};

export default HamburgerMenu;
