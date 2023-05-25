"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const support_modal = document.querySelector("#support_modal");
  const support_finish_modal = document.querySelector("#support_finish_modal");

  const btn_open_support_modal = document.querySelector(
    "#btn_open_support_modal"
  );

  const btn_close_support_modal = document.querySelector(
    "#btn_close_support_modal"
  );

  const btn_send_support_modal = document.querySelector(
    "#btn_send_support_modal"
  );

  btn_open_support_modal.addEventListener("click", () => {
    support_modal.showModal();
  });

  btn_close_support_modal.addEventListener("click", () => {
    support_modal.close();
  });

  btn_send_support_modal.addEventListener("click", () => {
    let username = document.getElementById("username");
    let email = document.getElementById("email");
    let country = document.getElementById("country");
    let phone = document.getElementById("phone");
    let affair = document.getElementById("affair");
    let message = document.getElementById("message");

    let error = false;
    if (!username.value || username.value.length < 3) {
      username.style.borderBlockColor = "red";
      error = true;
    } else {
      username.style.borderBlockColor = "#21fb04";
    }

    if (!email.value || !email.value.includes("@") || email.value.length < 3) {
      email.style.borderBlockColor = "red";
      error = true;
    } else {
      email.style.borderBlockColor = "#21fb04";
    }

    if (country.value == "NONE") {
      country.style.borderBlockColor = "red";
      error = true;
    } else {
      country.style.borderBlockColor = "#21fb04";
    }

    if (!phone.value || phone.value < 999999) {
      phone.style.borderBlockColor = "red";
      error = true;
    } else {
      phone.style.borderBlockColor = "#21fb04";
    }

    if (!affair.value || affair.value.length < 3) {
      affair.style.borderBlockColor = "red";
      error = true;
    } else {
      affair.style.borderBlockColor = "#21fb04";
    }

    if (!message.value || message.value.length < 3) {
      message.style.borderBlockColor = "red";
      error = true;
    } else {
      message.style.borderBlockColor = "#21fb04";
    }

    if (!error) {
      const string = {
        username: username.value,
        email: email.value,
        country: country.value,
        phone: phone.value,
        affair: affair.value,
        message: message.value,
      };

      document.getElementById("form_support_modal").reset();
      username.style.borderBlockColor = "#dfdfdf";
      email.style.borderBlockColor = "#dfdfdf";
      country.style.borderBlockColor = "#dfdfdf";
      phone.style.borderBlockColor = "#dfdfdf";
      affair.style.borderBlockColor = "#dfdfdf";
      message.style.borderBlockColor = "#dfdfdf";
      support_modal.close();

      support_finish_modal.showModal();
      setTimeout(function () {
        support_finish_modal.close();
      }, 3000);

      return console.log(string);
    }
  });

  const textarea_support_modal = document.querySelector("#message");

  textarea_support_modal.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      document.querySelector("#message").value =
        textarea_support_modal.value.replace(/\n/g, " ");
    }
    textarea_support_modal.style.height = `11%`;
    let scHeight = e.target.scrollHeight;
    textarea_support_modal.style.height = `${scHeight}px`;
  });

  const input_phone_support_modal = document.querySelector("#phone");

  input_phone_support_modal.addEventListener("input", () => {
    input_phone_support_modal.value = input_phone_support_modal.value.slice(
      0,
      13
    );
  });
});
