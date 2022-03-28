import React from 'react';
import { useSelector } from 'react-redux';

import './profileList.css';
import EmployeeList from '../EmployeeList/EmployeeList';
import ProfileCard from '../ProfileCard/ProfileCard';

const ProfileList = ({ userList }) => {
  const { data, isCardVisible } = useSelector((state) => state.cardData);
  return (
    <div className="user-list">
      <table border="0">
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Access</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((empInfo) => {
            const { id, avatar, first_name, last_name, email } = empInfo;
            let empName = first_name + ' ' + last_name;
            return (
              <EmployeeList
                key={id}
                empId={id}
                empProfileImg={avatar}
                empName={empName}
                empEmail={email}
              />
            );
          })}
        </tbody>
      </table>
      {isCardVisible && <ProfileCard empData={data} />}
    </div>
  );
};

export default ProfileList;
