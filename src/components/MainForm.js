import React, { useState } from "react";
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
  const [Address, setAddress] = useState({});
  return (
    <>
      <Top />
      <main id="conts" className={styles.center}>
        <form>
          <ConsentForm setSubmitFlag={setSubmitFlag} />
          <BusinessForm />
          <AddressForm setAddress={setAddress} />
          <OrganizationForm />
          <InfectionMeasures />
          <PasswordForm />
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
