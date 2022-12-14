import React from "react";

const Top = () => {
  return (
    <>
      <div id="page_title_wrap">
        <div className="wrapper">
          <h1 className="page_title with_small_title">
            <span className="small_title">旅行会社・OTA等の旅行業者の方へ</span>
            <span className="main_title">オンライン申請</span>
          </h1>
        </div>
      </div>

      <div id="navibar">
        <p>
          <span>
            <a href="https://google.com">トップ</a>
          </span>
          ＞
          <span>
            <a href="https://google.com">旅行会社の方へ</a>
          </span>
          ＞<span>オンライン申請</span>
        </p>
      </div>
    </>
  );
};

export default Top;
