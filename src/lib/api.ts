import axios from "axios";
import { ApiResponse } from "@/types/jobs";

export const BASE_URL = `${process.env.NEXT_PUBLIC_BASE_URL}`
// export const api = axios.create({
//   baseURL: BASE_URL,
//   headers: {
//     'Content-Type': 'application/json',
//     'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`
//   },
// })
export const GET_JOBS = async (page: number) => {
    const result = await axios.get<ApiResponse>(`${BASE_URL}/jobs?page=${page}`);
    return result.data;
}