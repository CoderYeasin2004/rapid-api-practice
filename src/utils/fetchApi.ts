import axios from "axios";

export const baseUrl = "https://realtor-search.p.rapidapi.com"

export const fetchAPI = async (url: string) => {
    const { data } = await axios.get(url, {
        headers: {
            'X-rapidapi-key': "01b90e76f4msh657ddbc98fe8307p14cb70jsn593cf627ba28",
            'X-rapidapi-host': "realtor-search.p.rapidapi.com"
        }
    })
    return data;
}

// this is sensitive information, do not disclose with anyone