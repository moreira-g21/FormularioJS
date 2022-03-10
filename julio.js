function pegarDados() {
  document.querySelector(".esconder").style.display = "block";

  let camText = document.getElementById("texto").value;
  document.getElementById("camText").innerHTML = "Texto: " + camText;
  let camFone = document.getElementById("fone").value;
  document.getElementById("camFone").innerHTML = "Telefone: " + camFone;
  let camEmail = document.getElementById("email").value;
  document.getElementById("camEmail").innerHTML = "E-mail: " + camEmail;
  let camSenha = document.getElementById("senha").value;
  document.getElementById("camSenha").innerHTML = "Senha: " + camSenha;

  let camCheckInfo = document.getElementById("info");
  let camCheckAdm = document.getElementById("adm");
  let camCheckEnf = document.getElementById("enf");
  
  if (camCheckInfo.checked) {
    document.getElementById("camCheckInfo").innerHTML = "Primeiro(s) Campo(s) Selecionado(s): Informática";
  }
  if (camCheckAdm.checked) {
    document.getElementById("camCheckAdm").innerHTML = "Primeiro(s) Campo(s) Selecionado(s): Administração";
  }
  if (camCheckEnf.checked) {
    document.getElementById("camCheckEnf").innerHTML = "Primeiro(s) Campo(s) Selecionado(s): Enfermagem";
  }

  if (document.getElementById("info2").checked) {
    document.getElementById("camCheckCur").innerHTML = "Segundo Campo Selecionado: Informática";
  } else if (document.getElementById("adm2").checked) {
    document.getElementById("camCheckCur").innerHTML = "Segundo Campo Selecionado: Administração";
  } else if (document.getElementById("enf2").checked) {
    document.getElementById("camCheckCur").innerHTML = "Segundo Campo Selecionado: Enfermagem";
  }

  let camOcult = document.getElementById("oculto").value;
  document.getElementById("camOcult").innerHTML = "Valor Oculto: " + camOcult;
  let camNum = document.getElementById("num").value;
  document.getElementById("camNum").innerHTML = "Número: " + camNum;
  let camData = document.getElementById("data").value;
  document.getElementById("camData").innerHTML = "Data: " + camData;
  let camHora = document.getElementById("hora").value;
  document.getElementById("camHora").innerHTML = "Hora: " + camHora;
  let camRange = document.getElementById("range").value;
  document.getElementById("camRange").innerHTML = "Valor Range: " + camRange;
  let camSel = document.getElementById("PriFaixa").value;
  document.getElementById("camSel").innerHTML = "Valor da 1° Faixa: " + camSel;
}
