import React from "react";
import ReactDOM from "react-dom";

function Heading() {
  return (
    <section id="title">
      <div class="container-fluid">
        <nav class="navbar navbar-expand-lg navbar-dark">
          <a class="navbar-brand" href="">
            bookworm.
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link" href="">
                  About us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#footer">
                  Contact
                </a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search book here..."
                aria-label="Search"
              ></input>
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            <div>
              <button type="button" class="btn btn-outline-dark signin">
                Sign in
              </button>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}

export default Heading;
