import React, { Fragment } from 'react'
import loadingimg from '../../Assets/Images/loading.gif';

const loader = () => (
    <Fragment>
        <img src={loadingimg} style={{ display: 'block', margin: 'auto' }} />
    </Fragment>
);

export default loader;