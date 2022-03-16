import React from 'react'
import { useSelector } from 'react-redux';

import './profileList.css'
import OwnerProfile from '../OwnerProfile/OwnerProfile'
import EmployeeList from '../EmployeeList/EmployeeList'
import ProfileCard from '../ProfileCard/ProfileCard'

const ProfileList = () => {
  const cardData = useSelector((state) => state.cardData.data);
  const userList = useSelector((state) => state.empList.empListData);
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
              const { empId, profileImg, empName, empEmail, empStatus } = empInfo
              if (empId === '1') {
                return (
                  <OwnerProfile
                    key={empId}
                    empId={empId}
                    profileImg={profileImg}
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
                    profileImg={profileImg}
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
        cardData !== false &&
        <ProfileCard
          empData={cardData}
        />
      }
    </div>
  )
}

export default ProfileList