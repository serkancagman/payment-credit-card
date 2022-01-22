import { useFormik } from "formik";
import Cardbg from "../images/cardBg.jpg";
import cardLogo from "../images/mastercard.ico";
import validationSchema from "./Validation";
import React from "react";
import "./main.css";
const CreditCard = () => {
  const { handleChange, values, handleSubmit, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        name: "",
        surname: "",
        cardNumber: "",
        cvv: "",
        month: "",
        year: "",
      },
      validationSchema,
    });

  React.useEffect(() => {
    let tir;
    if (values.cardNumber.length === 4) {
    }
  }, [values.cardNumber]);

  return (
    <main className="w-100 d-flex justify-content-center align-items-center">
      <div className="cardCanvas">
        <div className="cardWrapper">
          <div className="cardResult">
            <div className="resultInner">
              <img className="cardImg" src={Cardbg} alt="..." />
              <div className="resultProps position-absolute">
                <div className="cardLogo w-100 text-end">
                  <img src={cardLogo} alt="..." />
                </div>
                <div className="my-1 cardNumberResult">
                  <label
                    className="cardLabel text-light"
                    htmlFor="cardNoResult"
                  >
                    Card Number
                    <input
                      disabled
                      type="text"
                      id="cardNoResult"
                      className="resultInput"
                      value={
                        values.cardNumber
                          ? values.cardNumber
                          : "XXXX-XXXX-XXXX-XXXX"
                      }
                    />
                  </label>
                </div>
                <div className="cardBottomResult">
                  <label className="cardLabel text-light" htmlFor="cardOwner">
                    Card Holder
                    <input
                      disabled
                      type="text"
                      id="cardOwner"
                      className="resultInput"
                      value={`${
                        values.name
                          ? values.name.trim().toLocaleUpperCase()
                          : "NAME"
                      } ${
                        values.surname
                          ? values.surname.toLocaleUpperCase()
                          : "SURNAME"
                      }`}
                    />
                  </label>
                  <label className="cardLabel text-light" htmlFor="expires">
                    Expires
                    <input
                      disabled
                      type="text"
                      id="expires"
                      className="resultInput"
                      value={`${values.month ? values.month : "MM"} / ${
                        values.year ? values.year.slice(2) : "YY"
                      } `}
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="formWrapper">
            <form id="cardForm" className="text-center" onSubmit={handleSubmit}>
              <div className="d-flex w-100 my-3 justify-content-between align-items-center bothInput">
                <label className="me-2 cardLabel" htmlFor="name">
                  Name
                  <input
                    className="cardInput"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="text"
                    id="name"
                  />
                  {errors.name && touched.name ? (
                    <span className="formErrorMessage"> * {errors.name}</span>
                  ) : (
                    <span className="formErrorMessage"></span>
                  )}
                </label>
                <label htmlFor="surname" className="cardLabel ms-2">
                  Surname
                  <input
                    className="cardInput"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="text"
                    id="surname"
                  />
                  {errors.surname && touched.surname ? (
                    <span className="formErrorMessage">
                      {" "}
                      * {errors.surname}
                    </span>
                  ) : (
                    <span className="formErrorMessage"></span>
                  )}
                </label>
              </div>
              <label className="w-100 my-3 cardLabel" htmlFor="cardNumber">
                Card Number
                <input
                  className="cardInput text-center"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="cardNumber"
                  placeholder="XXXX-XXXX-XXXX-XXXX"
                  name="cardNumber"
                  maxLength="19"
                  onKeyPress={(e) => {
                    if (!/[0-9]/.test(e.key)) {
                      e.preventDefault();
                    }
                  }}
                />
                {errors.cardNumber && touched.cardNumber ? (
                  <span className="formErrorMessage">
                    {" "}
                    * {errors.cardNumber}
                  </span>
                ) : (
                  <span className="formErrorMessage"></span>
                )}
              </label>
              <label className="w-100 my-2 cardLabel" htmlFor="month">
                Expired Date
                <div className="d-flex w-100  justify-content-between align-items-center bothInput">
                  <select
                    onChange={handleChange}
                    className="w-100 me-2 selectDate"
                    name="month"
                    id="month"
                  >
                    <option value="" disabled selected>
                      Month
                    </option>
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>
                  <select
                    onChange={handleChange}
                    className="w-100 selectDate ms-2"
                    name="year"
                    id="year"
                  >
                    <option value="" disabled selected>
                      Year
                    </option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029</option>
                    <option value="2030">2030</option>
                    <option value="2031">2031</option>
                    <option value="2032">2032</option>
                    <option value="2033">2033</option>
                  </select>
                </div>
              </label>
              <label className="w-100 my-3 cardLabel" htmlFor="cvv">
                CVV
                <input
                  type="text"
                  name="cvv"
                  id="cvv"
                  placeholder="XXX"
                  className="cardInput text-center"
                  maxLength="3"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onKeyPress={(e) => {
                    if (!/[0-9]/.test(e.key)) {
                      e.preventDefault();
                    }
                  }}
                />
                {errors.cvv && touched.cvv ? (
                  <span className="formErrorMessage"> * {errors.cvv}</span>
                ) : (
                  <span className="formErrorMessage"></span>
                )}
              </label>
              <button type="submit" className="btn-primary btn w-100 my-2">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CreditCard;
