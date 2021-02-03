import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Helper from "../../../services/helper";

const ConfigUser = () => {
  const { register, handleSubmit, errors } = useForm({
    mode: "onChange",
  });

  // let { touched, dirtyFields } = formState;
  let history = useHistory();
  const helperService = new Helper();

  const onApexConfigSubmit = (data) => {
    let isUsernameSet = helperService.setStorageItem(
      "apex_username",
      data.apex_username
    );
    let isPlatformSet = helperService.setStorageItem(
      "apex_platform",
      data.apex_platform
    );
    if (isUsernameSet && isPlatformSet) {
      history.push("/");
    }
  };

  return (
    <React.Fragment>
      <div className="row justify-content-md-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Apex Config</div>
            <div className="card-body">
              <form onSubmit={handleSubmit(onApexConfigSubmit)}>
                <div className="form-group">
                  <label htmlFor="apex_platform">Platform</label>
                  <select
                    name="apex_platform"
                    id="apex_platform"
                    className={
                      "form-control form-control-sm " +
                      (errors.apex_platform ? "is-invalid" : "")
                    }
                    ref={register({ required: true })}
                    defaultValue={helperService.getStorageItem("apex_platform")}
                  >
                    <option value="">Select Platform</option>
                    <option value="1">XBOX</option>
                    <option value="2">PSN</option>
                    <option value="5">Origin / PC</option>
                  </select>
                  {errors.apex_platform &&
                    errors.apex_platform.type === "required" && (
                      <span className="invalid-feedback" role="alert">
                        Platform is required.
                      </span>
                    )}
                </div>

                <div className="form-group">
                  <label htmlFor="apex_username">Username</label>
                  <input
                    type="text"
                    name="apex_username"
                    className={
                      "form-control form-control-sm " +
                      (errors.apex_username ? "is-invalid" : "")
                    }
                    id="apex_username"
                    ref={register({ required: true })}
                    defaultValue={helperService.getStorageItem("apex_username")}
                  />
                  {errors.apex_username &&
                    errors.apex_username.type === "required" && (
                      <span className="invalid-feedback" role="alert">
                        Username is required.
                      </span>
                    )}
                </div>

                <div className="">
                  <button type="submit" className="btn btn-primary btn-sm">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ConfigUser;
