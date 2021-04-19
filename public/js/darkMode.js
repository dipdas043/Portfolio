function dark() {
    const b1 = document.body;
    const toggle_mode = document.querySelector('.toggle_mode')
    b1.classList.toggle("dark_mode");
    toggle_mode.classList.toggle("toggle_mode_active");
    if (toggle_mode.innerHTML === "Dark") {
        toggle_mode.innerHTML = "Light";
      } else {
        toggle_mode.innerHTML = "Dark";
      }
}

