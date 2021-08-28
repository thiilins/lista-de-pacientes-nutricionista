//Capturar os dados do paciente inseridos no formulário
const capturarDados = () => {
  const paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calcularIMC(form.peso.value, form.altura.value),
  };
  return paciente;
};
// Validar se o peso e altura inseridos são validos
const validarPaciente = (paciente) => {
  const { nome, peso, altura, gordura } = paciente;
  const erros = [];
  if (!nome || !peso || !altura || !gordura) {
    erros.push("Todos os campos devem ser preenchidos");
  }
  !validarPeso(paciente.peso) ? erros.push("Peso inválido") : "";
  !validarAltura(paciente.altura) ? erros.push("Altura Inválida") : "";
  return erros;
};

// Criar campo na tabela e inserir o dado inserido
const criarTD = (conteudo, classe) => {
  let td = document.createElement("TD");
  td.textContent = conteudo;
  td.classList.add(classe);
  return td;
};
// Criar linha na tabela com os campos necessários
const criarLinhaTabela = (paciente) => {
  const { nome, peso, altura, gordura, imc } = paciente;
  const pacienteTR = document.createElement("TR");
  pacienteTR.classList.add("paciente");
  pacienteTR.appendChild(criarTD(nome, "info-nome"));
  pacienteTR.appendChild(criarTD(peso, "info-peso"));
  pacienteTR.appendChild(criarTD(altura, "info-altura"));
  pacienteTR.appendChild(criarTD(gordura, "info-gordura"));
  pacienteTR.appendChild(criarTD(imc, "info-imc"));
  return pacienteTR;
};
// ADICIONANDO NA TABELA
function adicionandoNaTabela(paciente) {
  const pacienteTr = criarLinhaTabela(paciente);
  const tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);
}

// Criando linha descrevendo o erro

const criarErro = (erros) => {
  listaDeErros.innerHTML = "";
  let itens = erros.forEach((erro) => {
    let li = document.createElement("li");
    li.textContent = erro;
    listaDeErros.appendChild(li);
  });
};

// Criando novo paciente
const addNovoPaciente = (event) => {
  const tabela = document.querySelector("#tabela-pacientes");
  // previne evento padrão o formulário
  event.preventDefault();
  const paciente = capturarDados(form);
  const erros = validarPaciente(paciente);
  if (erros.length > 0) {
    criarErro(erros);
    return;
  }
  tabela.appendChild(criarLinhaTabela(paciente));
  // Reseta o formulário
  form.reset();
};
botaoAdicionar.addEventListener("click", addNovoPaciente);
