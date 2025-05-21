import "./Button.css";
import { useState } from "react";

function Button() {
  // let text = "Сохранить";
  const [text, setText] = useState("Сохранить");

  const cliked = () => {
    setText("Закрыть");
    text = "Закрыть";
    console.log("Hello!");
  };

  return (
    <button onClick={cliked} className="button accent">
      {text}
    </button>
  );
}

export default Button;
