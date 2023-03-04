//função para criar nova div

function novoDado() {

    const newDiv = document.getElementById('divChange')
    const getNome = document.getElementById('inputNome');
    const getEstado = document.getElementById('inputEstado');
    const getNumero = document.getElementById('inputNumero');
    const getEnsino = document.getElementById('selectFormacao');
    const getProfissao = document.getElementById('inputProfissao');


    


    const novoBotao = document.createElement('p');
    const botaoTexto = 'Mostrar mais ↓'
    novoBotao.innerHTML = botaoTexto;
    newDiv.appendChild(novoBotao);
    novoBotao.classList.add('mostrarMais');


    //para adicionar nome à nova div

    const valueNome = getNome.value;

    const novoNome = document.createElement('h3');
    newDiv.appendChild(novoNome);

    novoNome.innerHTML = valueNome;

    //para adicionar estado à nova div

    const valueEstado = getEstado.value;

    const novoEstado = document.createElement('h3');
    newDiv.appendChild(novoEstado);

    novoEstado.innerHTML = valueEstado;

    //para adicionar o telefone à nova div

    const valueNumero = getNumero.value;

    const novoNumero = document.createElement('p');
    novoNumero.classList.add('dadoOculto');
    newDiv.appendChild(novoNumero);

    novoNumero.innerHTML = valueNumero;

    //para adicionar o ensino

    const valueEnsino = getEnsino.value;

    const novoEnsino = document.createElement('p');
    newDiv.appendChild(novoEnsino);
    novoEnsino.classList.add('dadoOculto');

    novoEnsino.innerHTML = valueEnsino;

    //para adicionar a profissão

    const valueProfissao = getProfissao.value;

    const novaProfissao = document.createElement('p');
    newDiv.appendChild(novaProfissao);
    novaProfissao.classList.add('dadoOculto');
    novaProfissao.innerHTML = valueProfissao;


}

//'Mostrar mais' da primeira div

function mudaDisplay() {
    const nome = document.getElementById('dadoOculto2');
    nome.classList.toggle('dadoOculto');


    var mostraMenos = document.getElementById('mudaMostrar');

    var mostraMenosString = "Mostrar menos ↑";
    mostraMenos.innerHTML = mostraMenosString;
    mostraMenos.classList.add('mostrarMais');


}

//'Mostrar mais' da segunda div

function mudaDisplay2() {
    const nome2 = document.getElementById('teste3');
    nome2.classList.toggle('dadoOculto');

    var mostraMenos2 = document.getElementById('mudaMostrar2');

    var mostraMenosString2 = "Mostrar menos ↑";
    mostraMenos2.innerHTML = mostraMenosString2;
    mostraMenos2.classList.add('mostrarMais');

}

////'Mostrar mais' da terceira div. Sem êxito.

function mudaDisplay3() {
    const nome3 = document.getElementById('divChange');

    nome3.classList.toggle('dadoOculto');

}