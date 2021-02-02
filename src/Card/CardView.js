import React, {Component} from "react";
import {Card} from "react-bootstrap";
import './CardView.css'
class CardView extends Component{
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <Card className="card" style={{ width: '10rem' }}>
                <Card.Body>
                    <Card.Text>
                        Bidders:  {this.props.count}
                    </Card.Text>

                </Card.Body>
            </Card>
        );
    }

} export default CardView
