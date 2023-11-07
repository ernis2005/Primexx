import axios from "axios"
export const api = 'http://192.168.89.177:8000'
export const getNews = async () => {
    const data = await axios('http://192.168.89.177:8000/about/blog/')

    return data.data
}
export const getNewsId = async (id: number) => {
    const data = await axios(`http://192.168.89.177:8000/about/blog/${id}`)

    return data.data
}
export const getRateTime = async () => {
    try {
        const data = await axios(`http://192.168.89.177:8000/about/rate_time/`)
        return data.data
    } catch (error) {
        return  error
        
    }
    
}
export const getRate = async () => {
    try {
        const data = await axios(`http://192.168.89.177:8000/about/rate/`)
        return data.data
    } catch (error) {
        return  error
    }
    
}
export const getCardPag1 = async () => {
    try {
        const data = await axios('http://192.168.89.177:8000/about/card/')
        return data.data
    } catch (error) {

        return  error
    }

}
export const getFAQ = async () => {
    try {
        const data = await axios('http://192.168.89.177:8000/about/faq/')
        return data.data
    } catch (error) {
        return  error
    }

}

export const getUser = async (kye:string) => {
    try {
        const data = await axios('http://192.168.89.177:8000/account/get/',{
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization: `Bearer ${kye} `,
            },
        })
        return data.data  
    } catch (error) {
        return error
        
    }
   
}