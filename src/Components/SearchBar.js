import React from 'react';


class SearchBar extends React.Component{
    state = {temp: ''};

    /*onSearchBarChange = (event) =>{
        this.setState({temp: event.target.value});
    };*/

    onFormSubmit = (event) => {
        event.preventDefault(); //prevent refresh when user press enter

        this.props.onSubmit(this.state.temp);
    };

    render(){
        return (
            <div className="ui segment center aligned basic">
                <p style={{paddingRight:10}}>Image Search</p>
                <form className="ui left icon input" onSubmit={this.onFormSubmit}>
                    <i className="search icon"></i>
                    <input type="text" value={this.state.temp} onChange={(e => {this.setState({temp: e.target.value})})}/>
                </form>
            </div>);
    }
}

export default SearchBar;
