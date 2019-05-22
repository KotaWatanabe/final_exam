import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Auction } from "../api/auction";

export default class AuctionIndexPage extends Component{
    constructor(props){
        super(props);
        this.state ={
            auctions:[],
        }
    }

    componentDidMount() {
        Auction.all().then(auctions => {
            this.setState({ auctions:auctions });
        });
      }

    render(){
        return(
            <main className="Page">
                <div>
                    Auctions Index Page
                </div>
                <ul
                    style={{
                        listStyle: "none",
                        paddingLeft: 0
                    }}
                >
                {this.state.auctions.map(auction => (
                    <li key={auction.id}>
                    <Link to={`/auctions/${auction.id}`}>{auction.title}</Link>{" "}
                    <p>{auction.created_at}</p>
                    </li>
                ))}
                </ul>
                </main>
               
                
        )
    }
}
