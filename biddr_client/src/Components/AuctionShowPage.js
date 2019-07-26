import React, { Component } from "react";
import { Link } from "react-router-dom";
import { AuctionDetails } from "./AuctionDetails";
import { Auction } from "../api/auction";
import { Bid } from "../api/bid";
import { BidForm } from "./BidForm";
import { BidList } from "./BidList";

// import { PrimaryButton } from "office-ui-fabric-react/lib/Button";

export class AuctionShowPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      auction: null,
      bids:[]
    };
  }

  createBid(params) {
    Bid.create(params).then(data => {
      if (!data.errors) {
        this.props.history.push(`/auctions/${data.id}`);
      } else {
        this.setState({
          errors: data.errors
        });
      }
    });
  }

  componentDidMount() {
    const id = this.props.match.params.id;

    Auction.one(id).then(auction => {
      this.setState({
        auction,
        bids: auction.bids
      });
    });
  }


  render() {
    if (!this.state.auction) {
      return (
        <main className="Page">
          <h2>Auction doesn't exist!</h2>
        </main>
      );
    }

    return (
        <main className="Page">
         <>
        <div className="auction-show">
        
            <div className="leftside">
                <h2>{this.state.auction.title}</h2>
                <p>
                {this.state.auction.description}
                </p>
                <BidForm
                onSubmit={params => this.createBid(params)}
                />
                <h2>Previous Bids</h2>
                <BidList
                // bids={this.state.auction.bids}
                bids={this.state.bids}
                />
            </div>

            <div className="rightside">
               <h3>Current Price:</h3>
                <h3>
                Ends at:
                {this.state.auction.end_date}
                </h3>
            </div>
            
         </div>
        
         </>
         </main>
    );
  }
}
