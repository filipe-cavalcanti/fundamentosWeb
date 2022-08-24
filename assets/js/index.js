let nome = document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector("#mapa")

nome.style.width = "100%"
email.style.width = "100%"
assunto.style.width = "100%"



function validaNome() {
    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length < 3) {
        txtNome.innerHTML = "<p>Nome inválido</p>"
    } else {
        txtNome.innerHTML = "<p>Nome válido</p>"
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail")
    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
        txtEmail.innerHTML = "<p>E-mail inválido</p>"
    } else {
        txtEmail.innerHTML = "<p>E-mail válido</p>"
        emailOk = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector("#txtAssunto")
    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = "<p>Texto é muito grande, digite no máximo 100 caracteres.</p>"
    } else {
        txtAssunto.innerHTML = ""
        assuntoOk = true
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert(nome.value + ", formulário enviado com sucesso!")
    } else {
        alert("Preencha o formlário corretamente antes de enviar!")
    }
}

function mapaZoom() {
    mapa.style.width = "70rem"
    mapa.style.height = "70rem"
    mapa.style.transition = "0.7s"
}

function mapaNormal() {
    mapa.style.width = "35rem"
    mapa.style.height = "35rem"
    mapa.style.transition = "0.7s"
}