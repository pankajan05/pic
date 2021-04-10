import React from 'react';
import axios from './API/unsplash';
import './App.css';
import SearchBar from './Components/SearchBar';

class App extends React.Component{
    state = {images: []};
    /*onSearchSubmit(term) {
        axios.get('search/photos',{
            params: {
                query: term
            }
        }).then((response) => {
            console.log(response.data.result);
        });
    }*/

    onSearchSubmit = async (term) => {
        const response = await axios.get('search/photos',{
            params: {
                query: term
            }
        });
        this.setState({images: response.data.results});
    };

    render() {
        return (
            <div className="App">
                <div className="container">
                    <SearchBar onSubmit={this.onSearchSubmit}/>
                </div>
                Found: {this.state.images.length}
            </div>
        );
    }
}

export default App;
