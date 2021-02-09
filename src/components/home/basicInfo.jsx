import React from "react";

const BasicInfo = (props) => {
  let profileBasicInfo = props.profileBasicInfo;
  console.log(profileBasicInfo);

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-md-3">
          <div className="card">
            <img
              src={process.env.PUBLIC_URL + "img/default-avatar.jpeg"}
              className="card-img-top"
              style={{ maxHeight: 200 }}
              alt=""
            />
            <div className="card-body">
              <h5 className="card-title">
                {profileBasicInfo.platformUserHandle}
              </h5>
            </div>
          </div>
        </div>
        <div className="col-md-9">
          <div className="card card-body">
            <p>Account ID: {profileBasicInfo.accountId}</p>
            <p>
              <img
                src={profileBasicInfo.rankImage}
                width="40px"
                height="40px"
                alt=""
              />
              <br />
              <span>{profileBasicInfo.rankName}</span>
            </p>
            <div className="row">
              <div className="col-md-4">
                <div className="card card-body">
                  <h6>Level</h6>
                  <div className="text-success">{profileBasicInfo.level}</div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card card-body">
                  <h6>Collections</h6>
                  <div className="text-success">
                    {profileBasicInfo.collections}
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card card-body">
                  <h6>Platform</h6>
                  <div className="text-success">
                    <React.Fragment>
                      {
                        {
                          1: <span>XBOX</span>,
                          2: <span>PSN</span>,
                          5: <span>Origin / PC</span>,
                        }[profileBasicInfo.platformId]
                      }
                    </React.Fragment>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BasicInfo;
