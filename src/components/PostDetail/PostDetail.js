import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const PostDetail = () => {

    const { postId } = useParams();
    const [ post, setPost ] = useState({})

    useEffect( () => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setPost(data))
    } , [])
    
    return (
        <div>
            <h2>Post Details: {postId}</h2>
            <h3>{post.title}</h3>
            <h4>{post.body}</h4>
        </div>
    );
};

export default PostDetail;