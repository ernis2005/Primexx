import axios from "axios"

export const getNews = async () => {
    const data = await axios('http://192.168.89.177:8000/about/blog/')
 
    return data.data
}
export const getNewsId = async (id:number) => {
    const data = await axios(`http://192.168.89.177:8000/about/blog/${id}`)
 
    return data.data
}
export const getRateTime = async ()=> {
    const  data = await axios(`http://192.168.89.177:8000/about/rate_time/`)
    return data.data
}
export const getCardPag1 = async ()=> {
    const data = await axios('http://192.168.89.177:8000/about/card/')
    return data.data
}