import React, { useState } from 'react';

const FrameworksList = () => {
    let  [frameworks, setFrameworks] = useState([
        {
            id: 1,
            name: 'React'
        },
        {
            id: 2,
            name: 'Vue'
        },
        {
            id: 3,
            name: 'Angular'
        }
    ]);

    let [frameworkName, setFrameworkName] = useState('');

    const addFramework = (e) => {
        e.preventDefault();
        setFrameworks([...frameworks, { id: Date.now(), name: frameworkName}]);
        setFrameworkName('')
    }
    return (
        <div>
            <form onSubmit={addFramework}>
                <input
                    type='text'
                    value={frameworkName}
                    onChange={e => setFrameworkName(e.target.value)}/>
                <button type='submit'>add</button>
            </form>
        </div>
    );
}

export default FrameworksList