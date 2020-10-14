import React, {Component} from "react";
import axios from 'axios'


export class Users extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [
                {
                    login: "mojombo",
                    id: 1,
                    node_id: "MDQ6VXNlcjE=",
                    avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
                    url: "https://api.github.com/users/mojombo",
                    html_url: "https://github.com/mojombo",
                },
                {
                    login: "defunkt",
                    id: 2,
                    node_id: "MDQ6VXNlcjI=",
                    avatar_url: "https://avatars0.githubusercontent.com/u/2?v=4",
                    url: "https://api.github.com/users/defunkt",
                    html_url: "https://github.com/defunkt",
                }
            ]
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

    render() {
        return (
            <div>
                <div className="row">
                    {this.state.users.map((user) => (

                        <div className="col-md-4">
                            <div className="card">
                                <img className="card-img-top" src={user.avatar_url} alt=""/>
                                <div className="card-body">
                                    <h4 className="card-title">{user.login}</h4>
                                    <p className="card-text">
                                        <a href={user.html_url} className="btn btn-info">Show more</a>
                                        <a href={user.url} className="btn btn-primary">Repository</a>

                                    </p>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>

            </div>
        )
    }

}
