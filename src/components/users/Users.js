import React, {Component} from "react";
import axios from 'axios'
import {User} from "./User";
import {Search} from "./Search";


export class Users extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    getUsers = () => {
        axios.get('http://api.github.com/users').then(
            (response) => {
                this.setState({users: response.data});
            }
        )
    };

    componentDidMount() {
        this.getUsers();
    }

    getUserSearchFromGit = (data) => {

        if (data != null) {
            axios.get(`https://api.github.com/search/users?q=${data}`)
                .then((response) => {
                    this.setState({
                        users: response.data.items
                    })
                });
        }
    };

    render() {
        return (
            <div>
                <div className="row my-2">
                    <div className="col-12">
                        <Search getUserSearch={this.getUserSearchFromGit}/>
                    </div>
                </div>
                <div className="row">
                    {this.state.users.map((user, index) => (

                        <div className="col-md-4" key={index}>
                            <User user={user}/>
                        </div>

                    ))}
                </div>

            </div>
        )
    }

}
