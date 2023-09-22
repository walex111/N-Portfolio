import Link from "next/link";
import Github from "./Icons/Github";
import LinkedIn from "./Icons/Linkedin";

const Social = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Link href="https://github.com/walex111" passHref>
        <a target="_blank">
          <Github />
        </a>
      </Link>
      <Link href="https://www.linkedin.com/in/samsonwaleoketunmbi/" passHref>
        <a target="_blank">
          <LinkedIn />
        </a>
      </Link>
    </div>
  );
};

export default Social;
