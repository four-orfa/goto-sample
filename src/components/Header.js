import React from "react";

const header = () => {
  return (
    <header id="header" class="in">
      <div id="fixed_contents">
        <p id="site_title">
          <a href="https://biz.goto.jata-net.or.jp/">
            <img
              src="https://biz.goto.jata-net.or.jp/assets/images/site_title.png"
              alt="Go To トラベル"
            />
          </a>
        </p>

        <div id="menu_button" class="button_open sp">
          <a href="https://google.com">
            <span class="icon">
              <img
                src="https://biz.goto.jata-net.or.jp/assets/images/menu_button.png"
                alt="メニューを開く"
              />
            </span>
          </a>
        </div>

        <div id="header_menu">
          <div id="menu_close_button" class="button_close sp">
            <a href="https://google.com">
              <span class="icon">
                <img
                  src="https://biz.goto.jata-net.or.jp/assets/images/menu_close_button.png"
                  alt="メニューを閉じる"
                />
              </span>
            </a>
          </div>

          <nav class="nav_list">
            <ul>
              <li>
                <a
                  href="https://biz.goto.jata-net.or.jp/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TOP
                </a>
              </li>
              <li>
                <a
                  href="https://biz.goto.jata-net.or.jp/#news"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  お知らせ
                </a>
              </li>
              <li>
                <a
                  href="https://biz.goto.jata-net.or.jp/#summary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  事業概要
                </a>
              </li>
              <li>
                <a
                  href="https://biz.goto.jata-net.or.jp/#application"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  申請
                </a>
              </li>
              <li>
                <a
                  href="https://biz.goto.jata-net.or.jp/#faq"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  よくある質問
                </a>
              </li>
            </ul>
          </nav>

          <ul class="link_buttons_area">
            <li>
              <a
                href="https://goto.jata-net.or.jp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                旅行者向け公式サイト
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default header;
