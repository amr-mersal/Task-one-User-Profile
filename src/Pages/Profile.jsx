import React, { useState } from "react";

import Header from "../components/Header/Header";
import Skills from "./../components/SkillsSection/Skills";
import Edit_Profile from "./Edit_Profile";

const initialProfile = {
  name: "Amr Mersal",
  email: "Amr@gamil.com",
  bio: "Frontend developer  ",
  skills: ["JavaScript", "CSS", "React", "BootStrap", "HTML"],
};

const Profile = () => {
  const [user, setUser] = useState(initialProfile);
  const [isEditing, setIsEditing] = useState(false);
  const [showSkills, setShowSkills] = useState(false);

  const toggleSkills = () => setShowSkills((prev) => !prev);
  const toggleEdit = () => setIsEditing((prev) => !prev);
  const updateUser = (updatedUser) => {
    setUser((prev) => ({
      ...prev,
      ...updatedUser,
      skills: prev.skills, // This function allows skills to remain after user details are changed.
    }));
    setIsEditing(false); 
  };

  return (
    <>
      <div className="container">
        <Header />

        {isEditing ? (
          
          <Edit_Profile user={user} onSave={updateUser} />
        ) : (
          <div className="info">
            <p className="name">{user.name}</p>
            <p className="email">{user.email}</p>
            <p className="bio">{user.bio}</p>
          </div>
        )}

        <div className="button-group">
          <button className="btn skills-btn" onClick={toggleSkills}>
            Skills
          </button>
          <button className="btn edit-btn" onClick={toggleEdit}>
            {isEditing ? "Cancel" : "Edit Profile"}
          </button>
        </div>

        {showSkills && <Skills skills={user.skills} />}
      </div>
    </>
  );
};

export default Profile;
