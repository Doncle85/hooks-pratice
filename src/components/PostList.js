import React, {useState, useEffect} from 'react';
import axios from 'axios';

const PostList = () => {
    const [posts, setPosts] = useState([]);
    const [counter, setCounter] = useState(0);
    const [counterDisabled, setCounterDisabled] = useState(false);

    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then(result => {
                setPosts(result.data)
            })
    }, []);

   useEffect(() =>{
       if(counter === 3){
            setCounterDisabled(true)
       }
   }, [counter]);

   const resetCounter = () => {
       setCounter(0);
       setCounterDisabled(false);
   }


    return (
        <>
            <button onClick={e => setCounter(counter +1)}
            disabled={counterDisabled}>{counter}</button>
            <button onClick={resetCounter}>reset</button>
            <br/>
            <h2>Post List</h2>
            {posts.length > 0 && posts.map(p => <div key={p.id}>{p.title}</div>)
            }
        </>
    )
}


export default PostList