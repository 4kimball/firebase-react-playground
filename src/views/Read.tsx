import React, { FC, useState, useEffect } from "react";
import { database } from "../firebase_config";

const ReadComponent: FC = () => {
  const [name, setName] = useState<string>("");
  useEffect(() => {
    const startNameRef = database.ref("test/name");
    startNameRef.on("value", (data) => {
      setName(data.val().name);
    });
  }, []);
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export default ReadComponent;
