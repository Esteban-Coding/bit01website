document.addEventListener("DOMContentLoaded", () => {
  const btn_open_support_modal = document.getElementById(
    "btn_open_support_modal"
  );

  const btn_close_support_modal = document.querySelector(
    "#btn_close_support_modal"
  );
  const support_modal = document.querySelector("#support_modal");

  btn_open_support_modal.addEventListener("click", () => {
    support_modal.showModal();
  });

  btn_close_support_modal.addEventListener("click", () => {
    support_modal.close();
  });
});
