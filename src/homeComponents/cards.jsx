// import React, {Component} from 'react';
// import ImgMediaCard from "./card";
// import ImgMediaCard2 from "./card2";
// import "./style.css";
// import {Link} from "react-router-dom";
// import graph from "./images/graph.png";
// import primes from "./images/primes.jpg"
// import sort from "./sort.png"
// import queen from './images/queen.PNG'
// import binSearch from './images/binaryTree.png'
// import {getDetails} from "./cardDetails";
// import TextField from "@material-ui/core/TextField";
// class Cards extends Component {

//     state = {
//         cards:[],
//         filter:""
//     }

//     componentDidMount() {
//         this.setState({cards:getDetails()});
//     }
//     getData = (e)=>{
//         console.log(e.target.value);
//         this.setState({filter:e.target.value});
//     }
//     render() {
//         return (
//            <React.Fragment>
//                <div className="d-flex justify-content-end Cards">
//                    <TextField
//                        id="standard-basic" label="Search"
//                        color="secondary"
//                        onChange={this.getData}
//                    />
//                </div>
//                <div className="d-flex flex-wrap justify-content-center Cards p-lg-5" >
//                    {
//                        this.state.cards.filter((card) => card.title.toLowerCase().includes(this.state.filter.toLowerCase())||card.description.toLowerCase().includes(this.state.filter.toLowerCase())).map(card=>(
//                            <div>
//                                <ImgMediaCard2
//                                    className="d-flex flex-wrap"
//                                    key={card.id}
//                                    card={card}/>
//                            </div>
//                        ))
//                    }

//                </div>
//            </React.Fragment>
//         );
//     }
// }

// export default Cards;


import React, { Component } from 'react';
import ImgMediaCard2 from "./card2";
import "./style.css";
import TextField from "@material-ui/core/TextField";
import { getDetails } from "./cardDetails";

class Cards extends Component {
    state = {
        cards: [],
        filter: ""
    }

    componentDidMount() {
        this.setState({ cards: getDetails() });
    }

    getData = (e) => {
        this.setState({ filter: e.target.value });
    }

    render() {
        return (
            <React.Fragment>
                <div className="d-flex justify-content-end CardsSearch">
                    <TextField
                        id="standard-basic" label="Search"
                        color="secondary"
                        onChange={this.getData}
                    />
                </div>
                <div className="d-flex flex-wrap justify-content-center Cards p-lg-5">
                    {
                        this.state.cards
                            .filter((card) => card.title.toLowerCase().includes(this.state.filter.toLowerCase()) || card.description.toLowerCase().includes(this.state.filter.toLowerCase()))
                            .map((card, index) => (
                                <div 
                                    key={card.id} 
                                    className={`card-container card-style-${index}`}
                                    style={{ margin: '10px', padding: '20px', borderRadius: '10px' }}
                                >
                                    <ImgMediaCard2
                                        card={card}
                                        className="d-flex flex-wrap"
                                    />
                                </div>
                            ))
                    }
                </div>
            </React.Fragment>
        );
    }
}

export default Cards;
