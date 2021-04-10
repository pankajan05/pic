import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers : {
    Authorization: 'Client-ID Cq8pkgW8txs-LYlZU_ZXaOvfCuA8dLyKIrooYh9Z3WM'
    }
});
