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
               <p>Current Price:</p>
                <p>
                Ends at:
                {props.end_date}
                </p>
            </div>
            
         </div>
        
    </>
  );
}
