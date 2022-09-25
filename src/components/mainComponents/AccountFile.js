import React from "react";

const AccountFile = () => {
  return (
    <tbody>
      <tr>
        <td class="row_header">
          口座番号を証する書類の写し<span class="input-form__require">※</span>
        </td>
        <td class="row_data">
          <div class="form-inline__item">
            <div class="js-file-upload">
              <input
                type="file"
                name="selectFile3"
                class="js-file-select"
                accept=".pdf,.jpg,.png,.gif,.jpeg"
              />
              <button type="button" class="js-file-add button-add file-add">
                追加
              </button>
              <div class="file-name-field">
                <input
                  type="button"
                  class="js-file-cancel file-cancel"
                  value="削除"
                />
                <span class="js-disp-file-name"></span>
              </div>
            </div>
          </div>
          <p class="input-form__note">対象ファイル：jpg、jpeg、png、gif、pdf</p>
        </td>
      </tr>
    </tbody>
  );
};

export default AccountFile;
