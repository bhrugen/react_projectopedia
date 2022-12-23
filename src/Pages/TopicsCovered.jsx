import React from "react";
import projectList from "../Store/data";
function TopicsCovered() {
  return (
    <div className="container p-5 text-white">
      <div className="h3 text-success">Topics Covered</div>
      <hr />
      <div className="row">
        {projectList.map((project, index) => (
          <div key={index} className="border rounded m-3 p-2">
            <div className="h5 text-success">{project.title}</div>
            <p>{project.description}</p>
            <ul>
              {project.topicsCovered.map((topic, index) => (
                <li key={index}>{topic}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopicsCovered;
