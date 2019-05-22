import React from "react";

export function AuctionDetails(props) {
  return (
      <>
            <div className="leftside">
                <h2>{props.title}</h2>
                <p>
                    {props.description}
                </p>
            </div>

            <div className="rigtside">
                <p>
                    Ends at:
                {props.end_date}
                </p>
            </div>
        
    </>
  );
}
