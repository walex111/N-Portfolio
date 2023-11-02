type SizeWH = {
  classname: string;
};

const Circle: React.FunctionComponent<SizeWH> = ({ classname }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="white"
      data-darkreader-inline-stroke=""
      className={classname}
    >
      <path
        d="M 2 50
                                    A 48 48 0 0 0 98 50
                                    A 48 48 0 0 0 2 50"
      ></path>
    </svg>
  );
};

export default Circle;

("motion-safe:animate-bounce");
