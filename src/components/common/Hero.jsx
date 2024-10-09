import Button from "./Button"
const Hero = ({heroTitle, HeroText}) => {
  return (
    <div>
      <img src="/src/assets/images/woman-training-weightlifting-gym.jpg"  alt="image of woman in gym"
      className="h-1/2 w-full object-cover rounded-xl"/>
      <div className="absolute flex flex-col inset-0 justify-center items-center">
        <h1 className="text-8xl font-extrabold text-white">{heroTitle}</h1>
        <p className="text-4xl text-white font-medium">{HeroText}</p>
        <Button/>
      </div>



    </div>
  )
}

export default Hero
