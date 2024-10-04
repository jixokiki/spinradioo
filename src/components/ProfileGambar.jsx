import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import './PhotoProfile2.css';

const ProfileGambar = (props) => {
  const { profileImage } = props;

  return (

      <div className="profile-header">
        <img
          src={profileImage}
          alt="Foto Profil Anda"
          className="profile-image"
        />
      </div>

  );
};

// Definisi PropTypes untuk memvalidasi properti yang diberikan
ProfileGambar.propTypes = {
  profileImage: PropTypes.string.isRequired,
};

export default ProfileGambar;