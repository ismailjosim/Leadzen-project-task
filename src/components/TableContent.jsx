import React from 'react';
import SectionHeading from '../utilities/SectionHeading';

const TableContent = () => {
    const heading = {
        subHeading: "Team", headingOne: "All", headingTwo: "Team member", describe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
    }
    return (
        <div>
            <SectionHeading heading={ heading } />
        </div>
    );
};

export default TableContent;
