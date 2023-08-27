import axios from './axiosInstance'

const getProduct = ( productId ) => axios.get(`/products/${productId}`)
    .then(response => response.data)
    .catch(console.log);


export default {
    getProduct,
}