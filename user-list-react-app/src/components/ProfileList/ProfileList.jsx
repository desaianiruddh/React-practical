import React from 'react';
import { useSelector } from 'react-redux';

import './profileList.css';
import OwnerProfile from '../OwnerProfile/OwnerProfile';
import EmployeeList from '../EmployeeList/EmployeeList';
import ProfileCard from '../ProfileCard/ProfileCard';
import EmptyEmployee from '../EmptyEmployee/EmptyEmployee';

const ProfileList = () => {
  const userList = useSelector((state) => state.empList.empListData);
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
            userList.map((empInfo, index) => {
              const { empId, empProfileImg, empName, empEmail, empStatus } = empInfo
              if (empId === '1') {
                return (
                  <OwnerProfile
                    key={empId}
                    empId={empId}
                    empProfileImg={empProfileImg}
                    empName={empName}
                    empEmail={empEmail}
                  />
                )
              }
              else {
                return (
                  <EmployeeList
                    key={empId}
                    empId={empId}
                    empProfileImg={empProfileImg}
                    empName={empName}
                    empEmail={empEmail}
                    empStatus={empStatus}
                  />
                )
              }
            })
          }
        </tbody>
      </table>
      {
        userList.length === 1
        && <EmptyEmployee />
      }
      {
        cardData !== false
        && <ProfileCard empData={cardData} />
      }
    </div>
  );
}

export default ProfileList;