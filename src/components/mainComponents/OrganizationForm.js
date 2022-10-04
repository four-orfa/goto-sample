import React, { useState, useEffect } from "react";

const OrganizationsForm = (props) => {
  const setOrganization = props.setOrganization;

  const [formValue, setFormValue] = useState({
    organization: "",
    otherOrganization: "",
    organizationNumber: "",
  });

  useEffect(() => {
    setOrganization(formValue);
  }, [formValue, setOrganization]);

  const handleChangeRadio = (e) => {
    if (e.target.value === "other") {
      setFormValue({ ...formValue, organization: e.target.value });
    } else {
      setFormValue({
        ...formValue,
        organization: e.target.value,
        otherOrganization: "",
      });
    }
  };

  return (
    <>
      <h2 className="shop-title">加盟団体</h2>
      <table className="input-form">
        <tbody>
          <tr>
            <td className="row_header">
              加盟団体<span className="input-form__require">※</span>
            </td>
            <td className="row_data">
              <div className="form-inline">
                <div className="form-inline form-inline--radio">
                  <div className="form-inline__item form-inline__item--radio">
                    <div className="form-input">
                      <input
                        type="radio"
                        id="jata"
                        className="is-empty"
                        value="jata"
                        onChange={handleChangeRadio}
                        checked={formValue.organization === "jata"}
                      />
                      <label htmlFor="jata">JATA</label>
                      <input
                        type="radio"
                        id="anta"
                        className="is-empty"
                        value="anta"
                        onChange={handleChangeRadio}
                        checked={formValue.organization === "anta"}
                      />
                      <label htmlFor="anta">ANTA</label>
                      <input
                        type="radio"
                        id="other"
                        className="is-empty"
                        value="other"
                        onChange={handleChangeRadio}
                        checked={formValue.organization === "other"}
                      />
                      <label htmlFor="other">その他</label>
                    </div>
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td className="row_header">その他の場合</td>
            <td className="row_data">
              <div className="form-inline">
                <div className="form-inline form-inline__item form-inline--time__item">
                  <div className="form-input form-input--xlarge">
                    <input
                      type="text"
                      className="is-empty"
                      value={formValue.otherOrganization}
                      disabled={formValue.organization !== "other"}
                      onChange={(e) => {
                        setFormValue({
                          ...formValue,
                          otherOrganization: e.target.value,
                        });
                      }}
                    />
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td className="row_header">
              旅行業登録番号<span className="input-form__require">※</span>
            </td>
            <td className="row_data">
              <div className="form-inline">
                <div className="form-inline form-inline__item form-inline--time__item">
                  <div className="form-input form-input--xlarge">
                    <input
                      type="text"
                      className="is-empty"
                      value={formValue.organizationNumber}
                      maxLength="50"
                      disabled={formValue.organization === ""}
                      required
                      onChange={(e) => {
                        setFormValue({
                          ...formValue,
                          organizationNumber: e.target.value,
                        });
                      }}
                    />
                  </div>
                </div>
              </div>
              <p className="input-form__note">
                <span>
                  第１種旅行業、第２種旅行業、第３種旅行業、地域限定旅行業、旅行業者代理業、観光圏内限定旅行業者代理業、住宅宿泊仲介業の登録番号をご入力ください。
                  <br />
                  <br />
                  旅行サービス手配業は事業の対象外となります。
                </span>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default OrganizationsForm;
