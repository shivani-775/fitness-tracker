import React from 'react';
import './Profile.css';
import profilePic from './components/Assets/bhargav.jpg';

const Profile = () => {
  return (
    <div className="profile-page">
      <div className="profile-card">
        <img src={profilePic} alt="Profile" className="profile-image" />
        <div className="profile-info">
          <h2>User</h2>
          <p><strong>Age:</strong> 22</p>
          <p><strong>Favorite Activities:</strong> Running, Biking</p>
          <p><strong>Favorite Routes:</strong> Lakeside Loop, Hill Sprint</p>
          <p><strong>Leaderboard Rank:</strong> #7</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;