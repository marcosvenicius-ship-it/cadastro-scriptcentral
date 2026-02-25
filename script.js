function gerarResumo() {

    const nome = document.getElementById("nome").value;
    const cargo = document.getElementById("cargo").value;
    const telefone = document.getElementById("telefone").value;
    const email = document.getElementById("email").value;
    const segmento = document.getElementById("segmento").value;
    const colaboradores = document.getElementById("colaboradores").value;
    const faturamento = document.getElementById("faturamento").value;
    const necessidade = document.getElementById("necessidade").value;
    const sistemaAtual = document.getElementById("sistemaAtual").value;
    const razaoSocial = document.getElementById("razao-social").value;
    const cnpj = document.getElementById("cnpj").value;

    const resumo = `
    CNPJ - ${cnpj} 
    Razão Social - ${razaoSocial} 
    Falei com ${nome}, ${cargo}, no telefone ${telefone} e e-mail ${email}. 
    A empresa atua no ramo de ${segmento}. 
    São ${colaboradores} colaboradores e a estimativa de faturamento anual fica em torno de ${faturamento}. 
    Nos acionou com interesse em um sistema para ${necessidade}. 
    Atualmente utilizam o sistema ${sistemaAtual}.`;

    document.getElementById("resultado").innerText = resumo.trim();

};

function limparFormulario() {
    document.getElementById("cnpj").value = "";
    document.getElementById("nome").value = "";
    document.getElementById("cargo").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("email").value = "";
    document.getElementById("segmento").value = "";
    document.getElementById("colaboradores").value = "";
    document.getElementById("faturamento").value = "";
    document.getElementById("necessidade").value = "";
    document.getElementById("sistemaAtual").value = "";
    document.getElementById("razao-social").value = "";

    document.getElementById("resultado").innerHTML = '';
    document.getElementById("razao-social").focus();
}