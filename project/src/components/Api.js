// api.js

export const fetchCharacters = async () => {
    try{
    const res = await fetch('https://thronesapi.com/api/v2/Characters');
    const data = await res.json();
    return data;
    } 
    catch (error) {
    console.error("There was an error fetching the characters:", error);
    return [];
    }
};