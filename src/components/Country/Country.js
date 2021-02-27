import React from 'react';

const Country = (props) => {
    const { name } = props;
    return (
        <div>
            <h4>{name}</h4>
        </div>
    );
};

export default Country;
