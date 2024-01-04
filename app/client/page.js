"use client";
import { useState } from "react";

const ClientPage = () => {
  const [count, setCount] = useState(1);

  return (
    <div>
      <h1 className="text-4xl mb-4 font-bold">{count}</h1>
      <div className="flex flex-row gap-4">
        <button
          className="btn btn-primary"
          onClick={() => {
            count < 9 ? setCount(count + 1) : setCount(9);
          }}
        >
          Increase
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            count > 1 ? setCount(count - 1) : setCount(1);
          }}
        >
          Decrease
        </button>
      </div>
    </div>
  );
};

export default ClientPage;
