import React from "react";

const BusinessForm = () => {
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
                      name="事業者_法人番号"
                      id="事業者_法人番号"
                      placeholder=""
                      className="is-empty"
                      MINLENGTH="13"
                      MAXLENGTH="13"
                      required
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
                      name="事業者_法人番号_無しフラグ"
                      value="t"
                      id="事業者_法人番号_無しフラグ"
                      className=""
                    />
                    <label for="事業者_法人番号_無しフラグ">
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
                      name="事業者_名称"
                      id="事業者_名称"
                      placeholder=""
                      className="is-empty js-事業者-事業者名"
                      value=""
                      required
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
                      name="事業者_名称ふりがな"
                      id="事業者_名称ふりがな"
                      placeholder=""
                      className="is-empty js-事業者-事業者名称ふりがな"
                      value=""
                      required
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
                    <select name="事業者_法人格名称" id="事業者_法人格名称">
                      <option value="" selected>
                        選択してください
                      </option>
                      <option value="001">株式会社</option>
                      <option value="002">有限会社</option>
                      <option value="003">合名会社</option>
                      <option value="004">合資会社</option>
                      <option value="005">相互会社</option>
                      <option value="006">特定目的会社</option>
                      <option value="007">合同会社</option>
                      <option value="008">投資法人</option>
                      <option value="101">信用金庫</option>
                      <option value="102">信用組合</option>
                      <option value="103">森林組合</option>
                      <option value="104">商工組合</option>
                      <option value="105">農業協同組合</option>
                      <option value="106">漁業協同組合</option>
                      <option value="107">生活協同組合</option>
                      <option value="108">消費生活協同組合</option>
                      <option value="109">協同組合</option>
                      <option value="110">工業組合</option>
                      <option value="111">企業組合</option>
                      <option value="112">協業組合</option>
                      <option value="113">医療法人社団</option>
                      <option value="114">医療法人財団</option>
                      <option value="115">医療法人</option>
                      <option value="116">社会医療法人</option>
                      <option value="201">財団法人</option>
                      <option value="202">社団法人</option>
                      <option value="203">宗教法人</option>
                      <option value="204">学校法人</option>
                      <option value="205">社会福祉法人</option>
                      <option value="206">一般社団法人</option>
                      <option value="207">公益社団法人</option>
                      <option value="208">一般財団法人</option>
                      <option value="209">公益財団法人</option>
                      <option value="301">農事組合法人</option>
                      <option value="302">監査法人</option>
                      <option value="303">有限責任中間法人</option>
                      <option value="304">無限責任中間法人</option>
                      <option value="305">税理士法人</option>
                      <option value="306">弁護士法人</option>
                      <option value="307">特定非営利活動法人</option>
                      <option value="308">ＮＰＯ法人</option>
                      <option value="309">認定特定非営利活動法人</option>
                      <option value="310">認定ＮＰＯ法人</option>
                      <option value="401">信用金庫連合会</option>
                      <option value="402">信用組合連合会</option>
                      <option value="403">森林組合連合会</option>
                      <option value="404">商業組合連合会</option>
                      <option value="405">農業協同組合連合会</option>
                      <option value="406">漁業協同組合連合会</option>
                      <option value="407">生活協同組合連合会</option>
                      <option value="408">消費生活協同組合連合会</option>
                      <option value="409">協同組合連合会</option>
                      <option value="410">工業組合連合会</option>
                      <option value="411">環境衛生同業組合</option>
                      <option value="412">商店街振興組合</option>
                      <option value="413">商工会議所</option>
                      <option value="414">厚生年金基金</option>
                      <option value="415">健康保険組合</option>
                      <option value="416">企業年金基金</option>
                      <option value="501">インコーポレイテッド</option>
                      <option value="502">コーポレーション</option>
                      <option value="503">リミテッド</option>
                      <option value="504">カンパニー</option>
                      <option value="999">その他</option>
                    </select>
                  </div>
                </div>
                <div className="form-inline__item form-inline__item--text">
                  <div className="form-input form-input--large">
                    <input
                      type="text"
                      name="事業者_法人格名称_その他"
                      id="事業者_法人格名称_その他"
                      placeholder=""
                      defaultValue=""
                      disabled
                      readOnly
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
                      <label for="事業者_法人格の位置_1">法人名称の前</label>
                      <input
                        type="radio"
                        name="事業者_法人格の位置"
                        id="事業者_法人格の位置_2"
                        value="2"
                        className="is-empty"
                      />
                      <label for="事業者_法人格の位置_2">法人名称の後</label>
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
