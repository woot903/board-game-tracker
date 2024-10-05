import React from "react";
import { Form } from 'react-bootstrap'

const Filters = ({setPlayerFilter, playerFilter}) => {

    const handlePlayerChange = (event) => {
        let newValue = event.target.value;
        setPlayerFilter(newValue);
    }

    const playersText = ()=> {
        if (Number(playerFilter) === 0) {
            return "Any Number of Players";
        } else if (Number(playerFilter) === 10){
            return "10+ Players"
        } else {
            return playerFilter.toString() + " Players";
        }
    }

    return (
        <div className="filters">
            <Form>
                <Form.Label># Of Players</Form.Label>
                <Form.Range min='0' max='10' value={playerFilter} onChange={handlePlayerChange}></Form.Range>
                <div className="text-center">{playersText()}</div>
            </Form>
        </div>
    );




}

export default Filters;