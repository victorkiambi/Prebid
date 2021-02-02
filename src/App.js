import './App.css';
import React, {Component, Fragment} from "react";
import Jumbotron from "./Jumbotron/Jumbotron";
import BiddersTable from "./BiddersTable/BiddersTable";
import ResponsesTable from "./ResponsesTable/ResponsesTable";
import {Container} from "react-bootstrap";
import CardView from "./Card/CardView";

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: "",
            count:'',
            bidders: {
                    "bids": [
                        {
                            "bidderCode": "appnexus",
                            "width": 300,
                            "height": 250,
                            "statusMessage": "Bid available",
                            "adId": "7a53a9d3",
                            "creative_id": 29681110,
                            "cpm": 0.5,
                            "adUrl": "https://nym1.ib.adnxs.com/ab?e=wqT_3QLzBKBqAgAAAgDWAAUIkav6sAUQucfc0v-nzQcYj…r=http%3A%2F%2Flocal%3A4000%2Fexamples%2Fpbjs_partial_refresh_example.html",
                            "requestTimestamp": 1444844944095,
                            "responseTimestamp": 1444844944180,
                            "timeToRespond": 85,
                            "adUnitCode": "/19968336/header-bid-tag-0",
                            "bidder": "appnexus",
                            "usesGenericKeys": true,
                            "size": "300x250",
                            "adserverTargeting": {
                                "hb_bidder": "appnexus",
                                "hb_adid": "7a53a9d3",
                                "hb_pb": "0.50"
                            }
                        },{
                            "bidderCode": "pubmatic",
                            "width": "300",
                            "height": "250",
                            "statusMessage": "Bid available",
                            "adId": "1139e34e14",
                            "adSlot": "39620189@300x250",
                            "cpm": 1,
                            "ad": "<span class=\"PubAPIAd\"><script src='https://ad.turn.com/server/ads.js?pub=5757398&cch=36757096&code=37127675&l=3…tcGlkPUVERkNGMDY5LTA2ODctNDAxQy04NkMwLTIzQjNFNzI1MzdGNiZwYXNzYmFjaz0w_url='></script></span> <!-- PubMatic Ad Ends -->",
                            "adUrl": "https://aktrack.pubmatic.com/AdServer/AdDisplayTrackerServlet?operId=1&pubId…local%3A4000%2Fexamples%2Fpbjs_partial_refresh_example.html&lpu=hotels.com",
                            "dealId": "",
                            "requestTimestamp": 1444844944105,
                            "responseTimestamp": 1444844944354,
                            "timeToRespond": 249,
                            "adUnitCode": "/19968336/header-bid-tag-0",
                            "bidder": "pubmatic",
                            "usesGenericKeys": true,
                            "size": "300x250",
                            "adserverTargeting": {
                                "hb_bidder": "pubmatic",
                                "hb_adid": "1139e34e14",
                                "hb_pb": "1.00"
                            }
                        },
                        {
                            "bidderCode": "rubicon",
                            "width": "300",
                            "height": "250",
                            "statusMessage": "Bid available",
                            "adId": "130d3b0d9b",
                            "cpm": 0.795995,
                            "ad": "<scri...pt>",
                            "ad_id": "3161645",
                            "sizeId": "15",
                            "requestTimestamp": 1444844944116,
                            "responseTimestamp": 1444844944396,
                            "timeToRespond": 280,
                            "adUnitCode": "/19968336/header-bid-tag-0",
                            "bidder": "rubicon",
                            "usesGenericKeys": true,
                            "size": "300x250",
                            "adserverTargeting": {
                                "hb_bidder": "rubicon",
                                "hb_adid": "130d3b0d9b",
                                "hb_pb": "0.50"
                            }
                        }
                    ]

            }
        }

    }
    componentDidMount() {
        const data = this.props.data
        if (Object.keys(data).length === 0){
            this.setState({
                message: "no bidders available"
            })
        }
            else{
                this.setState({
                    bidders: this.props.data
                })
            console.log(data)
            }
        setTimeout(
            () => this.setState({
                count: this.state.bidders.bids.length }),
            2000
        );

        }



    render() {
        return (
            <Container>
                <Fragment >
                    <CardView count={this.state.count}/>
                    <h3>Bidders </h3>
                    <BiddersTable bidders={this.state.bidders}/>
                </Fragment>
            </Container>

        );
    }

}

export default App;
