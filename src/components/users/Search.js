import React, {Component} from "react";

export class Search extends Component {
    state = {
        inputSearch: ''
    };

    handleInput = (event) => {
        this.setState({
            inputSearch: event.target.value
        });
    };

    searchUsers = (event) => {
        // ne pas faire submit
        event.preventDefault();
        this.props.getUserSearch(this.state.inputSearch);
    };

    render() {
        const {searchInput} = this.state;
        return (

            <form onSubmit={this.searchUsers}>
                <div className="form-group">
                    <input type="text" id="search" value={searchInput} onChange={this.handleInput}
                           className="form-control"/>
                </div>

                <button className="btn btn-success btn-block">Search</button>
            </form>

        )
    }
}
