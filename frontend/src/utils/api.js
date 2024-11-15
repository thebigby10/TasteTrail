import axios from "axios"

export const fetchRecipes = async() =>{
    try {
        const data = await axios.get("http://127.0.0.1:8000/recipe/");
        return data;
    } catch (error) {
        console.log(error)
    }
}

export const fetchRecipesForUser = async(email) =>{
    try {
        const data = await axios.get(`http://127.0.0.1:8000/recipe/user_post/user_email=${email}`)
        return data;
    } catch (error) {
        console.log(error);
    }
}