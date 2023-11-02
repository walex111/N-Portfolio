import Circle from "./Circle";

type SizeWH = {
  classname: string;
};

const ElipseAnimationComb: React.FunctionComponent<SizeWH> = ({
  classname,
}) => {
  return (
    <div className={classname}>
      <div className="flex">
        <div className="w-10 h-10">
          <Circle classname="animate-pulse" />
        </div>
        <div className="w-10 h-10">
          <Circle classname="animate-pulse" />
        </div>
        <div className="w-10 h-10">
          <Circle classname="animate-pulse" />
        </div>
      </div>
      <div className="flex">
        <div className="w-10 h-10">
          <Circle classname="animate-pulse" />
        </div>
        <div className="w-10 h-10">
          <Circle classname="animate-pulse" />
        </div>
        <div className="w-10 h-10">
          <Circle classname="animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default ElipseAnimationComb;
