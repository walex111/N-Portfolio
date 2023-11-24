import Link from "next/link";
import Github from "./Icons/Github";
import LinkedIn from "./Icons/Linkedin";
import Behance from "./Icons/Behance";

type SizeWH = {
  className: any;
};

const Social: React.FunctionComponent<SizeWH> = ({ className }) => {
  return (
    <div className={className}>
      <Link href="https://github.com/walex111" passHref>
        <a className="hover:animate-spin" target="_blank">
          <Github
            width="60px"
            height="60px"
            classname={"stroke-cBlue dark:stroke-pBlue"}
          />
        </a>
      </Link>
      <Link href="https://www.linkedin.com/in/samsonwaleoketunmbi/" passHref>
        <a className="hover:animate-spin mr-2" target="_blank">
          <LinkedIn
            width="45px"
            height="45px"
            classname={"stroke-cBlue dark:stroke-pBlue"}
          />
        </a>
      </Link>
      <Link href="https://www.behance.net/samsonoketunmbi" passHref>
        <a className="hover:animate-spin" target="_blank">
          <Behance
            width="45px"
            height="45px"
            classname={"stroke-cBlue dark:stroke-pBlue"}
          />
        </a>
      </Link>
    </div>
  );
};

export default Social;
