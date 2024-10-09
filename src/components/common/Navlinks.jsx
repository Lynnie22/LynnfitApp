import { NavLink } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa"; 
import { useState } from "react";
import './Navlinks.css';

const Navlinks = () => {
    const [isOpen, setIsOpen] = useState(false); //state for toggling sidebar

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    }
  return (
    <div>
      <nav  className="flex gap-5 items-center ">
        <NavLink to="/"
                className={({isActive}) => 
                    `transition-all duration-200 ease-in font-medium ${
                        isActive
                        ? "text-darkpink font-bold ease-in scale-110"
                        : "text-black"
                    }`
                }
        >
            Home
        </NavLink>

        <NavLink to="/logworkout"
                className={({isActive}) => 
                    `transition-all duration-200 ease-in font-medium ${
                        isActive
                        ? "text-darkpink font-bold ease-in scale-110"
                        : "text-black"
                    }`
                }
        >
            Log Workout
        </NavLink>

        <NavLink to="/"
                className={({isActive}) => 
                    `transition-all duration-200 ease-in font-medium ${
                        isActive
                        ? "text-darkpink font-bold ease-in scale-110"
                        : "text-black"
                    }`
                }
        >
            Workout History
        </NavLink>
        
        <NavLink to="/"
                className={({isActive}) => 
                    `transition-all duration-200 ease-in font-medium ${
                        isActive
                        ? "text-darkpink font-bold ease-in scale-110"
                        : "text-black"
                    }`
                }
        >
            Progress
        </NavLink>
      </nav>

      <div>
        <button onClick={toggleSidebar}>
            {isOpen ? (
                <FaTimes className="text-2xl text-darkpink"/>
            ) : (
                <FaBars className="text-2xl text-darkpink"/>
            )}
        </button>
      </div>

    </div>
  )
}

export default Navlinks
