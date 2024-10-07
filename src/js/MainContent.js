import React from "react";

export default function MainContent() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFriendly: true,
    employment: "",
    favColor: "",
  });

  const id = React.useId();

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <label htmlFor={id + "firstName"}>First Name</label>
      <input
        type="text"
        id={id + "firstName"}
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
      />

      <label htmlFor={id + "lastName"}>Last Name</label>
      <input
        type="text"
        id={id + "lastName"}
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
      />

      <label htmlFor={id + "email"}>Email</label>
      <input
        type="email"
        id={id + "email"}
        name="email"
        value={formData.email}
        onChange={handleChange}
      />

      <label htmlFor={id + "comments"}>Comments</label>
      <textarea
        id={id + "comments"}
        name="comments"
        value={formData.comments}
        onChange={handleChange}
      />

      <div className="employment-section">
        <label htmlFor={id + "isFriendly"}>Are you friendly?</label>
        <input
          type="checkbox"
          id={id + "isFriendly"}
          name="isFriendly"
          checked={formData.isFriendly}
          onChange={handleChange}
        />
      </div>

      <div className="employment-section">
        <label>Employment Status:</label>
        <div>
          <input
            type="radio"
            id={id + "unemployed"}
            name="employment"
            value="unemployed"
            checked={formData.employment === "unemployed"}
            onChange={handleChange}
          />
          <label htmlFor={id + "unemployed"}>Unemployed</label>

          <input
            type="radio"
            id={id + "part-time"}
            name="employment"
            value="part-time"
            checked={formData.employment === "part-time"}
            onChange={handleChange}
          />
          <label htmlFor={id + "part-time"}>Part Time</label>

          <input
            type="radio"
            id={id + "full-time"}
            name="employment"
            value="full-time"
            checked={formData.employment === "full-time"}
            onChange={handleChange}
          />
          <label htmlFor={id + "full-time"}>Full Time</label>
        </div>
      </div>

      <label htmlFor={id + "favColor"}>What is your favorite color? </label>
      <select
        id={id + "favColor"}
        name="favColor"
        value={formData.favColor}
        onChange={handleChange}
      >
        <option value="">-- Choose --</option>
        <option value="red">Red</option>
        <option value="orange">Orange</option>
        <option value="yellow">Yellow</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="indigo">Indigo</option>
        <option value="violet">Violet</option>
      </select>

      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
  );
}
