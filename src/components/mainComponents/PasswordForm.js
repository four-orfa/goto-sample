import React, { useState, useEffect } from "react";

const PasswordForm = (props) => {
  const setPassword = props.setPassword;
  const [pass, setPass] = useState({
    password: "",
    confirmPassword: "",
  });
  useEffect(() => {
    setPassword(pass);
  }, [pass, setPassword]);

  return (
    <section>
      <h2 className="shop-title">ログイン用パスワード</h2>
      <table className="input-form">
        <tbody>
          <tr>
            <td className="row_header">
              ログイン用パスワード<span className="input-form__require">※</span>
            </td>
            <td className="row_data">
              <div className="form-inline">
                <div className="form-inline__item">
                  <div className="form-input form-input--xlarge">
                    <input
                      type="password"
                      className="is-empty"
                      minLength="8"
                      maxLength="64"
                      required={true}
                      autoComplete="new-password"
                      onChange={(e) => {
                        setPass({ ...pass, password: e.target.value });
                      }}
                    />
                  </div>
                </div>
              </div>
              <p className="input-form__note">
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
              <p className="input-form__note">
                審査承認後に専用ポータルサイトへのログイン時に必要となりますので、必ずお控えください。
              </p>
            </td>
          </tr>

          <tr>
            <td className="row_header">
              ログイン用パスワード（確認）
              <span className="input-form__require">※</span>
            </td>
            <td className="row_data">
              <div className="form-inline">
                <div className="form-inline__item">
                  <div className="form-input form-input--xlarge">
                    <input
                      type="password"
                      className="is-empty"
                      onCopy={() => {
                        return false;
                      }}
                      onPaste={() => {
                        return false;
                      }}
                      onContextMenu={() => {
                        return false;
                      }}
                      minLength="8"
                      maxLength="64"
                      required={true}
                      autoComplete="new-password"
                      onChange={(e) => {
                        setPass({ ...pass, confirmPassword: e.target.value });
                      }}
                    />
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default PasswordForm;
