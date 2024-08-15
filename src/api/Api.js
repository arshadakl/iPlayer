import axios from "axios";

const BASE_URL= import.meta.env.VITE_BASE_API_URL

export const instance = axios.create({
    baseURL:BASE_URL
})


export const Trending_API = async()=>{
    try {
        const res = await instance.get(`trending.json`)
        return res.data
    } catch (error) {
        
    }
}

export const Movie_API = async()=>{
    try {
        const res = await instance.get(`movie.json`)
        return res.data
    } catch (error) {
        
    }
}