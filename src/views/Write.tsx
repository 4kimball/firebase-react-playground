import React, { FC, useState } from "react";
import { database } from "../firebase_config";

const WriteComponent: FC = () => {
  const [name, setName] = useState<string>("");

  const handleChangeName = (
    e: React.ChangeEvent<HTMLInputElement>,
    newValue: string
  ) => {
    setName(newValue);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // ref에 데이터를 저장할 url를 명시
    const response = await database.ref("test/name").set({
      name,
      createdAt: Date.now(),
    });
    console.log(response);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(e) => handleChangeName(e, e.target.value)}
        />
        <button>작성</button>
      </form>
    </div>
  );
};

export default WriteComponent;
