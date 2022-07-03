import React from "react";

export default function ErrorMessage({message}) {
  return (
    <div className="error-container">
      <h2 className="error-title">Search Failed</h2>
      <p className="error-message">{message}</p>
    </div>
  )
}