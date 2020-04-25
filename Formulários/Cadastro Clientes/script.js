function salvar() {
    // 1º coletar os campos
    let nome = document.getElementById("nome").value // nome <-""
    let email = document.getElementById("email").value // email <-""
    let cpf = document.getElementById("cpf").value // nome <-""
    let estado = document.getElementById("estado").value
    let modalidadeSelecionada = document.querySelector("input[type=radio]:checked")

    console.log(nome)
    console.log(email)
    console.log(cpf)
    console.log(estado)
    console.log(modalidadeSelecionada)

    // 2º validação
    // se o campo estiver vazio, exibe o alerta de erro
    // quero comparar se o nome é igual a uma string vazia ("")
    if (nome == "") {
        exibirAlertaErro("Preencha o nome!")
    } else if (email == "") {
        exibirAlertaErro("Preencha seu email!")
    } else if (cpf == "") {
        exibirAlertaErro("Preencha o CPF!")
    } else if (estado == "") {
        exibirAlertaErro("Escolha um Estado!")
    } else if(modalidadeSelecionada == null) {
        exibirAlertaErro("Escolha a modalidade!")    
    } else {
        exibirAlertaSucesso("Salvo com sucesso!!")
        exibirResultado()
    }
}

function exibirAlertaSucesso(mensagem) {
    // 1) acessar a div ,alerta - deixar visível
    document.querySelector(".alerta").style.visibility = "visible"
    // 2) acessar a div .alerta - colocar fundo verde
    document.querySelector(".alerta").style.backgroundcolor = "lightgreen"
    // 3) acessar a imagem da div .alerta - colocar ícone de check
    document.querySelector(".alerta img").src = "tick.svg"
    // 4) acessar o texto da div .alerta  colocar texto "Salvo com sucesso!!"
    document.querySelector(".alerta p").innerHTML = "Salvo com sucesso!!"
}

function exibirAlertaErro(mensagem) { // mensagem <-"preencha o nome"
    document.querySelector(".alerta").style.visibility = "visible"
    document.querySelector(".alerta").style.backgroundColor = "lightcoral"
    document.querySelector(".alerta img").src = "alert.svg"
    document.querySelector(".alerta p").innerHTML = mensagem
}

function fecharAlerta() {
    document.querySelector(".alerta").style.visibility = "hidden"
}

function exibirResultado() {
    let resultado = document.getElementById("resultado")
    let nome = document.getElementById("nome").value
    let email = document.getElementById("email").value
    let cpf = document.getElementById("cpf").value
    let estado = document.getElementById("estado").value
    let modalidadeSelecionada = document.querySelector("input[type=radio]:checked").value

    let modalidadeFormatada = ""

    switch(modalidadeSelecionada) {
        case "1":
            modalidadeFormatada = "Presencial"
            break
        case "2":
            modalidadeFormatada = "Online"
            break
        default:
            modalidadeFormatada = "modalidade inválida"
    }

    // String Template + Interpolação
    resultado.innerHTML = `
    Nome: ${nome}
    Email: ${email}
    CPF: ${email}
    Estado: ${estado}
    Modalidade: ${modalidadeFormatada}
    `
}