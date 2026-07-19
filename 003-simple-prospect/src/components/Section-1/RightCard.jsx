import RightCardContent from "./RightCardContent";

const RightCard = (props) => {
  return (
    <div className="h-full w-80 shrink-0 overflow-hidden rounded-4xl relative">
      <img
        src={props.img}
        alt=""
        className="h-full w-full object-cover"
      />
      <RightCardContent id={props.id} intro={props.intro} tag={props.tag}/>
      
    </div>
  );
};

export default RightCard;
