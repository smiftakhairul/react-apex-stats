import React from "react";

const Info = (props) => {
  let stats = props.stats;
  console.log(stats);

  return (
    <React.Fragment>
      <div className="row">
        {stats.map((stat, index) => {
          return (
            <div className="col-md-4 mb-3" key={index}>
              <div className="card card-body">
                <h6>{stat.metadata.name}</h6>
                <div className="text-success">
                  {stat.value ? stat.value : 0} (
                  {stat.percentile ? stat.percentile : 0}%)
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
