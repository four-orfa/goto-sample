import React, { useState, useEffect } from "react";
import ConsentForm from "./mainComponents/ConsentForm";
import BusinessForm from "./mainComponents/BusinessForm";
import OrganizationForm from "./mainComponents/OrganizationForm";
// import AccountFile from "./mainComponents/AccountFile";
import InfectionMeasures from "./mainComponents/InfectionMeasures";
import PasswordForm from "./mainComponents/PasswordForm";
import AddressForm from "./mainComponents/AddressForm";
import Top from "./mainComponents/Top";
import styles from "./main.module.css";

const MainForm = () => {
  const [submitFlag, setSubmitFlag] = useState(false);
  const [business, setBusiness] = useState({});
  const [address, setAddress] = useState({});
  const [organization, setOrganization] = useState({});
  const [infectionMeasures, setInfectionMeasures] = useState({});
  const [password, setPassword] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      submitFlag,
      business,
      address,
      organization,
      infectionMeasures,
      password
    );
  };

  useEffect(() => {
    console.log(
      submitFlag,
      business,
      address,
      organization,
      infectionMeasures,
      password
    );
  }, [
    submitFlag,
    business,
    address,
    organization,
    infectionMeasures,
    password,
  ]);

  return (
    <>
      <Top />
      <main id="conts" className={styles.center}>
        <form onSubmit={handleSubmit}>
          <ConsentForm setSubmitFlag={setSubmitFlag} />
          <BusinessForm setBusiness={setBusiness} />
          <AddressForm setAddress={setAddress} />
          <OrganizationForm setOrganization={setOrganization} />
          <InfectionMeasures setInfectionMeasures={setInfectionMeasures} />
          <PasswordForm setPassword={setPassword} />
          <div className="l-submit-section clearfix">
            <button
              type="submit"
              className="submit-button"
              disabled={submitFlag}
            >
              内容確認
            </button>
          </div>
          <div className={styles.textCenter}>
            ※登録にあたっての同意事項にすべてチェックが入っていないと、ボタンが押せません。
          </div>
        </form>
      </main>
    </>
  );
};

export default MainForm;
