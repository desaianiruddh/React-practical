import React from 'react';
import { useSelector } from 'react-redux';

const UserCard = () => {
  const userData = useSelector((state) => state.userData.userLoginData);
  console.log(userData);
  const { name, email, phoneNo, profilePhoto } = userData;
  
  return (
    <div className="mt-5 mx-5 d-flex justify-content-center">
      <div className="user-card bg-white p-5 text-center fs-4">
        <div className="m-5">
          <img src={profilePhoto} className='user-img' alt="profile-pic" />
        </div>
        <div>Hello {name}</div>
        <div>
          You are registered with the Email id {email} and Phone Number {phoneNo}
        </div>
      </div>
    </div>
  );
};

export default UserCard;
