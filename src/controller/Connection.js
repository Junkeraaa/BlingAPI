import axiosInstance from './axios.js'

export async function teste() {
    const response = await axiosInstance.get()
    console.log(response.data.data)
}

export async function abc() {
    console.log('teste')
}