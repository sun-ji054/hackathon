import axios from "axios";

export const api = axios.create({
    baseURL: "https://hufs-likelion.store",
    headers: { 'Content-Type': 'application/json' }
});
