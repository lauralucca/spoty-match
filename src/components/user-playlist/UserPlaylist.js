import React from 'react';

function UserPlaylist() {
    return (
        <div>
            <input type="text" placeholder="usuário do spotfy"/>
            <ul>
                <li>
                    <input type="checkbox" name="playlist" value="A" /> Playlist A
                </li>
                <li>
                    <input type="checkbox" name="playlist" value="B" /> Playlist B
                </li>
                <li>
                    <input type="checkbox" name="playlist" value="C" /> Playlist C
                </li>
            </ul>
        </div>
    );
}

export default UserPlaylist;