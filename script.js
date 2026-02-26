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
    
    RAZÃO SOCIAL - ${razaoSocial} 
    
    FALEI COM ${nome}, ${cargo}, NO TELEFONE ${telefone} E E-MAIL ${email}. 
    A EMPRESA ATUA NO RAMO DE ${segmento}. 
    SÃO ${colaboradores} COLABORADORES E A ESTIMATIVA DE FATURAMENTO ANUAL FICA EM TORNO DE ${faturamento}. 
    NOS ACIONOU COM INTERESSE EM UM SISTEMA PARA ${necessidade}. 
    ATUALMENTE UTILIZAM O SISTEMA ${sistemaAtual}.`;

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


