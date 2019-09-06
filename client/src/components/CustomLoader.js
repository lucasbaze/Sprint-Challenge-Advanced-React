import React, { useState } from 'react';

import { Dimmer, Loader } from 'semantic-ui-react';

const CustomLoader = ({ loading, type }) => {
    let loader = <h1>Loading</h1>;

    switch (type) {
        case 'text':
            loader = <h1>Loading</h1>;
            break;
        case 'spinner':
            loader = (
                <Dimmer active>
                    <Loader />
                </Dimmer>
            );
            break;
        default:
            break;
    }

    return <div>{loader}</div>;
};

export default CustomLoader;
