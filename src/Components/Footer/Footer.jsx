import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png";
const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__contact">
            <img src={logo} alt="" />
            <p className="footer__cont">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.25 7.22425V14.375C1.25 15.7557 2.36929 16.875 3.75 16.875H16.25C17.6307 16.875 18.75 15.7557 18.75 14.375V7.22425L11.3102 11.8026C10.5067 12.297 9.49327 12.297 8.68976 11.8026L1.25 7.22425Z"
                  fill="#262626"
                />
                <path
                  d="M18.75 5.75652V5.625C18.75 4.24429 17.6307 3.125 16.25 3.125H3.75C2.36929 3.125 1.25 4.24429 1.25 5.625V5.75652L9.34488 10.738C9.74664 10.9852 10.2534 10.9852 10.6551 10.738L18.75 5.75652Z"
                  fill="#262626"
                />
              </svg>
              hello@skillbridge.com
            </p>
            <div className="footer__cont">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.25 3.75C1.25 2.36929 2.36929 1.25 3.75 1.25H4.89302C5.61 1.25 6.23498 1.73796 6.40887 2.43354L7.33037 6.11952C7.48284 6.72942 7.25495 7.37129 6.75202 7.74849L5.674 8.557C5.56206 8.64096 5.53772 8.7639 5.56917 8.84974C6.51542 11.4329 8.5671 13.4846 11.1503 14.4308C11.2361 14.4623 11.359 14.4379 11.443 14.326L12.2515 13.248C12.6287 12.7451 13.2706 12.5172 13.8805 12.6696L17.5665 13.5911C18.262 13.765 18.75 14.39 18.75 15.107V16.25C18.75 17.6307 17.6307 18.75 16.25 18.75H14.375C7.12626 18.75 1.25 12.8737 1.25 5.625V3.75Z"
                  fill="#262626"
                />
              </svg>
              +91 91813 23 2309
            </div>
            <p className="footer__cont">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.61646 18.6259C9.64163 18.6405 9.66141 18.6517 9.67542 18.6596L9.69869 18.6726C9.88441 18.7745 10.1148 18.7738 10.3007 18.6729L10.3246 18.6596C10.3386 18.6517 10.3584 18.6405 10.3835 18.6259C10.4339 18.5967 10.5058 18.5542 10.5963 18.4985C10.7771 18.3872 11.0323 18.223 11.3372 18.0076C11.9459 17.5776 12.7581 16.9395 13.5721 16.1061C15.1922 14.4474 16.875 11.9551 16.875 8.75C16.875 4.95304 13.797 1.875 10 1.875C6.20304 1.875 3.125 4.95304 3.125 8.75C3.125 11.9551 4.80777 14.4474 6.42788 16.1061C7.24188 16.9395 8.05409 17.5776 8.66282 18.0076C8.96771 18.223 9.22295 18.3872 9.40375 18.4985C9.49419 18.5542 9.56612 18.5967 9.61646 18.6259ZM10 11.25C11.3807 11.25 12.5 10.1307 12.5 8.75C12.5 7.36929 11.3807 6.25 10 6.25C8.61929 6.25 7.5 7.36929 7.5 8.75C7.5 10.1307 8.61929 11.25 10 11.25Z"
                  fill="#262626"
                />
              </svg>
              Somewhere in the World
            </p>
          </div>
          <div className="footer__main-content">
          <div className="footer__links">
            <div className="footer__links-box">
              <Link className="footer__link bold">Home</Link>
              <Link className="footer__link">Benefits</Link>
              <Link className="footer__link">Our Courses</Link>
              <Link className="footer__link">Our Testimonials</Link>
              <Link className="footer__link">Our FAQ</Link>
            </div>
            <div className="footer__links-box sec">
              <Link className="footer__link bold">About Us</Link>
              <Link className="footer__link">Company</Link>
              <Link className="footer__link">Achievements</Link>
              <Link className="footer__link">Our Goals</Link>
            </div>
          </div>
            <div className="footer__links-soc">
              <Link className="footer__link bold">Social Profiles</Link>
              <div className="footer__soc">
                <Link className="footer__link">
                  <svg
                    width="45"
                    height="44"
                    viewBox="0 0 45 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.833344"
                      y="0.5"
                      width="43"
                      height="43"
                      rx="5.5"
                      fill="#F7F7F8"
                    />
                    <rect
                      x="0.833344"
                      y="0.5"
                      width="43"
                      height="43"
                      rx="5.5"
                      stroke="#F1F1F3"
                    />
                    <g clip-path="url(#clip0_1_495)">
                      <path
                        d="M32.3333 22C32.3333 16.4771 27.8562 12 22.3333 12C16.8105 12 12.3333 16.4771 12.3333 22C12.3333 26.9912 15.9902 31.1283 20.7708 31.8785V24.8906H18.2318V22H20.7708V19.7969C20.7708 17.2906 22.2638 15.9062 24.548 15.9062C25.6417 15.9062 26.7865 16.1016 26.7865 16.1016V18.5625H25.5255C24.2833 18.5625 23.8958 19.3334 23.8958 20.125V22H26.6693L26.2259 24.8906H23.8958V31.8785C28.6765 31.1283 32.3333 26.9912 32.3333 22Z"
                        fill="#333333"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_495">
                        <rect
                          width="20"
                          height="20"
                          fill="white"
                          transform="translate(12.3333 12)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
                <Link className="footer__link">
                  <svg
                    width="45"
                    height="44"
                    viewBox="0 0 45 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.833344"
                      y="0.5"
                      width="43"
                      height="43"
                      rx="5.5"
                      fill="#F7F7F8"
                    />
                    <rect
                      x="0.833344"
                      y="0.5"
                      width="43"
                      height="43"
                      rx="5.5"
                      stroke="#F1F1F3"
                    />
                    <g clip-path="url(#clip0_1_498)">
                      <path
                        d="M18.6251 30.125C26.1705 30.125 30.2986 23.8723 30.2986 18.4516C30.2986 18.2758 30.2947 18.0961 30.2869 17.9203C31.0899 17.3396 31.7829 16.6202 32.3333 15.7961C31.5854 16.1288 30.7914 16.3462 29.9783 16.4406C30.8344 15.9274 31.4755 15.1212 31.7826 14.1715C30.9771 14.6488 30.0963 14.9855 29.1779 15.1672C28.559 14.5096 27.7408 14.0743 26.8497 13.9284C25.9587 13.7825 25.0443 13.9342 24.2481 14.3601C23.4519 14.786 22.8182 15.4623 22.4449 16.2844C22.0716 17.1066 21.9795 18.0288 22.183 18.9086C20.5521 18.8267 18.9566 18.4031 17.5 17.6651C16.0434 16.9271 14.7581 15.8912 13.7275 14.6246C13.2037 15.5277 13.0434 16.5964 13.2792 17.6134C13.515 18.6304 14.1292 19.5195 14.997 20.1C14.3455 20.0793 13.7083 19.9039 13.138 19.5883V19.6391C13.1374 20.5868 13.4651 21.5055 14.0653 22.239C14.6654 22.9725 15.5011 23.4755 16.4302 23.6625C15.8267 23.8276 15.1933 23.8517 14.579 23.7328C14.8412 24.5479 15.3513 25.2607 16.0382 25.7719C16.725 26.2831 17.5543 26.5672 18.4103 26.5844C16.957 27.7259 15.1618 28.3451 13.3138 28.3422C12.9861 28.3417 12.6587 28.3216 12.3333 28.282C14.2107 29.4865 16.3946 30.1262 18.6251 30.125Z"
                        fill="#333333"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_498">
                        <rect
                          width="20"
                          height="20"
                          fill="white"
                          transform="translate(12.3333 12)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
                <Link className="footer__link">
                  <svg
                    width="45"
                    height="44"
                    viewBox="0 0 45 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.833344"
                      y="0.5"
                      width="43"
                      height="43"
                      rx="5.5"
                      fill="#F7F7F8"
                    />
                    <rect
                      x="0.833344"
                      y="0.5"
                      width="43"
                      height="43"
                      rx="5.5"
                      stroke="#F1F1F3"
                    />
                    <g clip-path="url(#clip0_1_501)">
                      <path
                        d="M30.8529 12H13.8099C12.9935 12 12.3333 12.6445 12.3333 13.4414V30.5547C12.3333 31.3516 12.9935 32 13.8099 32H30.8529C31.6693 32 32.3333 31.3516 32.3333 30.5586V13.4414C32.3333 12.6445 31.6693 12 30.8529 12ZM18.2669 29.043H15.2982V19.4961H18.2669V29.043ZM16.7826 18.1953C15.8294 18.1953 15.0599 17.4258 15.0599 16.4766C15.0599 15.5273 15.8294 14.7578 16.7826 14.7578C17.7318 14.7578 18.5013 15.5273 18.5013 16.4766C18.5013 17.4219 17.7318 18.1953 16.7826 18.1953ZM29.3763 29.043H26.4115V24.4023C26.4115 23.2969 26.3919 21.8711 24.8685 21.8711C23.3255 21.8711 23.0912 23.0781 23.0912 24.3242V29.043H20.1302V19.4961H22.974V20.8008H23.013C23.4076 20.0508 24.3763 19.2578 25.8177 19.2578C28.8216 19.2578 29.3763 21.2344 29.3763 23.8047V29.043Z"
                        fill="#333333"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_501">
                        <rect
                          width="20"
                          height="20"
                          fill="white"
                          transform="translate(12.3333 12)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__rights">
          <p>© 2023 Skillbridge. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
