import React from "react";

function ProjectCard({ project }) {
  const handleRedirect = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="col-12 col-sm-6 col-md-4 text-black">
      <div className="card m-3">
        <div className="card-body p-0">
          <div className="imageBox">
            <img
              src={project.imageUrl}
              style={{
                width: "100%",
                objectFit: "cover",
              }}
              alt="no content"
            />
            <div className="overlay">
              <button
                className="btn btn-light"
                onClick={() => handleRedirect(project.redirectUrl)}
              >
                <i className="bi bi-link-45deg"></i>
              </button>
            </div>
          </div>
          <div className="p-3">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div style={{ textAlign: "center" }}>
              {project.gitHubUrl && (
                <button
                  className="btn m-1 btn-dark"
                  onClick={() => handleRedirect(project.gitHubUrl)}
                >
                  <i className="bi bi-github"></i> Github
                </button>
              )}

              {project.youtubeUrl && (
                <button
                  className="btn m-1 btn-danger"
                  onClick={() => handleRedirect(project.youtubeUrl)}
                >
                  <i className="bi bi-youtube"></i> Youtube
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
