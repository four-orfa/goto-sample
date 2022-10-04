import React from "react";

const header = () => {
  return (
    <header id="header" className="in">
      <div id="fixed_contents">
        <p id="site_title">
          <a href="https://google.com">
            <img alt="Go To トラベル" />
          </a>
        </p>

        <div id="menu_button" className="button_open sp">
          <a href="https://google.com">
            <span className="icon">
              <img alt="メニューを開く" />
            </span>
          </a>
        </div>

        <div id="header_menu">
          <div id="menu_close_button" className="button_close sp">
            <a href="https://google.com">
              <span className="icon">
                <img alt="メニューを閉じる" />
              </span>
            </a>
          </div>

          <nav className="nav_list">
            <ul>
              <li>
                <a
                  href="https://google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TOP
                </a>
              </li>
              <li>
                <a
                  href="https://google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  お知らせ
                </a>
              </li>
              <li>
                <a
                  href="https://google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  事業概要
                </a>
              </li>
              <li>
                <a
                  href="https://google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  申請
                </a>
              </li>
              <li>
                <a
                  href="https://google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  よくある質問
                </a>
              </li>
            </ul>
          </nav>

          <ul className="link_buttons_area">
            <li>
              <a
                href="https://google.com"
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
