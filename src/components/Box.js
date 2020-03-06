import React from 'react';

const Box = ({color}) => {
    const style = {
        height: '200px',
        backgroundColor: color
    }
    return(
        <div style={style} className="col-2"></div>
    );
}
export default Box;