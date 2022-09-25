import React from "react";

const ConsentForm = () => {
  return (
    <>
      <h2>お申し込みフォーム</h2>
      <section class="rounded_box type02 section_consent_form">
        <h3 class="rounded_box_title">同意書</h3>
        <div class="detail_area">
          <p class="consent_form_lead">
            登録にあたり以下の同意内容をご覧いただき、同意できるものにチェックをお願いします。
            <br />
            以下の該当項目全てにチェックがない場合は登録できません。
          </p>
          <fieldset>
            <legend>登録にあたっての同意事項</legend>
            <ul class="plane consent_form_list">
              <li>
                <input
                  type="checkbox"
                  id="consent_check0_0"
                  name="consent_check['0']"
                  class="js_consent_check"
                  value="t"
                />
                <label for="consent_check0_0">
                  <a href="https://google.com" target="_blank" rel="noreferrer">
                    サービス産業消費喚起事業（Go To トラベル事業）旅行会社・OTA
                    等旅行事業者・宿泊事業者向け取扱要領
                  </a>
                  を確認したうえでGo Toトラベル事業に参加することに同意します。
                </label>
              </li>
              <li>
                <a
                  href="https://google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Go To トラベル事業 参加同意書（旅行事業者・第三事業者用）
                </a>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="consent_check0_1"
                  name="consent_check['1']"
                  class="js_consent_check"
                  value="t"
                />
                <label for="consent_check0_1">
                  上記、参加同意書に記載の「地域共通クーポンの取扱いに関する事項」に同意します。
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="consent_check0_2"
                  name="consent_check['2']"
                  class="js_consent_check"
                  value="t"
                />
                <label for="consent_check0_2">
                  上記、参加同意書に記載の「反社会的勢力ではないことの表明・確約に関する事項」に同意します。
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="consent_check0_3"
                  name="consent_check['3']"
                  class="js_consent_check"
                  value="t"
                />
                <label for="consent_check0_3">
                  <a
                    href="https://biz.goto.jata-net.or.jp/assets/document/観光庁より、ＧｏＴｏトラベル事業をご利用いただく皆様へ_200730_2330.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    「観光庁より、ＧｏＴｏトラベル事業をご利用いただく皆様へ」
                  </a>
                  を旅行者に同意させた上で、契約することに同意します。
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="consent_check0_4"
                  name="consent_check['4']"
                  class="js_consent_check"
                  value="t"
                />
                <label for="consent_check0_4">
                  <a href="https://google.com">個人情報保護方針</a>
                  に同意します。
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="consent_check0_5"
                  name="consent_check['5']"
                  class="js_consent_check"
                  value="t"
                />
                <label for="consent_check0_5">
                  上記の条件を満たしていないことが発覚した場合、登録を取消されることに同意します。
                </label>
              </li>
            </ul>
          </fieldset>
        </div>
      </section>
      <section class="rounded_box type02 section_consent_form">
        <h3 class="rounded_box_title">
          感染症拡大防止策に係る取扱店舗の責務等
        </h3>
        <div class="detail_area">
          <p class="consent_form_lead">
            新型コロナウイルス感染症対策について、下記内容を再度ご確認いただき、
            <span class="pc-only">
              <br />
            </span>
            各項目ごとに実施同意のチェックをお願いします。
            <br />
            以下の該当項目全てにチェックがない場合は登録ができません。
          </p>
          <fieldset>
            <ul class="plane consent_form_list">
              <li>
                <input
                  id="consent_check1_0"
                  name="consent_check_1['0']"
                  type="checkbox"
                  class="js_consent_check"
                  value="t"
                />
                <label for="consent_check1_0">
                  チェックインに際しては、直接の対面を避けるなど、感染予防策を講じた上で旅行者全員に検温と本人確認を実施します。
                </label>
              </li>

              <li>
                <input
                  id="consent_check1_1"
                  name="consent_check_1['1']"
                  type="checkbox"
                  class="js_consent_check"
                  value="t"
                />
                <label for="consent_check1_1">
                  旅行者に検温等の体調チェックを実施し、発熱がある場合や風邪症状がみられる場合には、週末も含め保健所の指示を仰ぎ、適切に対応します。
                </label>
              </li>

              <li>
                <input
                  id="consent_check1_2"
                  name="consent_check_1['2']"
                  type="checkbox"
                  class="js_consent_check"
                  value="t"
                />
                <label for="consent_check1_2">
                  浴場や飲食施設等の共用施設の利用について、人数制限や時間制限などを設け、三密対策を徹底します。
                </label>
              </li>

              <li>
                <input
                  id="consent_check1_3"
                  name="consent_check_1['3']"
                  type="checkbox"
                  class="js_consent_check"
                  value="t"
                />
                <label for="consent_check1_3">
                  ビュッフェ方式において、食事の個別提供、従業員による取り分け、もしくは個別のお客様専用トングや箸等を用意し
                  共用を避けるなど料理の提供方法を工夫し、また、座席の間隔を離すなど、食事の際の三密対策を徹底します。
                </label>
              </li>

              <li>
                <input
                  id="consent_check1_4"
                  name="consent_check_1['4']"
                  type="checkbox"
                  class="js_consent_check"
                  value="t"
                />
                <label for="consent_check1_4">
                  客室、エレベーターなどの共用スペース等の消毒・換気を徹底します。
                </label>
              </li>

              <li>
                <input
                  id="consent_check1_5"
                  name="consent_check_1['5']"
                  type="checkbox"
                  class="js_consent_check"
                  value="t"
                />
                <label for="consent_check1_5">
                  「参加条件」を徹底・実施している旨をホームページやフロントでの掲示等で対外的に公表します。
                </label>
              </li>

              <li>
                <input
                  id="consent_check1_6"
                  name="consent_check_1['6']"
                  type="checkbox"
                  class="js_consent_check"
                  value="t"
                />
                <label for="consent_check1_6">
                  旅行商品の予約、購入時や宿泊施設でのチェックインの際等に、旅行者が順守すべき事項を周知徹底します。
                  <br />
                  また、若者の団体旅行、重症化しやすい高齢者の団体旅行、大人数の宴会を伴う旅行は一般的にリスクが高いと
                  <br />
                  考えられるため控えることが望ましいですが、それだけをもって一律に支援の対象外とするものではなく、
                  <br />
                  修学旅行・教育旅行などのように、着実な感染防止対策が講じられることを前提に、
                  <br />
                  適切に旅行が実施されるべきことを周知徹底します。
                </label>
              </li>

              <li>
                <input
                  id="consent_check1_23"
                  name="consent_check_1['23']"
                  type="checkbox"
                  class="js_consent_check"
                  value="t"
                />
                <label for="consent_check1_23">
                  観光庁が実施する感染症対策の調査等に応じます。
                </label>
              </li>

              <li>
                <input
                  id="consent_check1_7"
                  name="consent_check_1['7']"
                  type="checkbox"
                  class="js_consent_check"
                  value="t"
                />
                <label for="consent_check1_7">
                  上記の条件を満たしていないことが発覚した場合、登録を取消されることに同意します。
                </label>
              </li>
            </ul>
          </fieldset>
        </div>
      </section>
    </>
  );
};

export default ConsentForm;
