import React, { Component } from "react";
import { Link } from "react-router-dom";
import { BidList } from "./BidList";
import { AuctionDetails } from "./AuctionDetails";
import { Auction } from "../api/auction";
import { Bid } from "../api/bid";
import { BidForm } from "./BidForm";
// import { PrimaryButton } from "office-ui-fabric-react/lib/Button";

export class AuctionShowPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Auction: null
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;

    Auction.one(id).then(auction => {
      this.setState({
        auction
      });
    });
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

  render() {
    if (!this.state.auction) {
      return (
        <main className="Page">
          <h2>Auction doesn't exist!</h2>
        </main>
      );
    }

    return (
        <>
        <main className="Page">
            <div className="auction-show">
              <div className="leftside">
                <AuctionDetails {...this.state.auction} />
                <BidForm
                onSubmit={params => this.createBid(params)}
              />
                <h2>Previous Bids</h2>
                <BidList
                bids={this.state.auction.bids}
                />
              </div>

            </div>
         </main>
      </>
    );
  }
}
