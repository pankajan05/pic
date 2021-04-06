import React from 'react';


class SearchBar extends React.Component{
    state = {temp: ''};

    /*onSearchBarChange = (event) =>{
        this.setState({temp: event.target.value});
    };*/

    onFormSubmit(event){
        event.preventDefault();
    }

    render(){
        return (
            <div className="ui segment center aligned basic">
                <form className="ui left icon input" onSubmit={this.onFormSubmit}>
                    <i className="search icon"></i>
                    <input type="text" value={this.state.temp} onChange={(event => {this.setState({temp: event.target.value})})}/>
                </form>
            </div>);
    }
}

export default SearchBar;
