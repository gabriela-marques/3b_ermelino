// FUNÇÕES NOMEADAS

function logar(usuario, senha) {
    alert('Logado com a função nomeada!')
    alert('Olá, ' + usuario)
}
logar("gabi", 12345)
// FUNÇÕES ANÔNIMAS

const conectar = function(usuario, senha){
    alert('Logado com a função anônima!')
    alert('Olá, ' + usuario)
}

// FUNÇÕES FLECHA (ARROW FUNCTIONS)
const colorir = () => {
    alert("função flecha em ação")
}
colorir()
