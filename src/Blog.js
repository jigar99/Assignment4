
import React from 'react';
import Post from './Post';


function Blog(elements){
    if(elements.element.length === 0 || elements.element === undefined){
        return <div/>
    }
    return(
        <div>{elements.element.map((item) => <Post key={Math.random()} data={item}/>)}</div>
    );
}

export default Blog;