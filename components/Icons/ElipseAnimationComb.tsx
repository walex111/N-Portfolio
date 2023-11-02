import Circle from "./Circle";

const ElipseAnimationComb = ({ classname }): any => {
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
