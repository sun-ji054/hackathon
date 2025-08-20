import axios from "axios";

export const api = axios.create({
    baseURL: "https://mypublishjy.site",
    headers: { 'Content-Type': 'application/json' }
});
