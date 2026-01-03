window.onload = function() {
    document.getElementById("inp_num").focus();
}

const dispResults = ()=> {
    let num = parseFloat(document.getElementById('inp_num').value)
    document.getElementById('inp_num1').value = num.toLocaleString('pt-BR')
    let fat = calcFatorial(num)
    document.getElementById('inp_fat').value = fat.toLocaleString('pt-BR')
}

const calcFatorial = (n) => {
    // num = n * (n - 1) * (n - 2) * (n - 3) * (n - 4)
    m = n
    for (let i = 1; i < n; i++)  {        
        m = m * (n - i)
    }

    return m
}

const limpaCampos = () => {
    document.getElementById('inp_num').value = ""
    document.getElementById('inp_num1').value = ""
    document.getElementById('inp_fat').value = ""

    document.getElementById("inp_num").focus();
}