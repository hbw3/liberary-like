let timer;
function hitApi() {
  clearTimeout(timer);
  timer = setTimeout(() => {
    console.log(document.getElementById("typing").value);
  }, 300);
}
