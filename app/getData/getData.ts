

import axios from "axios"
import Cookies from "js-cookie"
export const api = 'http://192.168.89.177:8000'
const  kye = Cookies.get('uliId')

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
        return error
    }
}
export const getBaseparcelsHistoryId = async (id:number) => {
    try { 
        const data  = await axios.get(`http://192.168.89.177:8000/flight/history/?search=${id}`)
        return data.data
    } catch (error) {
        
        return error
    }
}
export const getBaseparcelsHistory = async () => {

    try {
        const data  = await axios.get(`http://192.168.89.177:8000/flight/history/`,{
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

export const postPurchase_ordercreat =(data: {
    contact: string;
    comment: string;
    fullname: string; url: string; size: string; color: string; quantity: string; price: string; total_price: string; 
},counterName: string) =>{

    try {
        axios.post('http://192.168.89.177:8000/flight/purchase_order/create/',{
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
        console.log(error);
        
        return error
    }   
}
export const  getConsolidation = () => {
    try {
        const data = axios.get('http://192.168.89.177:8000/about/consolidation/') 
        console.log(data);
        
        return data
    } catch (error) {
        return error
    }
}

export const codeSend = (email:string)=> {
    try {
        axios.get(`http://192.168.89.177:8000/account/code/send/?type=2&email=${email}`)

    } catch (error) {
        return error
    }
}
export const postDeliveryOrder = (data: { Fullname: string; PhoneNumber: string; ClientCode: string; FullAddress: string; Comment: string; }, id: string) => {
    try { 
        const myto = Cookies.get('uliId');
        axios.post('http://192.168.89.177:8000/flight/delivery_order/create/', {
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