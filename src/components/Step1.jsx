import React, { useState, useEffect } from "react";
import Chip from "../assets/chip.png";

const Step1 = () => {
  const [cardInfo, setCardInfo] = useState({
    number: "4321444444444356",
    month: "03",
    year: "25",
    ccv: "---",
    fullName: "Jake Peralta",
  });
  const [cardShow, setCardShow] = useState("");
  const [cardType, setCardType] = useState("");
  //const [data, setData] = useState("");
  //const [submit, setSubmit] = useState();
  const [back, setBack] = useState(false);

  function cardHide(card) {
    let hideNum = [];
    for (let i = 0; i < card.length; i++) {
      if (i < 4) {
        hideNum.push(card[i]);
      } else if (i > 11) {
        hideNum.push(card[i]);
      } else {
        hideNum.push("*");
      }
    }
    return hideNum.join("");
  }

  useEffect(() => setCardShow(cardHide(cardInfo.number)), [cardInfo]);

  useEffect(
    () => (
      cardShow.slice(0, 1) === "4" ? setCardType("visa") : setCardType(""),
      cardShow.slice(0, 1) === "5" ? setCardType("mastercard") : null
    ),
    [cardShow]
  );

  //useEffect(() => {
  //  fetch("https://mocki.io/v1/a5ae8585-b42d-486b-a4ff-25ebfebbaddf")
  //    .then((response) => response.json())
  //    .then((data) => setData(data));
  //}, []);

  //const setCharge = () => {
  //  const date = cardInfo.month + "/" + cardInfo.year;
  //  const compare = [{ number: cardInfo.number, exp: date, ccv: cardInfo.ccv }];

  //  function arrayEquals(a, b) {
  //    return (
  //      Array.isArray(a) &&
  //      Array.isArray(b) &&
  //      a.length === b.length &&
  //      a.every((val, index) => val === b[index])
  //    );
  //  }

  //  data.map((e) => arrayEquals(compare, e) === true ? setSubmit(true) : setSubmit(false));
  //};

  //console.log(submit)

  return (
    <div className="payment__form">
      <div className="input__wrapper">
        <h2>Payment Information</h2>
        <div className="card__inputs">
          <span>
            Card Number{" "}
            <input
              name="credit-number"
              type="tel"
              maxLength="16"
              placeholder="Card Number"
              onChange={(e) =>
                setCardInfo((values) => ({
                  ...values,
                  number: e.target.value,
                }))
              }
            />
          </span>
          <span>
            Name on Card
            <input
              name="credit-name"
              className="cc-name"
              type="text"
              pattern="[A-Za-z]"
              placeholder="Name"
              onChange={(e) =>
                setCardInfo((values) => ({
                  ...values,
                  fullName: e.target.value,
                }))
              }
            />
          </span>
          <span>
            Expire Month
            <input
              name="credit-expires"
              className="cc-expires"
              type="tel"
              pattern="\d*"
              maxLength="2"
              placeholder="MM"
              max="12"
              onChange={(e) =>
                setCardInfo((values) => ({
                  ...values,
                  month: e.target.value,
                }))
              }
            />
          </span>
          <span>
            Expire Year{" "}
            <input
              name="credit-expires"
              className="cc-expires"
              type="tel"
              pattern="\d*"
              maxLength="2"
              placeholder="YY"
              min="22"
              max="32"
              onChange={(e) =>
                setCardInfo((values) => ({ ...values, year: e.target.value }))
              }
            />
          </span>
          <span>
            CCV
            <input
              name="credit-cvc"
              className="cc-ccv"
              type="tel"
              pattern="\d*"
              maxLength="3"
              placeholder="CCV"
              onChange={(e) =>
                setCardInfo((values) => ({ ...values, ccv: e.target.value }))
              }
            />
          </span>
        </div>
      </div>
      {!back && (
        <div>
          <div>
            <div className="card--false">
              <span className="title">Bank of Unknown</span>
              <span className="bank-logo">
                <svg
                  version="1.1"
                  x="0px"
                  y="0px"
                  width="73.7px"
                  height="40.4px"
                  viewBox="0 0 73.7 40.4"
                >
                  <style type="text/css"></style>
                  <g>
                    <path
                      className="st0"
                      d="M37.6,40.4c-8.9-0.1-16.8-1.3-24.3-4.7c-3.6-1.6-7-3.7-9.6-6.7c-5.2-5.9-4.9-12.9,0.6-18.4
      c3.9-3.9,8.7-6.2,13.9-7.9c7.3-2.3,14.8-3.1,22.4-2.6c6.8,0.4,13.4,1.7,19.6,4.5c3.7,1.7,7.2,3.8,9.9,6.9c4.9,5.8,4.7,12.6-0.7,18
      c-3.4,3.4-7.5,5.7-11.9,7.3c-5.1,1.9-10.3,2.9-15.7,3.3C40.2,40.3,38.5,40.3,37.6,40.4z M37.4,39.1c0.8,0,2.1-0.1,3.4-0.2
      c5.6-0.3,11.1-1.5,16.2-3.8c4.3-1.9,8.1-4.4,10.7-8.4c1.7-2.6,2.4-5.4,1.8-8.4c-0.6-3.1-2.3-5.6-4.5-7.8C61.4,7,56.9,5,52.2,3.5
      c-6-1.8-12.1-2.4-18.4-2.1C29.1,1.7,24.4,2.5,20,4c-4.6,1.6-8.8,3.8-12.2,7.4c-4.8,5.2-5,11.4-0.5,16.8c2.3,2.8,5.2,4.7,8.4,6.2
      C22.3,37.8,29.5,39,37.4,39.1z"
                    />
                    <path
                      className="st0"
                      d="M37.3,37.6c-7.4-0.1-14.2-1.1-20.6-4.1c-3.1-1.4-6-3.3-8.2-5.9c-4.2-4.9-4-10.8,0.5-15.4
      c3.3-3.4,7.4-5.4,11.8-6.9C27.5,3.1,34.5,2.5,41.5,3C47.3,3.5,52.8,4.8,58,7.4c2.6,1.3,5.1,3,7,5.2c4.3,4.9,4.2,10.7-0.2,15.4
      c-3.1,3.3-7,5.3-11.2,6.8c-4.4,1.5-8.9,2.4-13.5,2.6C39,37.5,38,37.5,37.3,37.6z M36.9,36.4c6.1,0,12-0.9,17.6-3.1
      c3.8-1.5,7.2-3.5,9.8-6.7c3.1-3.9,3.2-8.5,0.2-12.5c-1.6-2.1-3.7-3.7-6-5c-5.8-3.3-12.1-4.6-18.7-5c-7-0.4-13.9,0.4-20.6,3
      c-3.8,1.5-7.3,3.5-9.8,6.7c-3.2,4-3.2,8.7,0,12.7c2.1,2.6,4.7,4.4,7.7,5.7C23.4,35.2,30,36.3,36.9,36.4z"
                    />
                    <path
                      className="st0"
                      d="M21.1,23.4c0.6,1.4,1.8,1.9,3,2.3c2.5,0.8,5.1,1.5,7.7,2.2c1,0.3,2,0.6,3,1c0.8,0.4,1.5,0.9,2.2,1.4
      c1.3-1.6,3.5-2,5.6-2.6c2.4-0.7,4.8-1.3,7.2-2.1c1.2-0.4,2.4-0.9,2.8-2.5c0,1.7,0.2,3.2-0.1,4.6c-0.1,0.7-1,1.4-1.8,1.7
      c-1.5,0.7-3.1,1.1-4.7,1.6c-2.1,0.6-4.2,1.2-6.3,1.8c-1.2,0.4-2.3,1.1-2.8,2.6c-0.5-1.6-1.8-2.2-3.1-2.6c-2.4-0.8-4.9-1.4-7.4-2.1
      c-1.2-0.4-2.5-0.8-3.7-1.4c-1.2-0.5-1.8-1.4-1.7-2.8C21.1,25.4,21.1,24.4,21.1,23.4z"
                    />
                    <path
                      className="st0"
                      d="M36.9,15.3c1.1-1.5,2.8-1.9,4.4-2.4c2.5-0.7,4.9-1.4,7.4-2.1c0.8-0.2,1.5-0.5,2.2-0.9c0.7-0.4,1.2-1,1.8-1.6
      c0,0.3,0,0.8,0,1.3c0,0.4,0,0.7,0,1.1c0.3,2-0.8,3.1-2.4,3.6c-2.3,0.8-4.7,1.4-7,2c-1.3,0.4-2.7,0.8-4,1.3c-1.1,0.4-2,1-2.4,2.4
      c-0.6-1.6-1.8-2.3-3.2-2.7c-2.4-0.7-4.9-1.3-7.3-2c-1.3-0.4-2.6-0.9-3.8-1.5c-1.1-0.5-1.6-1.4-1.5-2.6c0.1-1,0-2.1,0.1-3.2
      c0.7,1.8,2.3,2.2,3.8,2.7c2.8,0.9,5.7,1.6,8.5,2.5C35.4,13.8,36,14.2,36.9,15.3z"
                    />
                    <path
                      className="st0"
                      d="M36.9,27.6c-0.4-1.3-1.2-2-2.2-2.4c-2.5-0.8-5-1.5-7.5-2.2c-1.4-0.4-2.8-0.9-4.2-1.4c-1.3-0.5-2-1.5-1.9-3
      c0.1-1,0-2,0.1-3c0.5,1.4,1.7,2,2.9,2.3c2.6,0.8,5.2,1.5,7.8,2.3c1,0.3,2.1,0.6,3.1,1.1c0.7,0.3,1.4,0.9,2.1,1.4
      c1.3-1.6,3.5-2,5.5-2.6c2.5-0.8,5-1.4,7.5-2.2c1.1-0.4,2.1-0.9,2.6-2.2c0,1.4,0.1,2.7,0,4c-0.1,0.9-0.8,1.5-1.6,1.8
      c-1.9,0.7-3.8,1.3-5.7,1.9c-2,0.6-3.9,1.1-5.9,1.8C38.3,25.5,37.3,26.2,36.9,27.6z"
                    />
                  </g>
                </svg>
              </span>
              <img className="chip" src={Chip} alt="credit_card_chip" />
              {cardType === "visa" ? (
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1200px-Visa_Inc._logo.svg.png"
                  alt="Visa Inc. logo.svg"
                  className="mc"
                />
              ) : cardType === "mastercard" ? (
                <img
                  className="mc"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1200px-Mastercard-logo.svg.png"
                  alt="Mastercard-logo.svg"
                />
              ) : null}

              <span className="holo-back"></span>
              <span className="holo"></span>
              <br />
              <span className="emboss number">{cardShow}</span>
              <br />
              <br />
              <span className="small-type">VALID UNTIL</span>
              <br />
              <br />
              <span className="emboss exp">
                {cardInfo.month} / {cardInfo?.year}
              </span>
              <br />
              <br />
              <span className="emboss name">
                {cardInfo.fullName?.toUpperCase()}
              </span>
            </div>
          </div>
        </div>
      )}

      {back && (
        <div className="card--true">
          <div className="card__black-line"></div>
          <div className="card__back-content">
            <div className="card__secret">
              <p className="card__secret--last">{cardInfo.ccv}</p>
            </div>
            <span className="bank-logo-back">
              <svg
                version="1.1"
                x="0px"
                y="0px"
                width="73.7px"
                height="40.4px"
                viewBox="0 0 73.7 40.4"
              >
                <style type="text/css"></style>
                <g>
                  <path
                    className="st0"
                    d="M37.6,40.4c-8.9-0.1-16.8-1.3-24.3-4.7c-3.6-1.6-7-3.7-9.6-6.7c-5.2-5.9-4.9-12.9,0.6-18.4
      c3.9-3.9,8.7-6.2,13.9-7.9c7.3-2.3,14.8-3.1,22.4-2.6c6.8,0.4,13.4,1.7,19.6,4.5c3.7,1.7,7.2,3.8,9.9,6.9c4.9,5.8,4.7,12.6-0.7,18
      c-3.4,3.4-7.5,5.7-11.9,7.3c-5.1,1.9-10.3,2.9-15.7,3.3C40.2,40.3,38.5,40.3,37.6,40.4z M37.4,39.1c0.8,0,2.1-0.1,3.4-0.2
      c5.6-0.3,11.1-1.5,16.2-3.8c4.3-1.9,8.1-4.4,10.7-8.4c1.7-2.6,2.4-5.4,1.8-8.4c-0.6-3.1-2.3-5.6-4.5-7.8C61.4,7,56.9,5,52.2,3.5
      c-6-1.8-12.1-2.4-18.4-2.1C29.1,1.7,24.4,2.5,20,4c-4.6,1.6-8.8,3.8-12.2,7.4c-4.8,5.2-5,11.4-0.5,16.8c2.3,2.8,5.2,4.7,8.4,6.2
      C22.3,37.8,29.5,39,37.4,39.1z"
                  />
                  <path
                    className="st0"
                    d="M37.3,37.6c-7.4-0.1-14.2-1.1-20.6-4.1c-3.1-1.4-6-3.3-8.2-5.9c-4.2-4.9-4-10.8,0.5-15.4
      c3.3-3.4,7.4-5.4,11.8-6.9C27.5,3.1,34.5,2.5,41.5,3C47.3,3.5,52.8,4.8,58,7.4c2.6,1.3,5.1,3,7,5.2c4.3,4.9,4.2,10.7-0.2,15.4
      c-3.1,3.3-7,5.3-11.2,6.8c-4.4,1.5-8.9,2.4-13.5,2.6C39,37.5,38,37.5,37.3,37.6z M36.9,36.4c6.1,0,12-0.9,17.6-3.1
      c3.8-1.5,7.2-3.5,9.8-6.7c3.1-3.9,3.2-8.5,0.2-12.5c-1.6-2.1-3.7-3.7-6-5c-5.8-3.3-12.1-4.6-18.7-5c-7-0.4-13.9,0.4-20.6,3
      c-3.8,1.5-7.3,3.5-9.8,6.7c-3.2,4-3.2,8.7,0,12.7c2.1,2.6,4.7,4.4,7.7,5.7C23.4,35.2,30,36.3,36.9,36.4z"
                  />
                  <path
                    className="st0"
                    d="M21.1,23.4c0.6,1.4,1.8,1.9,3,2.3c2.5,0.8,5.1,1.5,7.7,2.2c1,0.3,2,0.6,3,1c0.8,0.4,1.5,0.9,2.2,1.4
      c1.3-1.6,3.5-2,5.6-2.6c2.4-0.7,4.8-1.3,7.2-2.1c1.2-0.4,2.4-0.9,2.8-2.5c0,1.7,0.2,3.2-0.1,4.6c-0.1,0.7-1,1.4-1.8,1.7
      c-1.5,0.7-3.1,1.1-4.7,1.6c-2.1,0.6-4.2,1.2-6.3,1.8c-1.2,0.4-2.3,1.1-2.8,2.6c-0.5-1.6-1.8-2.2-3.1-2.6c-2.4-0.8-4.9-1.4-7.4-2.1
      c-1.2-0.4-2.5-0.8-3.7-1.4c-1.2-0.5-1.8-1.4-1.7-2.8C21.1,25.4,21.1,24.4,21.1,23.4z"
                  />
                  <path
                    className="st0"
                    d="M36.9,15.3c1.1-1.5,2.8-1.9,4.4-2.4c2.5-0.7,4.9-1.4,7.4-2.1c0.8-0.2,1.5-0.5,2.2-0.9c0.7-0.4,1.2-1,1.8-1.6
      c0,0.3,0,0.8,0,1.3c0,0.4,0,0.7,0,1.1c0.3,2-0.8,3.1-2.4,3.6c-2.3,0.8-4.7,1.4-7,2c-1.3,0.4-2.7,0.8-4,1.3c-1.1,0.4-2,1-2.4,2.4
      c-0.6-1.6-1.8-2.3-3.2-2.7c-2.4-0.7-4.9-1.3-7.3-2c-1.3-0.4-2.6-0.9-3.8-1.5c-1.1-0.5-1.6-1.4-1.5-2.6c0.1-1,0-2.1,0.1-3.2
      c0.7,1.8,2.3,2.2,3.8,2.7c2.8,0.9,5.7,1.6,8.5,2.5C35.4,13.8,36,14.2,36.9,15.3z"
                  />
                  <path
                    className="st0"
                    d="M36.9,27.6c-0.4-1.3-1.2-2-2.2-2.4c-2.5-0.8-5-1.5-7.5-2.2c-1.4-0.4-2.8-0.9-4.2-1.4c-1.3-0.5-2-1.5-1.9-3
      c0.1-1,0-2,0.1-3c0.5,1.4,1.7,2,2.9,2.3c2.6,0.8,5.2,1.5,7.8,2.3c1,0.3,2.1,0.6,3.1,1.1c0.7,0.3,1.4,0.9,2.1,1.4
      c1.3-1.6,3.5-2,5.5-2.6c2.5-0.8,5-1.4,7.5-2.2c1.1-0.4,2.1-0.9,2.6-2.2c0,1.4,0.1,2.7,0,4c-0.1,0.9-0.8,1.5-1.6,1.8
      c-1.9,0.7-3.8,1.3-5.7,1.9c-2,0.6-3.9,1.1-5.9,1.8C38.3,25.5,37.3,26.2,36.9,27.6z"
                  />
                </g>
              </svg>
            </span>
          </div>
        </div>
      )}
      <div>
        <button onClick={() => setBack(!back)} className="card__button">
          Back of the Card
        </button>
        <button 
        //onClick={setCharge} 
        className="submit__button">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Step1;
