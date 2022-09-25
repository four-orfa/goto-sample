import React from "react";

const AccountFile = () => {
  return (
    <tbody>
      <tr>
        <td className="row_header">
          口座番号を証する書類の写し
          <span className="input-form__require">※</span>
        </td>
        <td className="row_data">
          <div className="form-inline__item">
            <div className="js-file-upload">
              <input
                type="file"
                name="selectFile3"
                className="js-file-select"
                accept=".pdf,.jpg,.png,.gif,.jpeg"
              />
              <button type="button" className="js-file-add button-add file-add">
                追加
              </button>
              <div className="file-name-field">
                <input
                  type="button"
                  className="js-file-cancel file-cancel"
                  value="削除"
                />
                <span className="js-disp-file-name"></span>
              </div>
            </div>
          </div>
          <p className="input-form__note">
            対象ファイル：jpg、jpeg、png、gif、pdf
          </p>
        </td>
      </tr>
    </tbody>
  );
};

export default AccountFile;
