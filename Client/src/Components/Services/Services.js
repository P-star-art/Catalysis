import React from 'react';
import Service from './Service/Service';

function Services(props) {

    const titles = ['books', 'stationary', 'cycles'];



    return (
        <div>
            {titles.map((title) => <Service title={title} />)}
        </div>
    )
}

export default Services
