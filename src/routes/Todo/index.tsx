import React, { FC, useState, useEffect } from "react";
import { dbService } from "firebase_config";
const Todo: FC = () => {
  const [todo, setTodo] = useState<string>("");

  const handleChange = (e: any) => {
    setTodo(e.target.value);
  };

  const handleClick = () => {
    dbService
      .collection("todoList")
      .add({
        isDone: false,
        todo,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    dbService.collection("todoList").onSnapshot((snapShot) => {
      console.log(snapShot.docs.map((doc) => doc));
    });
  }, []);

  return (
    <div>
      <input value={todo} onChange={handleChange} />
      <button onClick={handleClick}>submit</button>
    </div>
  );
};

export default Todo;
