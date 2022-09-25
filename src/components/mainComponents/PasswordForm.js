import React from "react";

const PasswordForm = () => {
  return (
    <section>
      <h2 class="shop-title">ログイン用パスワード</h2>
      <table class="input-form">
        <tbody>
          <tr>
            <td class="row_header">
              ログイン用パスワード<span class="input-form__require">※</span>
            </td>
            <td class="row_data">
              <div class="form-inline">
                <div class="form-inline__item">
                  <div class="form-input form-input--xlarge">
                    <input
                      type="password"
                      name="BIZパスワード"
                      class="is-empty"
                      value=""
                      MINLENGTH="8"
                      MAXLENGTH="64"
                      required
                      autocomplete="off"
                    />
                  </div>
                </div>
              </div>
              <p class="input-form__note">
                [文字数] 8文字以上64文字以内
                <br />
                [使用可能文字]
                <br />
                <span>・英字、数字、記号をすべて含めてください。</span>
                <br />
                <span>・英字 A～Z　a～z　（大文字小文字を区別しています）</span>
                <br />
                <span>・数字 0～9</span>
                <br />
                <span>
                  ・記号 !"#$%{"&"}'{"("}
                  {")"}-^\@{"["};:{"]"},./\=~|`{"{"}+*{"}"}
                  {"<"}
                  {">"}?_
                </span>
              </p>
              <p class="input-form__note">
                審査承認後に専用ポータルサイトへのログイン時に必要となりますので、必ずお控えください。
              </p>
            </td>
          </tr>

          <tr>
            <td class="row_header">
              ログイン用パスワード（確認）
              <span class="input-form__require">※</span>
            </td>
            <td class="row_data">
              <div class="form-inline">
                <div class="form-inline__item">
                  <div class="form-input form-input--xlarge">
                    <input
                      type="password"
                      name="BIZパスワード_確認"
                      placeholder=""
                      class="is-empty"
                      oncopy="return false"
                      onpaste="return false"
                      oncontextmenu="return false"
                      value=""
                      MINLENGTH="8"
                      MAXLENGTH="64"
                      required
                      autocomplete="off"
                    />
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <br />
      <div class="l-submit-section clearfix">
        <button
          type="submit"
          name="submit"
          id="submit_button"
          class="submit-button"
          disabled
        >
          内容確認
        </button>
      </div>
      <div>
        ※登録にあたっての同意事項にすべてチェックが入っていないと、ボタンが押せません。
      </div>
    </section>
  );
};

export default PasswordForm;
