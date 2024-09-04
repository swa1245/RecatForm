import React, { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    text: "",
    check: true,
    rad: "",
    car: "",
  });

  function submitHandler(event) {
    event.preventDefault();
    console.log(formData);
  }

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <form
        onSubmit={submitHandler}
        className="bg-white p-8 rounded-lg shadow-lg space-y-6"
      >
        <input
          type="text"
          placeholder="First Name"
          onChange={changeHandler}
          name="firstName"
          value={formData.firstName}
          className="w-full p-2 border border-gray-300 rounded-md"
        />

        <input
          type="text"
          placeholder="Last Name"
          onChange={changeHandler}
          name="lastName"
          value={formData.lastName}
          className="w-full p-2 border border-gray-300 rounded-md"
        />

        <input
          type="email"
          placeholder="Enter Email"
          onChange={changeHandler}
          name="email"
          value={formData.email}
          className="w-full p-2 border border-gray-300 rounded-md"
        />

        <textarea
          name="text"
          onChange={changeHandler}
          placeholder="Text"
          value={formData.text}
          className="w-full p-2 border border-gray-300 rounded-md"
        />

        <div className="flex items-center">
          <input
            type="checkbox"
            onChange={changeHandler}
            name="check"
            id="check"
            checked={formData.check}
            className="mr-2"
          />
          <label htmlFor="check" className="text-gray-700">
            Are you visible?
          </label>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <input
              type="radio"
              onChange={changeHandler}
              name="rad"
              id="onlineMode"
              value="onlineMode"
              checked={formData.rad === "onlineMode"}
              className="mr-2"
            />
            <label htmlFor="onlineMode" className="text-gray-700">
              Online Mode
            </label>
          </div>

          <div className="flex items-center">
            <input
              type="radio"
              onChange={changeHandler}
              name="rad"
              id="offlineMode"
              value="offlineMode"
              checked={formData.rad === "offlineMode"}
              className="mr-2"
            />
            <label htmlFor="offlineMode" className="text-gray-700">
              Offline Mode
            </label>
          </div>
        </div>

        <div>
          <select
            name="car"
            id="car"
            value={formData.car}
            onChange={changeHandler}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="Scorpio">Scorpio</option>
            <option value="Mahindra">Mahindra</option>
            <option value="Maruti">Maruti 500</option>
          </select>
          <label htmlFor="car" className="block text-gray-700 mt-2">
            Select Your Favorite Car
          </label>
        </div>

        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
