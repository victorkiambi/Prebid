import React, {Component} from "react";
import {Table} from "react-bootstrap";

class BiddersTable extends Component{
    constructor(props) {
        super(props);


    }

    render() {
        return (
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Bidder</th>
                    <th>Ad Id</th>
                    <th>cpm	</th>
                </tr>
                </thead>
                <tbody>
                {
                    this.props.bidders.bids.map((bid,index)=>

                        <tr key={index}>
                            <td>{bid.bidderCode}</td>
                            <td>{bid.adId}</td>
                            <td>{bid.cpm}</td>
                        </tr>
                    )
                }

                </tbody>
            </Table>
        );
    }

}
export default BiddersTable
