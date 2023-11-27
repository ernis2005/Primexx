

import { kye } from "@/components/ServicesPages/Page6/Page6";
import axios from "axios"

export const api = 'http://192.168.89.177:8000'

console.log(kye);

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
export const getAboutUs = async () => {
    try {
        const data = await axios('http://192.168.89.177:8000/about/about_us/')
        return data.data
    } catch (error) {
        return  error
    }

}
export const getShop = async (props:{country__id:number,category__id:number}) => {
    try {
        const data = await axios(`http://192.168.89.177:8000/about/shop/?country__id=${props.country__id}&category__id=${props.category__id}`)
        return data.data
    } catch (error) {
        return  error
    }

}
export const getBaseparcelsId = async (id:number) => {

    try {
        const data  = await axios.get(`http://192.168.89.177:8000/flight/baseparcels/?search=${id}`)
        return data.data
    } catch (error) { 
        console.log(error);
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
