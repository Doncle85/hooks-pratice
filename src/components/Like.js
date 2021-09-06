import React, {useState} from 'react';

const Like = () => {
    let [nbIfLikes, setNbOfLikes] = useState(0);

    return (
        <div>
            {nbIfLikes}
            <button onClick={() => setNbOfLikes(nbIfLikes + 1)}>Like</button>
        </div>
    );
}
export default Like;
