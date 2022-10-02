import React from "react";

const InfectionMeasures = () => {
  return (
    <section className="rounded_box type02 section_consent_form">
      <h3 className="rounded_box_title">#わたしたちの感染防止対策</h3>
      <div className="detail_area">
        <p className="consent_form_lead">
          旅行者に安心して旅行を楽しんで頂けるよう、事業者・施設の皆様の感染防止対策への取り組み情報を
          <br />
          Go To トラベル公式サイトなどで積極的に発信します。
          <br />
          そのための情報提供をお願いいたします。
        </p>
        <fieldset>
          <legend>
            感染防止対策への取り組みを旅行者へアピールしてください。
          </legend>
          <div className="other_comment">
            <textarea
              name="同意書_コロナその他"
              id="comment_torikumi"
              maxLength="300"
              cols="30"
              rows="10"
              value=""
            ></textarea>
          </div>
        </fieldset>
        <p className="input-form__note">
          （例）独自の取り組みや伝えたいメッセージ等を300文字以内でご入力ください。
          <br />
          ※公式サイトなどで安心安全の取り組みとしてご紹介させて頂くことがあります。
        </p>
      </div>
    </section>
  );
};

export default InfectionMeasures;
