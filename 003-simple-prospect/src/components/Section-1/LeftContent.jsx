import HeroText from './HeroText'
import ArrowText from './ArrowText'
const LeftContent = () => {
  return (
    <div className='h-full w-1/4 flex flex-col justify-between'>
      <HeroText /> 
      <ArrowText />
    </div>
  )
}

export default LeftContent