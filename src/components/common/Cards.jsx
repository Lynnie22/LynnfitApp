import { Link } from "react-router-dom"

const Cards = () => {
  return (
    <div className="relative grid h-96 grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-5 my-7">
      <div className="relative rounded-xl bg-white border-2 border-darkpink shadow-xl transition-all ease-in hover:drop-shadow-xl">
            <Link to="logworkout" className="absolute bottom-4 left-4 font-bold text-darkpink text-2xl">Log Workout</Link>
      </div>

      <div className="relative rounded-xl  bg-white border-2 border-darkpink shadow-xl transition-all ease-in hover:drop-shadow-xl">
            <Link to="logworkout" className="absolute bottom-4 left-4 font-bold text-darkpink text-2xl">Workout History</Link>
      </div>
    </div>
  )
}

export default Cards
