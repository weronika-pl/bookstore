import React from "react";

export default function Pagination({ setCurrentPage }) {
  return (
    <div>
      <button onClick={() => setCurrentPage(1)}>1</button>
      <button onClick={() => setCurrentPage(2)}>2</button>
    </div>
  );
}
