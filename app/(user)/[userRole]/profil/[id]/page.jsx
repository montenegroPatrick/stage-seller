function Profile({ params }) {
    console.log(params);
    // fetch user with id
    return <div>{params.id}</div>;
  }
  
  export default Profile;