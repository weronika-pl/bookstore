import React from "react";
import { Link } from "react-router-dom";

export default function Pagination() {
  return (
    <div className="pagination">
      <Link to="/books/1" className="page">1</Link>
      <Link to="/books/2" className="page">2</Link>
    </div>
  );
}
