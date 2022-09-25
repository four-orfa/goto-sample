import React from "react";
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
  return (
    <>
      <Top />
      <main id="conts" className={styles.center}>
        <form>
          <ConsentForm />
          <BusinessForm />
          <AddressForm />
          <OrganizationForm />
          <InfectionMeasures />
          <PasswordForm />
        </form>
      </main>
    </>
  );
};

export default MainForm;
