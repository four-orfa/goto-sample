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
  const [submitDisableFlag, setSubmitDisableFlag] = useState(false);
  const [business, setBusiness] = useState({
    companyNumber: "",
    companyNumberNonFlag: false,
    companyName: "",
    companyNameKana: "",
    companyLegalEntity: "",
    companyLegalEntityName: "",
    companyLegalEntityOthers: "",
    companyLegalEntityPosition: "",
    companyRepresentativeLastName: "",
    companyRepresentativeFirstName: "",
    companyRepresentativeLastNameKana: "",
    companyRepresentativeFirstNameKana: "",
  });
  const [address, setAddress] = useState({
    zip: "",
    pref: "",
    add1: "",
    add1Kana: "",
    add2: "",
    add2Kana: "",
    buildingName: "",
    buildingNameKana: "",
    mail: "",
    tel1: "",
    tel2: "",
    tel3: "",
    fax1: "",
    fax2: "",
    fax3: "",
    url: "",
    shopUrl: "",
  });
  const [organization, setOrganization] = useState({});
  const [infectionMeasures, setInfectionMeasures] = useState({});
  const [password, setPassword] = useState({
    password: "",
    confirmPassword: "",
  });

  const [mainForm, setMainForm] = useState({
    submitFlag: {},
    business: {},
    address: {},
    organization: {},
    infectionMeasures: {},
    password: {},
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setMainForm({
      submitDisableFlag,
      business,
      address,
      organization,
      infectionMeasures,
      password,
    });
    if (password.password && password.password !== password.confirmPassword) {
      alert("パスワードが一致しません…");
      return;
    }
    console.log(mainForm);
    // TODO: Redux, Zustand などのライブラリでstore管理する
    // TODO: ReactRouterDom のライブラリでconfirm画面推移する等の処理を入れる or 非同期で登録処理…
  };

  return (
    <>
      <Top />
      <main id="conts" className={styles.center}>
        <form onSubmit={handleSubmit}>
          <ConsentForm setSubmitFlag={setSubmitDisableFlag} />
          <BusinessForm setBusiness={setBusiness} />
          <AddressForm setAddress={setAddress} />
          <OrganizationForm setOrganization={setOrganization} />
          <InfectionMeasures setInfectionMeasures={setInfectionMeasures} />
          <PasswordForm setPassword={setPassword} />
          <div className="l-submit-section clearfix">
            <button
              type="submit"
              className="submit-button"
              disabled={submitDisableFlag}
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
