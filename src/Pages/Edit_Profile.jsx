import React, { useState } from "react";

const Edit_Profile = ({ user, onSave }) => {
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    bio: user.bio,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="edit-form">
      <label>
        Name
        <input name="name" value={formData.name} onChange={handleChange} />
      </label>
      <label>
        Email
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Bio
        <textarea name="bio" value={formData.bio} onChange={handleChange} />
      </label>
      <button type="submit" className="btn edit-btn">
        Save
      </button>
    </form>
  );
};

export default Edit_Profile;
