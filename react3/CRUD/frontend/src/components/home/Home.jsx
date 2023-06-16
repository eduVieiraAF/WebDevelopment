/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Main from "../template/Main";

export default (props) => (
  <Main icon="home" title="Start" subtitle="Course Project">
    <div className="display-4"> Welcome! </div>
    <hr />
    <div className="mb-0">
      Simple app to workt out how to build a simple CRUD application using
      <span className="text-info">
        &nbsp; <strong>React</strong>
      </span>
    </div>
  </Main>
);
