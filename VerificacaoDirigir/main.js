var button = document.querySelector("button")
var painel = document.createElement('div')
var html = document.querySelector('html')

button.addEventListener("click", function() {

    var idade = Number(prompt("Quantos anos você tem?"))
    var apto = idade >= 18 ? "Como você tem " + idade + " anos você está apto a tirar sua carteira 🚙" : "Como ainda você só tem " + idade + " anos você não pode tirar sua carteira 😢"

    painel.setAttribute('class', 'document')
    html.appendChild(painel)
    
    var mensagem = document.createElement('p')
    mensagem.textContent = `${apto}`
    painel.appendChild(mensagem)

})
