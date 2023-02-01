import { useQuery } from '@tanstack/react-query';
import React from 'react';
import SectionHeading from '../utilities/SectionHeading';

const TableContent = () => {
    const heading = {
        subHeading: "Team", headingOne: "All", headingTwo: "Team member", describe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
    }
    const { data: destinations = [] } = useQuery({
        queryKey: ['destinations'],
        queryFn: async () => {
            const res = await fetch(
                'https://travel-server-woad.vercel.app/destinations',
            )
            const data = await res.json()
            return data?.destinations
        },
    })


    return (
        <div>
            <SectionHeading heading={ heading } />
        </div>
    );
};

export default TableContent;
