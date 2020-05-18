import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import { Formik, Field } from "formik";
import * as Yup from "yup";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Formik
        initialValues={{
          cardNumber: "",
          cardholderName: "",
          cvv: "",
          expirationMonth: "",
          expirationDay: ""
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit} style={{ width: "800px" }}>
            <input
              type="number"
              name="cardNumber"
              placeholder="Card Number"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.cardNumber}
            />
            {errors.cardNumber && touched.cardNumber && errors.cardNumber}
            <input
              type="text"
              name="cardholderName"
              placeholder="Card Holder Name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.cardholderName &&
              touched.cardholderName &&
              errors.cardholderName}
            <input
              type="number"
              name="cvv"
              placeholder="CVV"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.cvv}
            />
            {errors.cvv && touched.cvv && errors.cvv}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default App;
