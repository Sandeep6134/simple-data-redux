import React from 'react';

function Option() {

    const selectOption = (e) => {
        console.log(e.target.value)
    }
    return (
        <div >
            <select onChange={(e) => (selectOption(e))} style={{ float: 'right' }}>
                <option value={0}>1</option>
                <option value={1}>2</option>
                <option value={2}>3</option>
            </select>
        </div>
    );
}

export default Option;