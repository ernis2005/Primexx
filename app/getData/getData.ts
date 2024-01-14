/* eslint-disable @typescript-eslint/no-explicit-any */


import axios from "axios"
import Cookies from "js-cookie"
import { Api } from '../api'
const  kye = Cookies.get('uliId')

export const getNews = async () => {
    const data = await axios(`${Api}about/blog/`)

    return data.data
}
export const getNewsId = async (id: number) => {

    const data = await axios(`${Api}about/blog/${id}/`)

    return data.data
}
export const getCoy = async () => {
    try {
        const data = await axios(`${Api}about/country/`)
        return data.data
    } catch (error) {
        return  error
    }
}
export const getCoyId = async (id:number) => {
    try {
        const data:any  = await axios(`${Api}about/country/`)
        const filterData = data.data.filter((res:any)=> res.id == id )
        return filterData
    } catch (error) {
        return error
    }
}
export const getRateTime = async () => {
    try {
        const data = await axios(`${Api}about/rate_time/`)
        return data.data
    } catch (error) {
        return  error
    }
}
export const getRate = async () => {
    try {
        const data = await axios(`${Api}about/rate/`)
        return data.data
    } catch (error) {
        return  error
    }
    
}
export const getadditional_service = async () => {

    try {
        const data = await axios(`${Api}about/additional_service/`)
        return data.data
    } catch (error) {
        return  error
    }
}

export const getCardPag1 = async () => {
    try {
        const data = await axios(`${Api}about/card/`)
        return data.data
    } catch (error) {
        return  error
    }
}
export const getFAQ = async () => {
    try {
        const data = await axios(`${Api}about/faq/`)
        return data.data
    } catch (error) {
        return  error
    }

}
// export const getAboutUs = async () => {
//     try {
//         const data = await axios(`${Api}about/about_us/`)
//         return data.data
//     } catch (error) {
//         return  error
//     }

// }
export const getShop = async (props:{country__id:number,category__id:number}) => {
    try {
        const data = await axios(`${Api}about/shop/?country__id=${props.country__id}&category__id=${props.category__id}`)
        return data.data
    } catch (error) {
        return  error
    }

}
export const getBaseparcelsId = async (id:number) => {
    try {
        
        const data  = await axios.get(`${Api}flight/baseparcels/?search=${id}`)
        return data.data
    } catch (error) { 
        return error
    }
}
export const getBaseparcelsHistoryId = async (id:number) => {
    try { 
        const data  = await axios.get(`${Api}flight/history/?search=${id}`)
        return data.data
    } catch (error) {
        
        return error
    }
}
export const getBaseparcelsHistory = async () => {

    try {
        const data  = await axios.get(`${Api}flight/history/`,{
            headers: {
                accept: "application/json",
                Authorization: `Bearer ${kye} `,
            },
        }
        )

        return data.data
    } catch (error) {   
        return error
    }
}


export const getUser = async (kye:string) => {
    try {
        const data = await axios(`${Api}account/get/`,{
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

export const postPurchase_ordercreat =(data: {
    contact: string;
    comment: string;
    fullname: string; url: string; size: string; color: string; quantity: string; price: string; total_price: string; 
},counterName: string) =>{

    try {
        axios.post(`${Api}flight/purchase_order/create/`,{
            country:counterName,
            url:data.url,
            size:data.size,
            color:data.color,
            quantity:data.quantity,
            price:data.price,
            fullname:data.fullname,
            contact:data.contact,
            comment:data.comment,
        } )
        

    } catch (error) {
        
        
        return error
    }   
}
export const getCountry = async () => {
    try {
        const data = await axios(`${Api}about/country/`)
        return data.data
    } catch (error) {
        return error
    }
}

export const  getConsolidation = () => {
    try {
        const data = axios.get(`${Api}about/consolidation/`) 
        
        
        return data
    } catch (error) {
        return error
    }
}

export const codeSend = (email:string)=> {
    try {
        axios.get(`${Api}account/code/send/?type=2&email=${email}`)

    } catch (error) {
        return error
    }
}
export const postDeliveryOrder = (data: { Fullname: string; PhoneNumber: string; ClientCode: string; FullAddress: string; Comment: string; }, id:any) => {
    try { 
        const myto = Cookies.get('uliId');
        axios.post(`${Api}flight/delivery_order/create/`, {
            track_code: id,
            fullname: data.Fullname,
            phone: data.PhoneNumber,
            client_code: data.ClientCode,
            address: data.FullAddress,
            comment: data.Comment,
        }, {
            headers: {
                accept: "application/json",
                Authorization: `Bearer ${myto} `,
            },
        })
        
        return true
    } catch (error) {
        return error
    }
}
