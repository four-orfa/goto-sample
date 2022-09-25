import React from "react";

const OrganizationsForm = () => {
  return (
    <>
      <h2 class="shop-title">加盟団体</h2>
      <table class="input-form">
        <tr>
          <td class="row_header">
            加盟団体<span class="input-form__require">※</span>
          </td>
          <td class="row_data">
            <div class="form-inline">
              <div class="form-inline form-inline--radio">
                <div class="form-inline__item form-inline__item--radio">
                  <div class="form-input">
                    <input
                      type="radio"
                      name="事業者_加盟団体_区分"
                      id="事業者_加盟団体_区分_JATA"
                      value="1"
                      class="is-empty"
                      required
                    />
                    <label for="事業者_加盟団体_区分_JATA">JATA</label>
                    <input
                      type="radio"
                      name="事業者_加盟団体_区分"
                      id="事業者_加盟団体_区分_ANTA"
                      value="2"
                      class="is-empty"
                      required
                    />
                    <label for="事業者_加盟団体_区分_ANTA">ANTA</label>
                    <input
                      type="radio"
                      name="事業者_加盟団体_区分"
                      id="事業者_加盟団体_区分_その他"
                      value="3"
                      class="is-empty"
                      required
                    />
                    <label for="事業者_加盟団体_区分_その他">その他</label>
                  </div>
                </div>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="row_header">その他の場合</td>
          <td class="row_data">
            <div class="form-inline">
              <div class="form-inline form-inline__item form-inline--time__item">
                <div class="form-input form-input--xlarge">
                  <input
                    id="事業者_加盟団体_その他"
                    name="事業者_加盟団体_その他"
                    type="text"
                    class="is-empty"
                    value=""
                    disabled
                    required
                  />
                </div>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="row_header">
            旅行業登録番号<span class="input-form__require">※</span>
          </td>
          <td class="row_data">
            <div class="form-inline">
              <div class="form-inline form-inline__item form-inline--time__item">
                <div class="form-input form-input--xlarge">
                  <input
                    id="事業者_加盟団体_登録番号"
                    name="事業者_加盟団体_登録番号"
                    type="text"
                    class="is-empty"
                    value=""
                    MAXLENGTH="50"
                    disabled
                    required
                  />
                </div>
              </div>
            </div>
            <p class="input-form__note">
              <span>
                第１種旅行業、第２種旅行業、第３種旅行業、地域限定旅行業、旅行業者代理業、観光圏内限定旅行業者代理業、住宅宿泊仲介業の登録番号をご入力ください。
                <br />
                <br />
                旅行サービス手配業は事業の対象外となります。
              </span>
            </p>
          </td>
        </tr>
      </table>
    </>
  );
};

export default OrganizationsForm;
