import React from "react"; 
import Recipe from "./Recipe";
import "./App.css"; 

const App = () => {
    const APP_ID = "21e3fb8b";
    const APP_KEY = "b4be7f979894ca769fc8519380f0acd9";

    const exampleReq = "https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}";

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState([]);

    const [counter, setCounter] = useState(0);

    useEffect( async () => {
        getRecipes();
    }, []);

    const getRecipes = async() => {
        const response = await fetch("https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}");
        const data = await response.json();
        setRecipes(data.hits);
    };

    return (
        <div className="App">
            <form className="search-form">
                <input className="search-bar" type="text"/>
                <button className="search-button" type="submit"/> 
            </form>
            <h1 onClick={() => setCounter(counter +1)}>{counter} </h1>
            {recipes.map(recipe =>(
                <Recipe title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image}/>
            ))}
        </div>
    );
};

export default App;