const calcularIMC = (peso, altura) => {
  const imc = peso / (altura * altura);
  return imc.toFixed(2);
};

const validarPeso = (peso) => {
  return peso < 0 || peso >= 400 ? false : true;
};
const validarAltura = (altura) => {
  return altura < 0 || altura >= 3.0 ? false : true;
};
const ValidarIMC = () => {
  const pacientes = document.querySelectorAll(".paciente"); 
  pacientes.forEach((paciente) => {
    const tdPeso = paciente.querySelector(".info-peso");
    const tdAltura = paciente.querySelector(".info-altura");
    const tdImc = paciente.querySelector(".info-imc");
    const peso = tdPeso.textContent;
    const altura = tdAltura.textContent;
    const imc = calcularIMC(peso, altura);
    let pesoValido = true;
    let alturaValida = true;

    if (!validarPeso(peso)) {
      pesoValido = false;
      tdImc.textContent = "Peso Inválido";
      paciente.classList.add("paciente-invalido");
    }

    if (!validarAltura(altura)) {
      alturaValida = false;
      tdImc.textContent = "Altura Inválida";
      paciente.classList.add("paciente-invalido");
    }
    alturaValida && pesoValido ? (tdImc.textContent = imc) : "";
  });
};
ValidarIMC();
