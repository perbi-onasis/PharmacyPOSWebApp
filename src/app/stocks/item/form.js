"use client";

import React from "react";

export default function ProductForm() {
  const handleSubmitClick = (event) => {
    event.preventDefault();
  };

  return (
    <form>
      <label className="input input-bordered flex items-center gap-2">
        Name
        <input type="text" className="grow" placeholder="Daisy" />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        Email
        <input type="text" className="grow" placeholder="daisy@site.com" />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <input type="text" className="grow" placeholder="Search" />
        <kbd className="kbd kbd-sm">⌘</kbd>
        <kbd className="kbd kbd-sm">K</kbd>
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <input type="text" className="grow" placeholder="Search" />
        <span className="badge badge-info">Optional</span>
      </label>
      {/* if there is a button in form, it will close the modal */}
      <div className="join gap-2 pt-3 flex justify-end">
        <label htmlFor="add_item_model" className="btn join-item">
          Close!
        </label>
        <button onClick={handleSubmitClick} className="btn join-item btn-primary">
          submit
        </button>
      </div>
    </form>
  );
}
