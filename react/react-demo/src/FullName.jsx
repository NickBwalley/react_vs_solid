import React, { useState, useEffect } from "react";

function FullName() {
  console.log("React FullName component re-rendered"); // Log re-render

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  // Update fullName when firstName or lastName changes
  useEffect(() => {
    setFullName(`${firstName} ${lastName}`);
  }, [firstName, lastName]);

  return (
    <div>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <p>Full Name: {fullName}</p>
    </div>
  );
}

export default FullName;
