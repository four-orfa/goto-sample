import React, { useEffect, useState } from "react";

const BusinessForm = (props) => {
  const setBusiness = props.setBusiness;
  const [formValue, setFormValue] = useState({
    companyNumber: "",
    companyNumberNonFlag: false,
    companyName: "",
    companyNameKana: "",
    companyLegalEntity: "",
    companyLegalEntityOthers: "",
    companyLegalEntityPosition: "",
    companyRepresentativeLastName: "",
    companyRepresentativeFirstName: "",
    companyRepresentativeLastNameKana: "",
    companyRepresentativeFirstNameKana: "",
  });

  const handleCheck = (e) => {
    setFormValue({
      ...formValue,
      companyNumberNonFlag: e.target.checked,
    });
    console.log(formValue);
  };

  useEffect(() => {
    setBusiness(formValue);
  }, [formValue, setBusiness]);

  const LEGAL_ENTITY = [
    { key: "000", value: "選択してください" },
    { key: "001", value: "株式会社" },
    { key: "002", value: "有限会社" },
    { key: "003", value: "合名会社" },
    { key: "004", value: "合資会社" },
    { key: "005", value: "相互会社" },
    { key: "006", value: "特定目的会社" },
    { key: "007", value: "合同会社" },
    { key: "008", value: "投資法人" },
    { key: 101, value: "信用金庫" },
    { key: 102, value: "信用組合" },
    { key: 103, value: "森林組合" },
    { key: 104, value: "商工組合" },
    { key: 105, value: "農業協同組合" },
    { key: 106, value: "漁業協同組合" },
    { key: 107, value: "生活協同組合" },
    { key: 108, value: "消費生活協同組合" },
    { key: 109, value: "協同組合" },
    { key: 110, value: "工業組合" },
    { key: 111, value: "企業組合" },
    { key: 112, value: "協業組合" },
    { key: 113, value: "医療法人社団" },
    { key: 114, value: "医療法人財団" },
    { key: 115, value: "医療法人" },
    { key: 116, value: "社会医療法人" },
    { key: 201, value: "財団法人" },
    { key: 202, value: "社団法人" },
    { key: 203, value: "宗教法人" },
    { key: 204, value: "学校法人" },
    { key: 205, value: "社会福祉法人" },
    { key: 206, value: "一般社団法人" },
    { key: 207, value: "公益社団法人" },
    { key: 208, value: "一般財団法人" },
    { key: 209, value: "公益財団法人" },
    { key: 301, value: "農事組合法人" },
    { key: 302, value: "監査法人" },
    { key: 303, value: "有限責任中間法人" },
    { key: 304, value: "無限責任中間法人" },
    { key: 305, value: "税理士法人" },
    { key: 306, value: "弁護士法人" },
    { key: 307, value: "特定非営利活動法人" },
    { key: 308, value: "ＮＰＯ法人" },
    { key: 309, value: "認定特定非営利活動法人" },
    { key: 310, value: "認定ＮＰＯ法人" },
    { key: 401, value: "信用金庫連合会" },
    { key: 402, value: "信用組合連合会" },
    { key: 403, value: "森林組合連合会" },
    { key: 404, value: "商業組合連合会" },
    { key: 405, value: "農業協同組合連合会" },
    { key: 406, value: "漁業協同組合連合会" },
    { key: 407, value: "生活協同組合連合会" },
    { key: 408, value: "消費生活協同組合連合会" },
    { key: 409, value: "協同組合連合会" },
    { key: 410, value: "工業組合連合会" },
    { key: 411, value: "環境衛生同業組合" },
    { key: 412, value: "商店街振興組合" },
    { key: 413, value: "商工会議所" },
    { key: 414, value: "厚生年金基金" },
    { key: 415, value: "健康保険組合" },
    { key: 416, value: "企業年金基金" },
    { key: 501, value: "インコーポレイテッド" },
    { key: 502, value: "コーポレーション" },
    { key: 503, value: "リミテッド" },
    { key: 504, value: "カンパニー" },
    { key: 999, value: "その他" },
  ];

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
                      onChange={(e) => {
                        setFormValue({
                          ...formValue,
                          companyLegalEntity: e.target.value,
                        });
                      }}
                    >
                      {LEGAL_ENTITY.map((entity) => (
                        <option value={entity.key}>{entity.value}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="form-inline__item form-inline__item--text">
                  <div className="form-input form-input--large">
                    <input
                      type="text"
                      placeholder=""
                      defaultValue=""
                      disabled
                      readOnly
                      value={formValue.companyLegalEntityOthers}
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
                        name="事業者_法人格の位置"
                        id="事業者_法人格の位置_1"
                        value="1"
                        className="is-empty"
                      />
                      <label htmlFor="事業者_法人格の位置_1">
                        法人名称の前
                      </label>
                      <input
                        type="radio"
                        name="事業者_法人格の位置"
                        id="事業者_法人格の位置_2"
                        value="2"
                        className="is-empty"
                      />
                      <label htmlFor="事業者_法人格の位置_2">
                        法人名称の後
                      </label>
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
                    <input
                      type="text"
                      name="事業者_正式名称"
                      id="法人名称_確認"
                      placeholder=""
                      defaultValue=""
                      readOnly
                      required
                    />
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
                      name="事業者_代表_姓"
                      id="事業者_代表_姓"
                      type="text"
                      placeholder="例：山田"
                      size="4"
                      value=""
                      required
                    />
                  </div>
                </div>
                <div className="form-inline__item form-inline--seimei__item form-inline__item--name form-inline--seimei__item--name">
                  <span>名</span>
                </div>
                <div className="form-inline__item form-inline--seimei__item">
                  <div className="form-input form-input--medium">
                    <input
                      name="事業者_代表_名"
                      id="事業者_代表_名"
                      type="text"
                      placeholder="例：太郎"
                      size="4"
                      value=""
                      required
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
                      value=""
                    />
                  </div>
                </div>
                <div className="form-inline__item form-inline--seimei__item form-inline__item--name form-inline--seimei__item--name">
                  <span>メイ</span>
                </div>
                <div className="form-inline__item form-inline--seimei__item">
                  <div className="form-input form-input--medium">
                    <input
                      name="事業者_代表_名ふりがな"
                      id="事業者_代表_名ふりがな"
                      type="text"
                      placeholder="例：タロウ"
                      size="4"
                      value=""
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
