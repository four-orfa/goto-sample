import React, { useState, useEffect } from "react";
import axios from "axios";

const AddressForm = (props) => {
  const setAddress = props.setAddress;
  const [formValue, setFormValue] = useState({
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

  useEffect(() => {
    setAddress(formValue);
  }, [formValue, setAddress]);

  const [disableFlag, setDisableFlag] = useState(true);

  const setAddressFromZipCode = (zipCode) => {
    axios
      .get("https://zipcloud.ibsnet.co.jp/api/search?zipcode=" + zipCode)
      .then((res) => {
        if (res.data.results === null) {
          alert("該当する住所がありませんでした。");
        } else {
          setFormValue({
            ...formValue,
            pref: res.data.results[0].address1,
            add1: res.data.results[0].address2 + res.data.results[0].address3,
            add1Kana: res.data.results[0].kana2 + res.data.results[0].kana3,
          });
        }
      })
      .catch((err) => {
        alert(err.message);
      })
      .finally(() => {
        setDisableFlag(false);
      });
  };

  return (
    <>
      <h2 className="shop-title">法人住所</h2>
      <table className="input-form">
        <tbody>
          <tr>
            <td className="row_header">
              郵便番号<span className="input-form__require">※</span>
            </td>
            <td className="row_data">
              <div className="form-inline">
                <div className="form-inline__item">
                  <div className="form-input form-input--large">
                    <input
                      type="text"
                      placeholder="例：0000000"
                      maxLength="7"
                      required
                      value={formValue.zip}
                      onChange={(e) => {
                        setFormValue({ ...formValue, zip: e.target.value });
                      }}
                    />
                  </div>
                </div>
                <div className="form-inline__item form-inline__item--text">
                  <button
                    type="button"
                    className="button_blue"
                    onClick={() => {
                      setAddressFromZipCode(formValue.zip);
                    }}
                  >
                    住所検索
                  </button>
                </div>
                <div className="form-inline__item form-inline__item--text">
                  （半角数字、ハイフンなし）
                  <br />
                  <span className="red">
                    <span className="pc-only">← </span>
                    必ず「住所検索」を押して下さい。
                  </span>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td className="row_header">
              都道府県<span className="input-form__require">※</span>
            </td>
            <td className="row_data">
              <div className="form-inline">
                <div className="form-inline__item">
                  <div className="form-select form-select--large select">
                    <select
                      value={formValue.pref}
                      onChange={(e) => {
                        setFormValue({ ...formValue, pref: e.target.value });
                      }}
                      disabled={disableFlag}
                      required
                    >
                      <option value="">選択してください</option>
                      <option value="北海道">北海道</option>
                      <option value="青森県">青森県</option>
                      <option value="岩手県">岩手県</option>
                      <option value="宮城県">宮城県</option>
                      <option value="秋田県">秋田県</option>
                      <option value="山形県">山形県</option>
                      <option value="福島県">福島県</option>
                      <option value="茨城県">茨城県</option>
                      <option value="栃木県">栃木県</option>
                      <option value="群馬県">群馬県</option>
                      <option value="埼玉県">埼玉県</option>
                      <option value="千葉県">千葉県</option>
                      <option value="東京都">東京都</option>
                      <option value="神奈川県">神奈川県</option>
                      <option value="山梨県">山梨県</option>
                      <option value="長野県">長野県</option>
                      <option value="新潟県">新潟県</option>
                      <option value="富山県">富山県</option>
                      <option value="石川県">石川県</option>
                      <option value="福井県">福井県</option>
                      <option value="岐阜県">岐阜県</option>
                      <option value="静岡県">静岡県</option>
                      <option value="愛知県">愛知県</option>
                      <option value="三重県">三重県</option>
                      <option value="滋賀県">滋賀県</option>
                      <option value="京都府">京都府</option>
                      <option value="大阪府">大阪府</option>
                      <option value="兵庫県">兵庫県</option>
                      <option value="奈良県">奈良県</option>
                      <option value="和歌山県">和歌山県</option>
                      <option value="鳥取県">鳥取県</option>
                      <option value="島根県">島根県</option>
                      <option value="岡山県">岡山県</option>
                      <option value="広島県">広島県</option>
                      <option value="山口県">山口県</option>
                      <option value="徳島県">徳島県</option>
                      <option value="香川県">香川県</option>
                      <option value="愛媛県">愛媛県</option>
                      <option value="高知県">高知県</option>
                      <option value="福岡県">福岡県</option>
                      <option value="佐賀県">佐賀県</option>
                      <option value="長崎県">長崎県</option>
                      <option value="熊本県">熊本県</option>
                      <option value="大分県">大分県</option>
                      <option value="宮崎県">宮崎県</option>
                      <option value="鹿児島県">鹿児島県</option>
                      <option value="沖縄県">沖縄県</option>
                    </select>
                  </div>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td className="row_header">
              市区町村<span className="input-form__require">※</span>
            </td>
            <td className="row_data">
              <div className="form-inline">
                <div className="form-inline__item">
                  <div className="form-input form-input--xlarge">
                    <input
                      type="text"
                      name="事業者_市区町村"
                      id="事業者_市区町村"
                      className="js-事業者-市区町村"
                      placeholder=""
                      value={formValue.add1}
                      onChange={(e) => {
                        setFormValue({ ...formValue, add1: e.target.value });
                      }}
                      disabled={disableFlag}
                      required
                    />
                  </div>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td className="row_header">市区町村 フリガナ</td>
            <td className="row_data">
              <div className="form-inline">
                <div className="form-inline__item">
                  <div className="form-input form-input--xlarge">
                    <input
                      type="text"
                      placeholder=""
                      value={formValue.add1Kana}
                      onChange={(e) => {
                        setFormValue({
                          ...formValue,
                          add1Kana: e.target.value,
                        });
                      }}
                      disabled={disableFlag}
                    />
                  </div>
                </div>
                <div className="form-inline__item form-inline__item--text">
                  <span>（全角カナ）</span>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td className="row_header">
              町名番地<span className="input-form__require">※</span>
            </td>
            <td className="row_data">
              <div className="form-inline">
                <div className="form-inline__item">
                  <div className="form-input form-input--xlarge">
                    <input
                      type="text"
                      placeholder=""
                      className="is-empty"
                      value={formValue.add2}
                      onChange={(e) => {
                        setFormValue({ ...formValue, add2: e.target.value });
                      }}
                      disabled={disableFlag}
                      required
                    />
                  </div>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td className="row_header">町名番地 フリガナ</td>
            <td className="row_data">
              <div className="form-inline">
                <div className="form-inline__item">
                  <div className="form-input form-input--xlarge">
                    <input
                      type="text"
                      placeholder=""
                      value={formValue.add2Kana}
                      onChange={(e) => {
                        setFormValue({
                          ...formValue,
                          add2Kana: e.target.value,
                        });
                      }}
                      disabled={disableFlag}
                    />
                  </div>
                </div>
                <div className="form-inline__item form-inline__item--text">
                  <span>（全角カナ）</span>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td className="row_header">建物名等</td>
            <td className="row_data">
              <div className="form-inline">
                <div className="form-inline__item">
                  <div className="form-input form-input--xlarge">
                    <input
                      type="text"
                      placeholder=""
                      value={formValue.buildingName}
                      onChange={(e) => {
                        setFormValue({
                          ...formValue,
                          buildingName: e.target.value,
                        });
                      }}
                      disabled={disableFlag}
                    />
                  </div>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td className="row_header">建物名等 フリガナ</td>
            <td className="row_data">
              <div className="form-inline">
                <div className="form-inline__item">
                  <div className="form-input form-input--xlarge">
                    <input
                      type="text"
                      placeholder=""
                      value={formValue.buildingNameKana}
                      onChange={(e) => {
                        setFormValue({
                          ...formValue,
                          buildingNameKana: e.target.value,
                        });
                      }}
                      disabled={disableFlag}
                    />
                  </div>
                </div>
                <div className="form-inline__item form-inline__item--text">
                  <span>（全角カナ）</span>
                </div>
              </div>
            </td>
          </tr>

          <tr className="minpaku">
            <td className="row_header">法人メールアドレス</td>
            <td className="row_data">
              <div className="form-inline">
                <div className="form-inline__item">
                  <div className="form-input form-input--xlarge">
                    <input
                      type="text"
                      placeholder=""
                      value={formValue.mail}
                      onChange={(e) => {
                        setFormValue({
                          ...formValue,
                          mail: e.target.value,
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
              TEL<span className="input-form__require">※</span>
            </td>
            <td className="row_data">
              <div className="form-inline">
                <div className="form-inline__item form-inline_item_tel01">
                  <div className="form-input form-input--medium">
                    <input
                      type="text"
                      maxLength="5"
                      placeholder="例：03"
                      className="is-empty"
                      value={formValue.tel1}
                      onChange={(e) => {
                        setFormValue({
                          ...formValue,
                          tel1: e.target.value,
                        });
                      }}
                      required
                    />
                  </div>
                </div>
                <div className="form-inline__item form-inline--seimei__item  form-inline--seimei__item--name form-inline_item_tel_length">
                  <span>-</span>
                </div>

                <div className="form-inline__item form-inline_item_tel02">
                  <div className="form-input form-input--medium">
                    <input
                      type="text"
                      maxLength="4"
                      placeholder="例：0000"
                      className="is-empty"
                      value={formValue.tel2}
                      onChange={(e) => {
                        setFormValue({
                          ...formValue,
                          tel2: e.target.value,
                        });
                      }}
                      required
                    />
                  </div>
                </div>
                <div className="form-inline__item form-inline--seimei__item  form-inline--seimei__item--name form-inline_item_tel_length">
                  <span>-</span>
                </div>

                <div className="form-inline__item form-inline_item_tel02">
                  <div className="form-input form-input--medium">
                    <input
                      type="text"
                      maxLength="4"
                      placeholder="例：0000"
                      className="is-empty"
                      value={formValue.tel3}
                      onChange={(e) => {
                        setFormValue({
                          ...formValue,
                          tel3: e.target.value,
                        });
                      }}
                      required
                    />
                  </div>
                </div>
                <div className="form-inline__item form-inline__item--text pc-only">
                  <span>（半角数字）</span>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td className="row_header">FAX</td>
            <td className="row_data">
              <div className="form-inline">
                <div className="form-inline__item form-inline_item_tel01">
                  <div className="form-input form-input--medium">
                    <input
                      type="text"
                      maxLength="5"
                      placeholder="例：03"
                      value={formValue.fax1}
                      onChange={(e) => {
                        setFormValue({
                          ...formValue,
                          fax1: e.target.value,
                        });
                      }}
                    />
                  </div>
                </div>
                <div className="form-inline__item form-inline--seimei__item  form-inline--seimei__item--name form-inline_item_tel_length">
                  <span>-</span>
                </div>
                <div className="form-inline__item form-inline_item_tel02">
                  <div className="form-input form-input--medium">
                    <input
                      type="text"
                      maxLength="4"
                      placeholder="例：0000"
                      value={formValue.fax2}
                      onChange={(e) => {
                        setFormValue({
                          ...formValue,
                          fax2: e.target.value,
                        });
                      }}
                    />
                  </div>
                </div>
                <div className="form-inline__item form-inline--seimei__item  form-inline--seimei__item--name form-inline_item_tel_length">
                  <span>-</span>
                </div>
                <div className="form-inline__item form-inline_item_tel02">
                  <div className="form-input form-input--medium">
                    <input
                      type="text"
                      maxLength="4"
                      placeholder="例：0000"
                      value={formValue.fax3}
                      onChange={(e) => {
                        setFormValue({
                          ...formValue,
                          fax3: e.target.value,
                        });
                      }}
                    />
                  </div>
                </div>
                <div className="form-inline__item form-inline__item--text pc-only">
                  <span>（半角数字）</span>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td className="row_header">URL</td>
            <td className="row_data">
              <div className="form-inline">
                <div className="form-inline__item">
                  <div className="form-input form-input--xlarge">
                    <input
                      type="text"
                      placeholder="例:https://×××.co.jp"
                      value={formValue.url}
                      onChange={(e) => {
                        setFormValue({
                          ...formValue,
                          url: e.target.value,
                        });
                      }}
                    />
                  </div>
                </div>
                <div className="form-inline__item form-inline__item--text pc-only">
                  <span>
                    本社などの代表URLを
                    <br />
                    入力してください。
                  </span>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td className="row_header">店舗一覧URL</td>
            <td className="row_data">
              <div className="form-inline">
                <div className="form-inline__item">
                  <div className="form-input form-input--xlarge">
                    <input
                      type="text"
                      placeholder="例:https://×××.co.jp"
                      value={formValue.shopUrl}
                      onChange={(e) => {
                        setFormValue({
                          ...formValue,
                          shopUrl: e.target.value,
                        });
                      }}
                    />
                  </div>
                </div>
                <div className="form-inline__item form-inline__item--text pc-only">
                  <span>
                    複数の店舗がある場合
                    <br />
                    その一覧を掲載しているURLを入力してください。
                  </span>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default AddressForm;
