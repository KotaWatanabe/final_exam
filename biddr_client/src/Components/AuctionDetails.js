import React from "react";
import { BidForm } from "./BidForm";
import { BidList } from "./BidList";

export function AuctionDetails(props) {

  return (
      <>
        <div className="auction-show">
        
            <div className="leftside">
                <h2>{props.title}</h2>
                <p>
                {props.description}
                </p>
                <BidForm
                onSubmit={params => this.createBid(params)}
                />
                <h2>Previous Bids</h2>
                <BidList
                bids={props.bids}
                />
            </div>

            <div className="rightside">
               <h3>Current Price:</h3>
                <h3>
                Ends at:
                {props.end_date}
                </h3>
            </div>
            
         </div>
        
    </>
  );
}
