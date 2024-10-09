import {  useState } from "react"
import SearchBar from "../common/SearchBar";
import SearchResults from "../common/SearchResults";


const SearchPage = () => {
    const [results, setResults] = useState([]);
    const [selectedExercise, setSelectedExercise] = useState(null);
 

    const handleSelectExercises = (exercise) => {
        setSelectedExercise(exercise);
    }

   


  return (
    <div className="flex h-screen justify-center items-center">
      <div className="w-full h-full">
        <SearchBar setResults={setResults}/>
        <SearchResults results={results} onSelectExercise={handleSelectExercises}/>

        {
            results.length === 0 ? (
                <div className="mt-4 text-gray-500">No exercises found. please try another search</div>
            ) : selectedExercise ? (
                <div className="mt-4">
                    <h2 className="font-bold text-lg">{selectedExercise.name}</h2>
                    <p>{selectedExercise.description}</p>

                    
                </div>
            ): null
        }
      </div>

    </div>
  )
}

export default SearchPage
