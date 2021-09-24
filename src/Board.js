import React from 'react';
import './Board.css';

const cols = ["To Do", "In Progress", "Ready for Testing","Done"];
const footerText = "+ Add an item";

const Homepage = () => {

    const cardColumns = cols.map((colHeader,index) => {

        return(
            <div class="column_container">
                <div class="col_header">
                    {colHeader}
                </div>
                <div class="col_footer">
                    {footerText}
                </div>
            </div>)
        });

    return(
        <div class="vertical_swimlanes">
            {cardColumns}
        </div>
    );
}

export default Homepage;