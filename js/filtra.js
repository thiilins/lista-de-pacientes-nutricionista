limparFiltroBtn.addEventListener("click", () => {
  filtro.value = "";
  pacientes.forEach((paciente) => {
    paciente.classList.remove("invisivel");
  });
});

filtro.addEventListener("input", function () {
  const pacientes = document.querySelectorAll(".paciente");
  if (this.value.length > 0) {
    pacientes.forEach((paciente) => {
      const tdNome = paciente.querySelector(".info-nome");
      const nome = tdNome.textContent;
      const expressao = new RegExp(this.value, "i");

      if (!expressao.test(nome)) {
        paciente.classList.add("invisivel");
      } else {
        paciente.classList.remove("invisivel");
      }
    });
  } else {
    pacientes.forEach((paciente) => {
      paciente.classList.remove("invisivel");
    });
  }
});
