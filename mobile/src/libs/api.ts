import axios from "axios";

export const api = axios.create({
    baseURL: `http://${process.env.IP_PC}:3333`
})