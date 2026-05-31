'use client';

import { useState } from "react";

export default function Form() {
  const [email, setEmail] = useState("");
  const [touched, setTouched] = useState(false);

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onBlur={() => setTouched(true)}
        placeholder="Email"
      />

      {touched && email === "" && (
        <p>Email is required</p>
      )}
    </div>
  );
}
