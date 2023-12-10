import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Card from "../../home/components/Card";

const AccountDetails = () => {
    const [userDetails, setUserDetails] = useState({
        username: ""
    });
    const { userId } = useParams();
    console.log("id-- here ",userId);

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/api/users/${userId}`);
                setUserDetails(response.data);
            } catch (error) {
                console.error('Error fetching user details:', error);
            }
        };

        fetchUserDetails();
    }, [userId]);


    return (
        <div className="container main-container">
            <h1 className="card-heading">User Details</h1>
            <hr/>
            <p className="card-text">  <strong className="card-heading"> Username: </strong> {userDetails.username}</p>
            <p className="card-text"> <strong className="card-heading">First Name: </strong>{userDetails.firstName}</p>
            <p className="card-text"> <strong className="card-heading">Last Name: </strong>{userDetails.lastName}</p>
            <p className="card-text"> <strong className="card-heading">Member Since:  </strong>{userDetails.memberSince}</p>
            <br/>
            <br/>
            <h1 className="card-heading">Favourite Movies:</h1>

            <div className='row d-flex'>
                <div className='col'>
                    <Card title="Card 1" description="Description 1" imageUrl="https://picsum.photos/200/300" cardId="1" />
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
            </div>
        </div>
    );
};

export default AccountDetails;
