import React from "react";

const AddressForm = () => {
  return (
    <>
      <h2 class="shop-title">法人住所</h2>
      <table class="input-form">
        <tr>
          <td class="row_header">
            郵便番号<span class="input-form__require">※</span>
          </td>
          <td class="row_data">
            <div class="form-inline">
              <div class="form-inline__item">
                <div class="form-input form-input--large">
                  <input
                    type="text"
                    name="事業者_郵便番号"
                    id="事業者_郵便番号"
                    class="js-事業者-郵便番号"
                    placeholder="例：0000000"
                    MAXLENGTH="7"
                    value=""
                    required
                  />
                </div>
              </div>
              <div class="form-inline__item form-inline__item--text">
                <button
                  type="button"
                  class="button_blue"
                  onclick="sub郵便番号入力('事業者_郵便番号','事業者');return false;"
                >
                  住所検索
                </button>
              </div>
              <div class="form-inline__item form-inline__item--text">
                （半角数字、ハイフンなし）
                <br />
                <span class="red">
                  <span class="pc-only">← </span>
                  必ず「住所検索」を押して下さい。
                </span>
              </div>
            </div>
          </td>
        </tr>

        <tr>
          <td class="row_header">
            都道府県<span class="input-form__require">※</span>
          </td>
          <td class="row_data">
            <div class="form-inline">
              <div class="form-inline__item">
                <div class="form-select form-select--large select">
                  <select
                    name="事業者_都道府県"
                    id="事業者_都道府県"
                    class="js-事業者-都道府県"
                    disabled
                    required
                  >
                    <option value="" selected>
                      選択してください
                    </option>
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
                  </select>{" "}
                </div>
              </div>
            </div>
          </td>
        </tr>

        <tr>
          <td class="row_header">
            市区町村<span class="input-form__require">※</span>
          </td>
          <td class="row_data">
            <div class="form-inline">
              <div class="form-inline__item">
                <div class="form-input form-input--xlarge">
                  <input
                    type="text"
                    name="事業者_市区町村"
                    id="事業者_市区町村"
                    class="js-事業者-市区町村"
                    placeholder=""
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
          <td class="row_header">市区町村 フリガナ</td>
          <td class="row_data">
            <div class="form-inline">
              <div class="form-inline__item">
                <div class="form-input form-input--xlarge">
                  <input
                    type="text"
                    name="事業者_市区町村ふりがな"
                    id="事業者_市区町村ふりがな"
                    class="js-事業者-市区町村ふりがな"
                    placeholder=""
                    value=""
                    disabled
                  />
                </div>
              </div>
              <div class="form-inline__item form-inline__item--text">
                <span>（全角カナ）</span>
              </div>
            </div>
          </td>
        </tr>

        <tr>
          <td class="row_header">
            町名番地<span class="input-form__require">※</span>
          </td>
          <td class="row_data">
            <div class="form-inline">
              <div class="form-inline__item">
                <div class="form-input form-input--xlarge">
                  <input
                    type="text"
                    name="事業者_町名番地"
                    id="事業者_町名番地"
                    placeholder=""
                    class="is-empty js-事業者-町名番地"
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
          <td class="row_header">町名番地 フリガナ</td>
          <td class="row_data">
            <div class="form-inline">
              <div class="form-inline__item">
                <div class="form-input form-input--xlarge">
                  <input
                    type="text"
                    name="事業者_町名番地ふりがな"
                    id="事業者_町名番地ふりがな"
                    placeholder=""
                    class="is-empty js-事業者-町名番地ふりがな"
                    value=""
                    disabled
                  />
                </div>
              </div>
              <div class="form-inline__item form-inline__item--text">
                <span>（全角カナ）</span>
              </div>
            </div>
          </td>
        </tr>

        <tr>
          <td class="row_header">建物名等</td>
          <td class="row_data">
            <div class="form-inline">
              <div class="form-inline__item">
                <div class="form-input form-input--xlarge">
                  <input
                    type="text"
                    name="事業者_建物等"
                    id="事業者_建物等"
                    class="js-事業者-建物等"
                    placeholder=""
                    value=""
                    disabled
                  />
                </div>
              </div>
            </div>
          </td>
        </tr>

        <tr>
          <td class="row_header">建物名等 フリガナ</td>
          <td class="row_data">
            <div class="form-inline">
              <div class="form-inline__item">
                <div class="form-input form-input--xlarge">
                  <input
                    type="text"
                    name="事業者_建物等ふりがな"
                    id="事業者_建物等ふりがな"
                    class="js-事業者-建物等ふりがな"
                    placeholder=""
                    value=""
                    disabled
                  />
                </div>
              </div>
              <div class="form-inline__item form-inline__item--text">
                <span>（全角カナ）</span>
              </div>
            </div>
          </td>
        </tr>

        <tr class="minpaku">
          <td class="row_header">法人メールアドレス</td>
          <td class="row_data">
            <div class="form-inline">
              <div class="form-inline__item">
                <div class="form-input form-input--xlarge">
                  <input
                    type="text"
                    name="事業者_法人mail"
                    id="事業者_法人mail"
                    class="js-事業者_法人mail"
                    placeholder=""
                    value=""
                  />
                </div>
              </div>
            </div>
          </td>
        </tr>

        <tr>
          <td class="row_header">
            TEL<span class="input-form__require">※</span>
          </td>
          <td class="row_data">
            <div class="form-inline">
              <div class="form-inline__item form-inline_item_tel01">
                <div class="form-input form-input--medium">
                  <input
                    type="text"
                    name="事業者_TEL1"
                    maxlength="5"
                    placeholder="例：03"
                    class="is-empty js-事業者-TEL1"
                    id="事業者_TEL1"
                    value=""
                    required
                  />
                </div>
              </div>
              <div class="form-inline__item form-inline--seimei__item  form-inline--seimei__item--name form-inline_item_tel_length">
                <span>-</span>
              </div>

              <div class="form-inline__item form-inline_item_tel02">
                <div class="form-input form-input--medium">
                  <input
                    type="text"
                    name="事業者_TEL2"
                    maxlength="4"
                    placeholder="例：0000"
                    class="is-empty js-事業者-TEL2"
                    id="事業者_TEL2"
                    value=""
                    required
                  />
                </div>
              </div>
              <div class="form-inline__item form-inline--seimei__item  form-inline--seimei__item--name form-inline_item_tel_length">
                <span>-</span>
              </div>

              <div class="form-inline__item form-inline_item_tel02">
                <div class="form-input form-input--medium">
                  <input
                    type="text"
                    name="事業者_TEL3"
                    maxlength="4"
                    placeholder="例：0000"
                    class="is-empty js-事業者-TEL3"
                    id="事業者_TEL3"
                    value=""
                    required
                  />
                </div>
              </div>
              <div class="form-inline__item form-inline__item--text pc-only">
                <span>（半角数字）</span>
              </div>
            </div>
          </td>
        </tr>

        <tr>
          <td class="row_header">FAX</td>
          <td class="row_data">
            <div class="form-inline">
              <div class="form-inline__item form-inline_item_tel01">
                <div class="form-input form-input--medium">
                  <input
                    type="text"
                    name="事業者_FAX1"
                    maxlength="5"
                    placeholder="例：03"
                    id="事業者_FAX1"
                    class="js-事業者-FAX1"
                    value=""
                  />
                </div>
              </div>
              <div class="form-inline__item form-inline--seimei__item  form-inline--seimei__item--name form-inline_item_tel_length">
                <span>-</span>
              </div>
              <div class="form-inline__item form-inline_item_tel02">
                <div class="form-input form-input--medium">
                  <input
                    type="text"
                    name="事業者_FAX2"
                    maxlength="4"
                    placeholder="例：0000"
                    id="事業者_FAX2"
                    class="js-事業者-FAX2"
                    value=""
                  />
                </div>
              </div>
              <div class="form-inline__item form-inline--seimei__item  form-inline--seimei__item--name form-inline_item_tel_length">
                <span>-</span>
              </div>
              <div class="form-inline__item form-inline_item_tel02">
                <div class="form-input form-input--medium">
                  <input
                    type="text"
                    name="事業者_FAX3"
                    maxlength="4"
                    placeholder="例：0000"
                    id="事業者_FAX3"
                    class="js-事業者-FAX3"
                    value=""
                  />
                </div>
              </div>
              <div class="form-inline__item form-inline__item--text pc-only">
                <span>（半角数字）</span>
              </div>
            </div>
          </td>
        </tr>

        <tr>
          <td class="row_header">URL</td>
          <td class="row_data">
            <div class="form-inline">
              <div class="form-inline__item">
                <div class="form-input form-input--xlarge">
                  <input
                    type="text"
                    name="事業者_URL"
                    placeholder="例:https://×××.co.jp"
                    id="事業者_URL"
                    value=""
                  />
                </div>
              </div>
              <div class="form-inline__item form-inline__item--text pc-only">
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
          <td class="row_header">店舗一覧URL</td>
          <td class="row_data">
            <div class="form-inline">
              <div class="form-inline__item">
                <div class="form-input form-input--xlarge">
                  <input
                    type="text"
                    name="店舗一覧URL"
                    placeholder="例:https://×××.co.jp"
                    id="店舗一覧URL"
                    value=""
                  />
                </div>
              </div>
              <div class="form-inline__item form-inline__item--text pc-only">
                <span>
                  複数の店舗がある場合
                  <br />
                  その一覧を掲載しているURLを入力してください。
                </span>
              </div>
            </div>
          </td>
        </tr>
      </table>
    </>
  );
};

export default AddressForm;
