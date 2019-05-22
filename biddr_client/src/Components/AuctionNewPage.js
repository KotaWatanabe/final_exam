import React, { Component } from "react";
import { Auction } from "../api/auction";
import { AuctionForm } from "./AuctionForm";

export class AuctionNewPage extends Component {
  state = {
    errors: []
  };

  createAuction(params) {
    Auction.create(params).then(data => {
      if (!data.errors) {
        // The `history` prop is provide by the <Route>
        // component. It has a bunch of methods to manipulate
        // browser. You can use `push` to direct a user to any
        // page in our app.
        this.props.history.push(`/auctions/${data.id}`);
      } else {
        this.setState({
          errors: data.errors
        });
      }
    });
  }

  render() {
    return (
      <main className="Page">
        <h1>Create a new Auction Page</h1>

        {/* <FormErrors errors={this.state.errors} /> */}

        <AuctionForm
          errors={this.state.errors}
          onSubmit={params => this.createAuction(params)}
        />
      </main>
    );
  }
}
