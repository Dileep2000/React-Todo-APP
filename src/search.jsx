import React from "react";
import './App.css'

class Search extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            search: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    handleChange (event) {
        this.setState({search:event.target.value})
    };
    handleClick (event) {
        console.log(this.state.search)
    };
    render () {
        return (
            <div className="search">
                <input className="search-input" type="text" value={this.state.search} onChange={this.handleChange}/>
                <button className="search-button" onClick={this.handleClick}>
                    {/* <img src="search.svg" alt="" /> */}
                    Search
                </button>
            </div>
        )
    }

}

export default Search