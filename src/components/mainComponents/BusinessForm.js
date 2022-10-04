import React, { useEffect, useState } from "react";

const BusinessForm = (props) => {
  const setBusiness = props.setBusiness;

  const LEGAL_ENTITY = [
    { value: "000", label: "選択してください" },
    { value: "001", label: "株式会社" },
    { value: "002", label: "有限会社" },
    { value: "003", label: "合名会社" },
    { value: "004", label: "合資会社" },
    { value: "005", label: "相互会社" },
    { value: "006", label: "特定目的会社" },
    { value: "007", label: "合同会社" },
    { value: "008", label: "投資法人" },
    { value: 101, label: "信用金庫" },
    { value: 102, label: "信用組合" },
    { value: 103, label: "森林組合" },
    { value: 104, label: "商工組合" },
    { value: 105, label: "農業協同組合" },
    { value: 106, label: "漁業協同組合" },
    { value: 107, label: "生活協同組合" },
    { value: 108, label: "消費生活協同組合" },
    { value: 109, label: "協同組合" },
    { value: 110, label: "工業組合" },
    { value: 111, label: "企業組合" },
    { value: 112, label: "協業組合" },
    { value: 113, label: "医療法人社団" },
    { value: 114, label: "医療法人財団" },
    { value: 115, label: "医療法人" },
    { value: 116, label: "社会医療法人" },
    { value: 201, label: "財団法人" },
    { value: 202, label: "社団法人" },
    { value: 203, label: "宗教法人" },
    { value: 204, label: "学校法人" },
    { value: 205, label: "社会福祉法人" },
    { value: 206, label: "一般社団法人" },
    { value: 207, label: "公益社団法人" },
    { value: 208, label: "一般財団法人" },
    { value: 209, label: "公益財団法人" },
    { value: 301, label: "農事組合法人" },
    { value: 302, label: "監査法人" },
    { value: 303, label: "有限責任中間法人" },
    { value: 304, label: "無限責任中間法人" },
    { value: 305, label: "税理士法人" },
    { value: 306, label: "弁護士法人" },
    { value: 307, label: "特定非営利活動法人" },
    { value: 308, label: "ＮＰＯ法人" },
    { value: 309, label: "認定特定非営利活動法人" },
    { value: 310, label: "認定ＮＰＯ法人" },
    { value: 401, label: "信用金庫連合会" },
    { value: 402, label: "信用組合連合会" },
    { value: 403, label: "森林組合連合会" },
    { value: 404, label: "商業組合連合会" },
    { value: 405, label: "農業協同組合連合会" },
    { value: 406, label: "漁業協同組合連合会" },
    { value: 407, label: "生活協同組合連合会" },
    { value: 408, label: "消費生活協同組合連合会" },
    { value: 409, label: "協同組合連合会" },
    { value: 410, label: "工業組合連合会" },
    { value: 411, label: "環境衛生同業組合" },
    { value: 412, label: "商店街振興組合" },
    { value: 413, label: "商工会議所" },
    { value: 414, label: "厚生年金基金" },
    { value: 415, label: "健康保険組合" },
    { value: 416, label: "企業年金基金" },
    { value: 501, label: "インコーポレイテッド" },
    { value: 502, label: "コーポレーション" },
    { value: 503, label: "リミテッド" },
    { value: 504, label: "カンパニー" },
    { value: 999, label: "その他" },
  ];

  const [formValue, setFormValue] = useState({
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

  useEffect(() => {
    setBusiness(formValue);
  }, [formValue, setBusiness]);

  const handleCheck = (e) => {
    if (e.target.checked) {
      setFormValue({
        ...formValue,
        companyNumberNonFlag: e.target.checked,
      });
    } else {
      setFormValue({
        ...formValue,
        companyNumberNonFlag: e.target.checked,
      });
    }
  };

  const handleChangeRadio = (e) => {
    setFormValue({ ...formValue, companyLegalEntityPosition: e.target.value });
  };

  return (
    <>
      <div id="事業者情報_タイトル" className="">
        <h2 className="shop-title">１. 事業者情報の登録</h2>
      </div>

      <h2 className="shop-title">法人情報</h2>
      <table className="input-form">
        <tbody>
          <tr>
            <td className="row_header">
              法人番号<span className="input-form__require">※</span>
            </td>
            <td className="row_data">
              <div className="form-inline">
                <div className="form-inline__item">
                  <div className="form-input form-input--xlarge">
                    <input
                      type="text"
                      className="is-empty"
                      minLength="13"
                      maxLength="13"
                      required={!formValue.companyNumberNonFlag}
                      disabled={formValue.companyNumberNonFlag}
                      value={formValue.companyNumber}
                      onChange={(e) => {
                        setFormValue({
                          ...formValue,
                          companyNumber: e.target.value,
                        });
                      }}
                    />
                  </div>
                </div>
                <div className="form-inline__item form-inline__item--text">
                  <span>(半角数字、13桁)</span>
                </div>
              </div>
              <div className="form-inline form-inline--check">
                <div className="form-inline__item form-inline__item--check">
                  <div className="form-check form-input--xlarge">
                    <input
                      type="checkbox"
                      onChange={(e) => {
                        handleCheck(e);
                      }}
                    />
                    <label htmlFor="事業者_法人番号_無しフラグ">
                      法人番号をお持ちでない事業者様
                    </label>
                  </div>
                </div>
              </div>

              <p className="input-form__note">
                ※法人の方はもれなく法人番号（13桁）をご入力ください。
                <br />
                ※法人番号をお持ちでない事業者様（法人格の無い宿泊施設様や個人事業主様など）はチェックを入れてください。
              </p>
            </td>
          </tr>

          <tr>
            <td className="row_header">
              法人名称<span className="input-form__require">※</span>
            </td>
            <td className="row_data">
              <div className="form-inline">
                <div className="form-inline__item">
                  <div className="form-input form-input--xlarge">
                    <input
                      type="text"
                      className="is-empty"
                      required={true}
                      value={formValue.companyName}
                      onChange={(e) => {
                        setFormValue({
                          ...formValue,
                          companyName: e.target.value,
                        });
                      }}
                    />
                  </div>
                </div>
                <div className="form-inline__item form-inline__item--text">
                  法人格は除く
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td className="row_header">
              法人名称（フリガナ）<span className="input-form__require">※</span>
            </td>
            <td className="row_data">
              <div className="form-inline">
                <div className="form-inline__item">
                  <div className="form-input form-input--xlarge">
                    <input
                      type="text"
                      className="is-empty"
                      required={true}
                      value={formValue.companyNameKana}
                      onChange={(e) => {
                        setFormValue({
                          ...formValue,
                          companyNameKana: e.target.value,
                        });
                      }}
                    />
                  </div>
                </div>
                <div className="form-inline__item form-inline__item--text">
                  <span>
                    (全角カナ、全角スペース)
                    <br />
                    法人格は除く
                  </span>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td className="row_header">法人格名称</td>
            <td className="row_data">
              <div className="form-inline">
                <div className="form-inline__item">
                  <div className="form-input form-input--large form-select select select_require">
                    <select
                      disabled={formValue.companyNumberNonFlag}
                      onChange={(e) => {
                        setFormValue({
                          ...formValue,
                          companyLegalEntity: e.target.value.split(",")[0],
                          companyLegalEntityName:
                            e.target.value.split(",")[0] === "000"
                              ? ""
                              : e.target.value.split(",")[1],
                          companyLegalEntityOthers: "",
                        });
                      }}
                    >
                      {LEGAL_ENTITY.map((entity) => (
                        <option
                          key={entity.value}
                          value={entity.value + "," + entity.label}
                        >
                          {entity.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="form-inline__item form-inline__item--text">
                  <div className="form-input form-input--large">
                    <input
                      type="text"
                      disabled={formValue.companyLegalEntity !== "999"}
                      value={formValue.companyLegalEntityOthers}
                      onChange={(e) => {
                        setFormValue({
                          ...formValue,
                          companyLegalEntityName: e.target.value,
                          companyLegalEntityOthers: e.target.value,
                        });
                      }}
                    />
                  </div>
                </div>
                <div className="form-inline__item form-inline__item--text">
                  法人格名称を「その他」で選択した場合、左記の欄に入力してください。
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td className="row_header">法人格の位置</td>
            <td className="row_data">
              <div className="form-inline form-inline--radio">
                <div className="form-inline__item form-inline__item--radio">
                  <fieldset>
                    <div>
                      <input
                        type="radio"
                        id="entity-first"
                        value="first"
                        className="is-empty"
                        disabled={formValue.companyNumberNonFlag}
                        onChange={handleChangeRadio}
                        checked={
                          formValue.companyLegalEntityPosition === "first"
                        }
                      />
                      <label htmlFor="entity-first">法人名称の前</label>
                      <input
                        type="radio"
                        id="entity-last"
                        value="last"
                        className="is-empty"
                        disabled={formValue.companyNumberNonFlag}
                        onChange={handleChangeRadio}
                        checked={
                          formValue.companyLegalEntityPosition === "last"
                        }
                      />
                      <label htmlFor="entity-last">法人名称の後</label>
                    </div>
                  </fieldset>

                  <div className="form-inline__item form-inline__item--text">
                    法人格名称を選択した場合、必須
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td className="row_header">
              法人名称（確認)<span className="input-form__require">※</span>
            </td>
            <td className="row_data">
              <div className="form-inline">
                <div className="form-inline__item">
                  <div className="form-input form-input--xlarge">
                    <p>
                      {formValue.companyNumberNonFlag === true
                        ? formValue.companyName
                        : formValue.companyLegalEntityPosition === "first"
                        ? formValue.companyLegalEntityName +
                          " " +
                          formValue.companyName
                        : formValue.companyLegalEntityPosition === "last"
                        ? formValue.companyName +
                          " " +
                          formValue.companyLegalEntityName
                        : ""}
                    </p>
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td className="row_header">
              代表者名<span className="input-form__require">※</span>
            </td>
            <td className="row_data">
              <div className="form-inline form-inline--seimei">
                <div className="form-inline__item form-inline--seimei__item form-inline__item--name form-inline--seimei__item--name">
                  <span>姓</span>
                </div>
                <div className="form-inline__item form-inline--seimei__item">
                  <div className="form-input form-input--medium">
                    <input
                      type="text"
                      placeholder="例：山田"
                      size="4"
                      required
                      value={formValue.companyRepresentativeLastName}
                      onChange={(e) => {
                        setFormValue({
                          ...formValue,
                          companyRepresentativeLastName: e.target.value,
                        });
                      }}
                    />
                  </div>
                </div>
                <div className="form-inline__item form-inline--seimei__item form-inline__item--name form-inline--seimei__item--name">
                  <span>名</span>
                </div>
                <div className="form-inline__item form-inline--seimei__item">
                  <div className="form-input form-input--medium">
                    <input
                      type="text"
                      placeholder="例：太郎"
                      size="4"
                      required
                      value={formValue.companyRepresentativeLastNameKana}
                      onChange={(e) => {
                        setFormValue({
                          ...formValue,
                          companyRepresentativeLastNameKana: e.target.value,
                        });
                      }}
                    />
                  </div>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td className="row_header">代表者名 フリガナ</td>
            <td className="row_data">
              <div className="form-inline form-inline--seimei">
                <div className="form-inline__item form-inline--seimei__item form-inline__item--name form-inline--seimei__item--name">
                  <span>セイ</span>
                </div>
                <div className="form-inline__item form-inline--seimei__item">
                  <div className="form-input form-input--medium">
                    <input
                      name="事業者_代表_姓ふりがな"
                      id="事業者_代表_姓ふりがな"
                      type="text"
                      placeholder="例：ヤマダ"
                      size="4"
                      value={formValue.companyRepresentativeFirstName}
                      onChange={(e) => {
                        setFormValue({
                          ...formValue,
                          companyRepresentativeFirstName: e.target.value,
                        });
                      }}
                    />
                  </div>
                </div>
                <div className="form-inline__item form-inline--seimei__item form-inline__item--name form-inline--seimei__item--name">
                  <span>メイ</span>
                </div>
                <div className="form-inline__item form-inline--seimei__item">
                  <div className="form-input form-input--medium">
                    <input
                      type="text"
                      placeholder="例：タロウ"
                      size="4"
                      value={formValue.companyRepresentativeFirstNameKana}
                      onChange={(e) => {
                        setFormValue({
                          ...formValue,
                          companyRepresentativeFirstNameKana: e.target.value,
                        });
                      }}
                    />
                  </div>
                </div>
                <div className="form-inline__item form-inline__item--text pc-only">
                  <span>(全角カナ、全角スペース)</span>
                </div>
              </div>
              <div className="form-inline__item form-inline__item--text sp-only">
                <span>(全角カナ、全角スペース)</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default BusinessForm;
