import React from 'react';
import axios from 'axios';
import './App.css';
import SearchBar from './Components/SearchBar';

class App extends React.Component{
    /*onSearchSubmit(term) {
        axios.get('https://api.unsplash.com/search/photos',{
            params: {
                query: term
            },
            headers : {
                Authorization: 'Client-ID Cq8pkgW8txs-LYlZU_ZXaOvfCuA8dLyKIrooYh9Z3WM'
            }
        }).then((response) => {
            console.log(response.data.result);
        });
    }*/

    async onSearchSubmit(term) {
        const response = await axios.get('https://api.unsplash.com/search/photos',{
            params: {
                query: term
            },
            headers : {
                Authorization: 'Client-ID Cq8pkgW8txs-LYlZU_ZXaOvfCuA8dLyKIrooYh9Z3WM'
            }
        });
        console.log(response.data.results);
    }

    render() {
        return (
            <div className="App">
                <div className="container">
                    <SearchBar onSubmit={this.onSearchSubmit}/>
                </div>
            </div>
        );
    }
}

export default App;
