function toggleMode() {
  const html = document.documentElement

  // Implementando a condiconal if/else
  //if (html.classList.contains("light")) {
  //html.classList.remove("light")
  //} else {
  //html.classList.add("light")
  //}


  // maneira mais simplmes de fazer a condicional
  html.classList.toggle("light")
}
