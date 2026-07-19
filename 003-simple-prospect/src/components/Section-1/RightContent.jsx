import RightCard from "./RightCard"
const RightContent = (props) => {
  return (
    <div id="right" className='h-full w-3/4 flex rpimded=4xl overflow-x-auto flex-nowrap gap-10 p-6'>
      {props.users.map(function(elem, idx){
        return <RightCard key={idx} id={idx} intro={elem.intro} img={elem.img} tag={elem.tag}/>
      })}
    </div>
  )
}

export default RightContent