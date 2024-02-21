const sortear = () => {
    let nomes = ["Pocoyo","Elly","Pato","Loula","Sonequita","Soninho","Lagarta","Baleia","Octopus","Aliens"]
    
    let h1Nome = document.getElementById("nome"); // o ponto e o metodo;
    
    let achouNumero = false; // o let e quando some e nao fica no servidor;
    let numeroSorteado;
    
    while (achouNumero == false) { //estrutura de repeticao; //comparacao ==... atribuicao =;
        numeroSorteado = Math.floor(Math.random() * 100);
        if (numeroSorteado < nomes.length) { // algoritimo de validacao;
            achouNumero = true;
        }
    }
    
    switch (numeroSorteado) {
        case 0:
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 1:
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 2:
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 3:
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 4:
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 5:
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 6:
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 7:
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 8:
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 9:
            h1Nome.innerText = nomes[numeroSorteado];
            break;
    
            default:
                h1Nome.innerText = " o numero sorteado nao tem na lista";
        
            h1Nome.innerText += " o numero sorteado foi:" + numeroSorteado;
    }
    }
    