import React from "react";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer__about">
                <div className="footer__logo">
                  <a href="#">
                    <img
                      src={process.env.PUBLIC_URL + "/footer-logo.png"}
                      alt=""
                    />
                  </a>
                </div>
                <p>
                  {
                    "Khách hàng là trọng tâm của mô hình kinh doanh độc đáo của chúng tôi, bao gồm cả thiết kế."
                  }
                </p>
                <a href="#">
                  <img src={process.env.PUBLIC_URL + "/payment.png"} alt="" />
                </a>
              </div>
            </div>
            <div className="col-lg-2 offset-lg-1 col-md-3 col-sm-6">
              <div className="footer__widget">
                <h6>{"Cửa hàng"}</h6>
                <ul>
                  <li>
                    <a href="#">{"Cửa hàng quần áo"}</a>
                  </li>
                  <li>
                    <a href="#">{"Xu hướng thời trang"}</a>
                  </li>
                  <li>
                    <a href="#">{"Styles mới"}</a>
                  </li>
                  <li>
                    <a href="#">{"Giảm giá"}</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6">
              <div className="footer__widget">
                <h6>{"Thông tin thêm"}</h6>
                <ul>
                  <li>
                    <a href="#">{"Thông tin cửa hàng"}</a>
                  </li>
                  <li>
                    <a href="#">{"Liên hệ chúng tôi"}</a>
                  </li>
                  <li>
                    <a href="#">{"Phương thức thanh toán"}</a>
                  </li>
                  <li>
                    <a href="#">{"Chính sách đổi trả"}</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 offset-lg-1 col-md-6 col-sm-6">
              <div className="footer__widget">
                <h6>{"Thư mới nhất"}</h6>
                <div className="footer__newslatter">
                  <p>
                    {
                      "Hãy là người đầu tiên biết về hàng mới xuất hiện, xem sách, bán hàng và quảng cáo!"
                    }
                  </p>
                  <form action="#">
                    <input type="text" placeholder="Email của bạn" />
                    <button type="submit">
                      <span className="icon_mail_alt"></span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="footer__copyright__text">
                <p>                    
                  {
                    `
                    Copyright © 
                    ${new Date().getFullYear()}
                    All rights reserved | Tran Trung Chinh | 0362.942.329
                    `    
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
