import React from "react";
import "./index.css";
import WatchlistItem from "./components/watchlistItem";
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

const Watchlist = () => {
    const { userIsSet } = useSelector((state) => state.userReducer);
    const navigate = useNavigate();
    // useEffect(() => {
    //     if (!userIsSet) {
    //         navigate("/account/users");
    //     }
    // }, [userIsSet]);

    const content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc scelerisque viverra mauris in aliquam sem. Nunc sed velit dignissim sodales ut. Montes nascetur ridiculus mus mauris vitae ultricies leo. Facilisis magna etiam tempor orci eu lobortis elementum nibh. Dolor purus non enim praesent elementum facilisis. Sit amet luctus venenatis lectus magna fringilla urna porttitor rhoncus. Placerat vestibulum lectus mauris ultrices eros in cursus. Laoreet suspendisse interdum consectetur libero id faucibus.";
    return (
        <div className='container p-4 main-container'>
            <h1>Watchlist</h1>
            <WatchlistItem imageUrl={"https://picsum.photos/180/250"} movieName={"Movie name"} description={content}/>
            <WatchlistItem imageUrl={"https://picsum.photos/180/250"} movieName={"Movie name"} description={content}/>
            <WatchlistItem imageUrl={"https://picsum.photos/180/250"} movieName={"Movie name"} description={content}/>
            <WatchlistItem imageUrl={"https://picsum.photos/180/250"} movieName={"Movie name"} description={content}/>
            <WatchlistItem imageUrl={"https://picsum.photos/180/250"} movieName={"Movie name"} description={content}/>
            <WatchlistItem imageUrl={"https://picsum.photos/180/250"} movieName={"Movie name"} description={content}/>
        </div>
    );
};

export default Watchlist;