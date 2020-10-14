import React, {Component} from "react";
import axios from 'axios';
import {User} from "./User";

export class UserItem extends Component {
    state = {
        user: {}
    };

    getUserItems = () => {
        const login = this.props.match.params.login;
        axios.get(`https://api.github.com/users/${login}`)
            .then((response) => {
                this.setState({
                    user: response.data
                })
            })
    };

    componentDidMount() {
        this.getUserItems();
    }

    render() {
        const {user} = this.state;
        return (
            <div>
                <User user={user}/>
            </div>
        )
    }

}
