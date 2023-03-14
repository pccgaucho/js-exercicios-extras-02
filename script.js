function executarTudo(){
    const numeros = pegarValores()
    const resultados = contas(numeros)
    testaDivisao(numeros[1])
    escreverResultado(resultados)

}

function pegarValores() {
    const input01 = Number(document.getElementById("input_01_ex01").value)
    const input02 = Number(document.getElementById("input_02_ex01").value)
    const input12 = [input01, input02]
    return input12
}

function contas(nums) {
    const resultadoContas =  [nums[0] + nums[1], nums[0] - nums[1], nums[0] * nums[1], nums[0] / nums[1]]
    return resultadoContas
}

function testaDivisao(t) {
    if (t == 0) {
        const elementoBorda = document.getElementById("boxModel04")
        elementoBorda.style.borderColor = "red"
    }
}

function escreverResultado(resultado) {
    for (let i = 0; i < 4; i++) {
        let k = i + 1
        document.getElementById("boxModel0" + k).innerHTML = resultado[i]
    }
}
