import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';


const Buttons = ({onCreate, onRemove}) => {
    return (
        <div className = "Button">
            <div className = "btn add" onClick={onCreate}>
                Create
            </div>
            <div className = "btn remove" onClick={onRemove}>
                Remove
            </div>
        </div>
    );
};

Buttons.PropTypes = {
    onCreate: PropTypes.func,
    onRemove: PropTypes.func
};

Buttons.defaultProps = {
    onCreate: () => console.warn('onCreate not defined'),
    onRemove: () => console.warn('onRemove not defined')
};


export default Buttons;