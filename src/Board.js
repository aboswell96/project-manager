import React, { useState } from 'react';
import './Board.css';
import CreateTicketModal from './CreateTicketModal.js';

import { Card, CardContent, Typography } from '@mui/material';

const lists = ["To Do", "In Progress", "Ready for Testing","Done"];
const boardTitle = "Example Board Title";
const footerText = "+ Add an item";
const tempData = [
    {
        title:"title 1",
        list:"To Do",
        tags:["bug","spike","escalation","new feature"],
        description:"test description",
    },
    {
        title:"looooooooooooooooooooooooong title",
        list:"In Progress",
        tags:["bug","spike","escalation","need help"],
        description:"test description",
    },
    {
        title:"title",
        list:"Ready for Testing",
        tags:[],
        description:"test description",
    },
];

const Homepage = () => {

    const [isOpen,setIsOpen] = useState(false);
    const handleClose = () => setIsOpen(false);
    const [dummydata,SetDummyData] = useState(tempData);

    const handleCreateTicketSubmitted = (ticket) => {
        // alert(JSON.stringify(ticket));
        SetDummyData(dummydata.concat(ticket));
        handleClose();
    }

    const handleCreateTicket = () => {
        setIsOpen(!isOpen);
    }

    const cardColumns = lists.map((listName,index) => {

        const tickets = dummydata.filter(ticket => ticket.list === listName).map((data,i) => {

            return(
                    <Card key={i}>
                        <CardContent sx={{pt:'5px',pl:'5px'}}>
                            {data.tags.length > 0 && <div class="tags"> {getTagComponentsForTagText(data.tags)} </div> }
                            <Typography variant="subtitle1" align="left" noWrap="true" sx={{'lineHeight':1}}>
                                {data.title}
                            </Typography>
                        </CardContent>
                    </Card>
            );
        });

        return(
            <div class="column_container">
                <div class="col_header">
                    {listName}
                </div>
                <div class="col_cards">
                    {tickets}
                </div>
                <div class="col_footer">
                    <CreateTicketModal
                        isOpen={isOpen}
                        handleClose={handleClose}
                        handleCreateTicketSubmitted={handleCreateTicketSubmitted}
                        lists={lists}
                        defaultListValue={listName}
                    />
                    <button class="addItemButton" onClick={()=>handleCreateTicket()}>{footerText}</button>
                </div>
            </div>)
    });

    return(
        <div>
            <div class="board_options">
                {boardTitle}
            </div>
            <div class="vertical_swimlanes">
                {cardColumns}
            </div>
        </div>
    );
    
};

const getTagComponentsForTagText = (tags) => {

    return (
        tags.map((tag,i) => {

            const [textColor, bgColor, borderColor] = getBGColorForTag(tag);

            return(
                <Typography align="left" fontSize="smaller" bgcolor={bgColor} color={textColor} borderColor={borderColor} border={1} borderRadius="10px" paddingLeft='4px' paddingRight='4px'>
                    {tag}
                </Typography>
            );
        })
    )
}

const getBGColorForTag = (tag) => {

    //return: [textColor, bgColor, borderColor]
    // blue ["#58a6ff","#0d1f31", "#1d5279"]
    // red ["#df9ca6","#321820","#694048"]
    // green ["#a0eee4","#28393e","#4b7073"]
    // pink ["#d989d2","#321d35","#673d64"]
    // grey ["#c9d1d9","#30343a","#5f6367"]

    switch(tag) {

        case "bug":
            return ["#58a6ff","#0d1f31", "#1d5279"];
        case "spike":
            return ["#d989d2","#321d35","#673d64"];
        case "new feature":
            return ["#a0eee4","#28393e","#4b7073"]
        case "escalation":
            return ["#df9ca6","#321820","#694048"]
        default:
            return ["#c9d1d9","#30343a","#5f6367"]
    }
}

export default Homepage;