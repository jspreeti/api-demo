import React, { useEffect, useState } from "react";

export default function UserForm() {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  // handleSubmit() {

  // }

  return (
    <form>
      <div>Name</div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <div>Description </div>
      <textarea
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      ></textarea>
      <button type="submit">Add USer</button>
    </form>
  );
}
