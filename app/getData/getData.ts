import axios from "axios"

export const getNews = async () => {
    const data = await axios('http://192.168.89.177:8000/about/blog/')
    console.log(data);

    return data
}