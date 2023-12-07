import React, { useState } from 'react';
import Card from './Card';
import "./index.css";

const CardSlider = ({ title }) => {
    const uid = title.replace(/\s+/g, '');
    const refid = `#${uid}`;
    return (
        <div>
            <h1 className="carousel-title mt-5">{title}</h1>
            <div id={uid} className="carousel slide" data-bs-ride="carousel" data-bs-interval="false">
                <div className="carousel-inner custom-carousel">
                    <div className="carousel-item active ">
                        <div className='row d-flex'>
                            <div className='col'>
                                <Card title="Card 1" description="Description 1" imageUrl="https://picsum.photos/200/300" />
                            </div>
                            <div className='col'>
                                <Card title="Card 2" description="Description 2" imageUrl="https://picsum.photos/200/300" />
                            </div>
                            <div className='col'>
                                <Card title="Card 3" description="Description 3" imageUrl="https://picsum.photos/200/300" />
                            </div>
                            <div className='col'>
                                <Card title="Card 4" description="Description 4" imageUrl="https://picsum.photos/200/300" />
                            </div>
                            <div className='col'>
                                <Card title="Card 5" description="Description 5" imageUrl="https://picsum.photos/200/300" />
                            </div>
                            <div className='col'>
                                <Card title="Card 6" description="Description 6" imageUrl="https://picsum.photos/200/300" />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item ">
                        <div className='row d-flex'>
                        <div className='col'>
                                <Card title="Card 1" description="Description 1" imageUrl="https://picsum.photos/200/300" />
                            </div>
                            <div className='col'>
                                <Card title="Card 2" description="Description 2" imageUrl="https://picsum.photos/200/300" />
                            </div>
                            <div className='col'>
                                <Card title="Card 3" description="Description 3" imageUrl="https://picsum.photos/200/300" />
                            </div>
                            <div className='col'>
                                <Card title="Card 4" description="Description 4" imageUrl="https://picsum.photos/200/300" />
                            </div>
                            <div className='col'>
                                <Card title="Card 5" description="Description 5" imageUrl="https://picsum.photos/200/300" />
                            </div>
                            <div className='col'>
                                <Card title="Card 6" description="Description 6" imageUrl="https://picsum.photos/200/300" />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item ">
                        <div className='row d-flex'>
                        <div className='col'>
                                <Card title="Card 1" description="Description 1" imageUrl="https://picsum.photos/200/300" />
                            </div>
                            <div className='col'>
                                <Card title="Card 2" description="Description 2" imageUrl="https://picsum.photos/200/300" />
                            </div>
                            <div className='col'>
                                <Card title="Card 3" description="Description 3" imageUrl="https://picsum.photos/200/300" />
                            </div>
                            <div className='col'>
                                <Card title="Card 4" description="Description 4" imageUrl="https://picsum.photos/200/300" />
                            </div>
                            <div className='col'>
                                <Card title="Card 5" description="Description 5" imageUrl="https://picsum.photos/200/300" />
                            </div>
                            <div className='col'>
                                <Card title="Card 6" description="Description 6" imageUrl="https://picsum.photos/200/300" />
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target={refid} data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target={refid} data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default CardSlider;
