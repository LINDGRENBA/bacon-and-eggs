import React from 'react';

const Square = ({ value, onClick }) => {
    const style = value ? `squares ${value}` : "squares";

    return (
        <button className={style} onClick={onClick}>
            <span class="hidden">
                {value}
            </span>
        </button>
    )
};

export default Square;