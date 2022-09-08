import React from "react";

function Language() {
  return (
    <section id="">
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
Language
        </button>
        <ul class="dropdown-menu">
          <li>
            <a class="dropdown-item" href="#">
            English
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
             Marathi
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
  Hindi
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Language; 