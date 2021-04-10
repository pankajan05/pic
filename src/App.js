import React from 'react';
import axios from './API/unsplash';
import './App.css';
import SearchBar from './Components/SearchBar';
import ImageList from './Components/ImageList';

class App extends React.Component{
    state = {images: []};
   //this is another method to fetch the data from the api using subscription
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
                <ImageList images={this.state.images}/>
            </div>
        );
    }
}

export default App;
