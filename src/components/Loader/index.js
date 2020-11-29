import React from "react";

export default function Loader() {
  return (
    <div className="loader__wrapper">
      <div>
        <img src="./img/cat-icons/writing.svg" alt="MaKuzya" width={160} />
        <h2 className="loader__title">Loading...</h2>
      </div>
    </div>
  );
}
