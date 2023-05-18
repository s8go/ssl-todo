import React, { useRef } from "react";

const Prompt = ({ logUser }) => {
  const user = useRef();

  return (
    <div className="prompt_container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(user.current.value);
          logUser({ name: user.current.value });
        }}
      >
        <h1>WELCOME, please type in your name</h1>
        <input type="text" placeholder="name" ref={user} />
        <button type="submit">Enter</button>
      </form>
    </div>
  );
};

export default Prompt;
