import Circle from "./Circle";

type SizeWH = {
  classname: string;
};

const ElipseAnimationComb: React.FunctionComponent<SizeWH> = ({
  classname,
}) => {
  return (
    <div className={classname}>
      <div className="">
        <div className="w-16 h-16">
          <Circle classname={"stroke-cBlue dark:stroke-pBlue"} />
        </div>
        <div className="w-16 h-16">
          <Circle classname={"stroke-cBlue dark:stroke-pBlue"} />
        </div>
      </div>
      <div className="">
        <div className="w-16 h-16">
          <Circle classname={"stroke-cBlue dark:stroke-pBlue"} />
        </div>
        <div className="w-16 h-16">
          <Circle classname={"stroke-cBlue dark:stroke-pBlue"} />
        </div>
      </div>
    </div>
  );
};

export default ElipseAnimationComb;
