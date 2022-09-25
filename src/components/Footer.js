import React from "react";

const Footer = () => {
  return (
    <footer id="footer">
      <div class="wrapper">
        <div class="footer_illust">
          <img
            src="https://biz.goto.jata-net.or.jp/assets/images/illust_footer.jpg"
            alt="footer"
          />
        </div>
      </div>

      <ul class="footer_links">
        <li>
          <a
            href="https://biz.goto.jata-net.or.jp/requirements.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            推奨環境
          </a>
        </li>
        <li>
          <a
            href="https://biz.goto.jata-net.or.jp/policy.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            プライバシーポリシー
          </a>
        </li>
      </ul>

      <div class="footer_bottom">
        <div class="wrapper">
          <small>&copy; 2020 Go To トラベル事務局. All Rights Reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
