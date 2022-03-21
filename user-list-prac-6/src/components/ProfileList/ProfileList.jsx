import React from 'react';
import { useSelector } from 'react-redux';

import './profileList.css';
import EmployeeList from '../EmployeeList/EmployeeList';
import ProfileCard from '../ProfileCard/ProfileCard';

const ProfileList = ({ userList }) => {
  const cardData = useSelector((state) => state.cardData.data);
  return (
    <div className='user-list'>
      <table border='0'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Access</th>
          </tr>
        </thead>
        <tbody>
          {
            userList.map((empInfo) => {
              const { id, avatar, first_name, last_name, email } = empInfo
              let empName = first_name + ' ' + last_name
              return (
                <EmployeeList
                  key={id}
                  empId={id}
                  empProfileImg={avatar}
                  empName={empName}
                  empEmail={email}
                />
              );
            })
          }
        </tbody>
      </table>
      {
        cardData !== false
        && <ProfileCard empData={cardData} />
      }
    </div>
  );
}

export default ProfileList;