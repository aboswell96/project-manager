import React from 'react';
import './Board.css';

const cols = ["To Do", "In Progress", "Ready for Testing","Done"];
const boardTitle = "Example Board Title";
const footerText = "+ Add an item";

const Homepage = () => {

    const cardColumns = cols.map((colHeader,index) => {

        return(
            <div class="column_container">
                <div class="col_header">
                    {colHeader}
                </div>
                <div class="col_footer">
                    {/* {footerText} */}
                    <button class="addItemButton">{footerText}</button>
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
}

export default Homepage;