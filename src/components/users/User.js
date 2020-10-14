import React, {Component} from "react";
import {Link} from "react-router-dom";


export class User extends Component {

    render() {
        const {login, avatar_url, html_url, url} = this.props.user;
        return (
            <div>
                <div className="card">
                    <img className="card-img-top" src={avatar_url} alt=""/>
                    <div className="card-body">
                        <h4 className="card-title">{login}</h4>
                        <p className="card-text">
                            <Link to={'user/' + login} className="btn btn-info">Show more</Link>
                            <a href={url} className="btn btn-primary">Repository</a>
                        </p>
                    </div>
                </div>
            </div>
        )
    }

}


