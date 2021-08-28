tabela.addEventListener("dblclick", (event) => {
  // const alvo = event.target;
  // const linha = event.target.parentNode;
  event.target.parentNode.classList.add("fadeOut");
  setTimeout(() => {
    event.target.parentNode.remove();
  }, 500);
});
