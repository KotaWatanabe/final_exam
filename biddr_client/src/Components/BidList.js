import React from 'react';
import { BidDetails } from './BidDetails';


export function BidList(props) {
    const { bids }= props;
    return(
        <ul 
        style={{
            listStyle: "none",
            paddingLeft: 0
        }}>
            {bids.map(bid =>(
                <li key={bid.id}>
                {/* <AnswerDetails
                body={answer.body}
                author={answer.author}
                created_at={answer.created_at}
                /> */}
                {/*
                In JSX, you can use the spread operator
                to pass properties of an object as props to the React element
                */}
                <BidDetails {...bid} />
            </li>
              ))}
        </ul>
    )
}
