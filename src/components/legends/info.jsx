import React from "react";

const Info = (props) => {
  let children = props.children;
  console.log(children);

  return (
    <React.Fragment>
      <div className="row">
        {children.map((child, index) => {
          return (
            <div className="col-md-6" key={index}>
              <div className="card">
                <img
                  className="card-img-top"
                  src={child.metadata.bgimage}
                  alt="Bologna"
                />
                <div className="card-body text-center">
                  <img
                    className="avatar rounded-circle"
                    src={child.metadata.icon}
                    alt="Bologna"
                  />
                  <h4 className="card-title">{child.metadata.legend_name}</h4>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {child.metadata.is_active ? (
                      <span className="text-success">Active</span>
                    ) : (
                      <span className="text-danger">Inactive</span>
                    )}
                  </h6>
                  {/* <p className="card-text">
                    Robert John Downey Jr.'career has included critical and
                    popular success in his youth, followed by a period of
                    substance abuse and legal difficulties, and a resurgence of
                    commercial success in middle age.{" "}
                  </p> */}
                  <div className="row">
                    {child.stats.map((stat, j) => {
                      return (
                        <div className="col-md-12 mt-2" key={j}>
                          <div className="card card-body">
                            <h6>
                              {stat.metadata.name}
                              {": "}
                              <span className="text-success">
                                {stat.value ? stat.value : 0} (
                                {stat.percentile ? stat.percentile : 0}%)
                              </span>
                            </h6>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Info;
