import React from 'react';

function SelectionType() {
    return (
        <ul>
            <li>
                <input type="radio" name="selectionType" value="artist" />por artistas
            </li>
            <li>
                <input type="radio" name="selectionType" value="music" />por músicas
            </li>
        </ul>
    );
}

export default SelectionType;