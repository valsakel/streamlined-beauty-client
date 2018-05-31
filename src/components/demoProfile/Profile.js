import React from 'react';



const Profile = (props) => {
  return (
    <React.Fragment>
    <div>Hello User Profile</div>
      <button
        className="button icon-left"
        onClick={props.history.goBack}>
        Back to the board
      </button>
    </React.Fragment>
  );
};

export default Profile;