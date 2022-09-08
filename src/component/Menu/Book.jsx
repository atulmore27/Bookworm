import React from "react";

function Book() {
  return (
    <section id="">
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
        Book
        </button>
        <ul class="dropdown-menu">
          <li>
            <a class="dropdown-item" href="#">
              biographies & Memories
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Fiction
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              biographies & Memories
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Law
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Book;
