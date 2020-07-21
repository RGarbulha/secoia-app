import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { RootStore } from '../../store';
import { GetPost } from '../../actions/PostActions';
import {
    Post
} from "../../actions/PostActionsTypes";

export default function Posts() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetPost());
    }, []);

    const postState = useSelector((state: RootStore) => state.posts)


    return (
        <div>
            <h1>test</h1>
            {postState.posts && postState.posts.map((post: Post) => (
                <div key={post.id}><h3>{post.title}</h3></div>
            ))}
        </div>
    )
}
