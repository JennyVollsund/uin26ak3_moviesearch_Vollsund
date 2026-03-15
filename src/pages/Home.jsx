import { useEffect, useState } from "react"
import History from "../components/History"
import MovieCard from "../components/MovieCard"

export default function Home(){
    const [search, setSearch] = useState("")
    const [movies, setMovies] = useState([])
    const storedHistory = localStorage.getItem("search")
    const [focused, setFocused] = useState(false)
    const [history, setHistory] = useState(storedHistory ? JSON.parse(storedHistory) : [])




    console.log("denne kommer fra storage", storedHistory)

    const baseUrl= `http://www.omdbapi.com/?s=${search}&apikey=`
    const apiKey= import.meta.env.VITE_APP_API_KEY

    useEffect(()=>{
          localStorage.setItem("search", JSON.stringify (history))
    },[history])

    useEffect(()=>{
        getMovies("James Bond")
    },[])

    

    const getMovies = async(query)=>{
        try
        {
            const response = await fetch(`${baseUrl}${apiKey}`)
            const data = await response.json()
            console.log(data)

        }
        catch(err){
            console.error(err);
        }
    }
    const handleChange = (e) => {
    const value = e.target.value
    setSearch(value)

    if (value.length >= 3) {
        getMovies(value)
    }
}


    // const handleChange = (e)=>{
    //     setSearch(e.target.value)
    // }

    const handleSubmit = (e)=>{
        e.preventDefault()
        setHistory((prev) =>[...prev,search])
        e.target.reset()
    }
    console.log(history)
  return (
        <main>
            <h1>Forside</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Søk etter film:
                    <input type="search" placeholder="Harry Potter" onChange={handleChange} onFocus={() => setFocused(true)} /*onBlur={() => setFocused(false)}*/></input>
                </label>
                {focused ?
                    <History history={history} setSearch={setSearch} /> : null}
                <button onClick={getMovies}>Søk</button>

            </form>

        </main>

    )
}