import React from 'react';
import './Board.css';

import { Card, CardContent, Typography } from '@mui/material';
// import { makeStyles } from '@mui/styles';

const cols = ["To Do", "In Progress", "Ready for Testing","Done"];
const boardTitle = "Example Board Title";
const footerText = "+ Add an item";
const dummydata = [
    {
        title:"title 1",
        tags:["bug","spike","escalation","new feature"],
    },
    {
        title:"looooooooooooooooooooooooong title",
        tags:["bug","spike","escalation","need help"],
    },
    {
        title:"title",
        tags:[],
    },
];

// const dummydata = [];

// const useStyles = makeStyles({
//     mainText: {
//         pt: 0,
//         pl: 0,
//     },
// });

const Homepage = () => {

    // const classes = useStyles();
    // console.log(classes);

    const tickets = dummydata.map((data,i) => {

        return(
                <Card>
                    <CardContent sx={{pt:'5px',pl:'5px'}}>
                        {data.tags.length > 0 && <div class="tags"> {getTagComponentsForTagText(data.tags)} </div> }
                        <Typography variant="subtitle1" align="left" noWrap="true" sx={{'lineHeight':1}}>
                            {data.title}
                        </Typography>
                    </CardContent>
                </Card>
        );
    });

    const cardColumns = cols.map((colHeader,index) => {
        return(
            <div class="column_container">
                <div class="col_header">
                    {colHeader}
                </div>
                <div class="col_cards">
                    {tickets}
                </div>
                <div class="col_footer">
                    <button class="addItemButton">{footerText}</button>
                </div>
            </div>)}
    );

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