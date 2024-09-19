import { createSignal, createEffect } from "solid-js";

function FullName() {
  const [firstName, setFirstName] = createSignal("");
  const [lastName, setLastName] = createSignal("");

  // Derived fullName
  const fullName = () => `${firstName()} ${lastName()}`;

  // Log when firstName, lastName or fullName updates
  createEffect(() => {
    console.log("Solid.js: firstName or lastName updated");
    console.log("Solid.js: Full Name is now:", fullName());
  });

  return (
    <div>
      <input
        type="text"
        placeholder="First Name"
        value={firstName()}
        onInput={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName()}
        onInput={(e) => setLastName(e.target.value)}
      />
      <p>Full Name: {fullName()}</p>
    </div>
  );
}

export default FullName;
