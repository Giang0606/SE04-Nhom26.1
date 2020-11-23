import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            solution: [],
        };
    }

    componentDidMount() {
        fetch('./library.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }

        })
            .then((response) => response.json())
            .then((findresponse) => {
                console.log(findresponse)
                this.setState({ solution: findresponse });
            })
    }
    render() {
        return (
            <div className="container">
                <ul>
                    {this.state.solution.map(item =>
                        <div className="border border-blue item-news item item-news-common ">
                            <h3 className="title-news">
                                <a href="#">{item.header}</a>
                            </h3>
                            <img className="thumb-art border border-btn-info" src={item.img} style={{height: 100, width: 100}}></img>
                            <p style={{ display:"inline"}} className="p-3">{item.content}</p>
                           
                        </div>)}
                </ul>
            </div>
        );
    }

}

export default Home;