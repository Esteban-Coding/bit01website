function show_menu() {
  const list_menu = document.getElementById("list_menu");
  if (list_menu.style.maxHeight == "1000%") {
    list_menu.style.maxHeight = "0%";
  } else {
    list_menu.style.maxHeight = "1000%";
  }
}
