    var special_words = ['CPU', 'ULA', 'Registradores', 'RAM', 'ROM', 'EPROM', 'FLASH', 'Memória de Massa', 'DMA', 'CS', 'Adress Bus', 'Data Bus', 'I5', 'I7', 'Dual Core', 'Quad Core'];

var questions_list = [
    'O famoso cérebro do computador, um dos principais componontes para fazer seu computador funcionar. Escreva a sigla:',
    'A unidade lógica e aritmética do seu computador, responsável por fazer cálculos, comparaçoes lógicas e comparações aritiméticas. Escreva a sigla:',
    'Eles são usados para guardar dados e instruções que a CPU está a usar no momento, permitindo acesso rápido e eficiências na execução de operações. ',
    'Memória volátil de um computador, onde o sistema operacional, programas e dados em uso são armazenados temporariamente. Por isso volátil, pois, os dados armazenados nela serão apgados apos o Computador desligar:',
    'Tipo de memória não volátil que oferece dados apenas para leitura. Os dados armazenados não são alterados quando a energia é desligada e podem ser lidos, mas não gravados ou modificados.',
    'Um tipo de memória ROM que pode ser programada, apagada e reprogramada:',
    'Um tipo de memória eletrónica não volátil, isto é, que mantém os dados mesmo sem energia:',
    'Um dispositivo que armazena grandes quantidades de dados de forma não volátil, ou seja, os dados permanecem mesmo após o dispositivo ser desligado:',
    'Técnica que permite que certos dispositivos de hardware acessem diretamente a memória do computador, sem que a CPU intervenha na transferência de dados:',
    'Também conhecido como Slave Select (SS). Usado para selecionar um ou um conjunto de circuitos que estão conectados no computador',
    'Um conjunto de fios que transporta o endereço de memória para a CPU ou para outros dispositivos:',
    'Um sistema de comunicação que transfere dados entre diferentes componentes de um computador ou sistema eletrônico:',
    'Modelo de processador desenvolvido pela Intel que teve sua primeira versão lançada em setembro de 2009',
    'Modelo de processador desenvolvido pela Intel que teve sua primeira versão lançada em novembro de 2008',    
    'Tipo de processador que possui dois processadores ou melhor dizendo dois centros, núcleos ou cores de execução no mesmo circuito integrado.  Cada core tem sua própria memória cash e controlador o que permite que funcione mais efetivamente do que um processador single:',
    'Segue o mesmo princípio de um dual-core, mas agora em teoria tem o dobro da capacidade de processamento:'
];

var filledCell = [2, 20, 38, 133, 134, 135, 59, 77, 95, 113, 131, 149,
    167, 185, 203, 221, 239, 257, 275, 59, 60, 61, 272, 290, 308, 236,
    254, 272, 290, 308, 116, 134, 152, 170, 188, 27, 45, 63, 81, 99, 117,
    135, 153, 171, 189, 207, 225, 243, 261, 279, 297, 203, 204, 205, 312,
    313, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 187, 20, 223,
    241, 259, 277, 295, 313, 117, 118, 113, 114, 37, 38, 39, 40, 41, 42,
    43, 44, 45, 3, 21, 39, 57, 75, 93, 111, 129, 147];

var firstIndex= [2, 133, 59, 59, 272, 236, 116, 27, 203, 312, 270, 187, 117, 113, 37, 3];

var word = {

    word1: {
        letter: special_words[0].split(''),
        position: [2, 20, 38],
        write: function () {

            for (i in word.word1.letter) {
                var findCell = document.querySelector(`#cell_${word.word1.position[i]}`);

                findCell.innerHTML = word.word1.letter[i];
                console.log(word.word1.letter[i]);
            }
            cell_2.innerHTML = '<span style="color: blue; widith="10px"">1</span>C';
        }
    },
    word2: {
        letter: special_words[1].split(''),
        position: [133, 134, 135],
        write: function () {
            for (i in word.word2.letter) {
                var findCell = document.querySelector(`#cell_${word.word2.position[i]}`);

                findCell.innerHTML = word.word2.letter[i];
                console.log(word.word2.letter[i]);
            }
            cell_133.innerHTML = '<span style="color: blue; widith="10px"">2</span>U';

        }
    },
    word3: {
        letter: special_words[2].split(''),
        position: [59, 77, 95, 113, 131, 149, 167, 185, 203, 221, 239, 257, 275],
        write: function () {
            for (i in word.word3.letter) {
                var findCell = document.querySelector(`#cell_${word.word3.position[i]}`);

                findCell.innerHTML = word.word3.letter[i];   
                console.log(word.word3.letter[i]);
            }
            cell_59.innerHTML = '<span style="color: blue; widith="10px"">3_4</span>R';
            cell_113.innerHTML = '<span style="color: blue; widith="10px"">14</span>i';
        }
    },
    word4: {
        letter: special_words[3].split(''),
        position: [59, 60, 61],
        write: function () {
            for (i in word.word4.letter) {
                var findCell = document.querySelector(`#cell_${word.word4.position[i]}`);

                findCell.innerHTML = word.word4.letter[i];
                console.log(word.word4.letter[i]);
            }
            cell_59.innerHTML = '<span style="color: blue; widith="10px"">3_4</span>R';            
        }
    },
    word5: {
        letter: special_words[4].split(''),
        position: [272, 290, 308],
        write: function () {
            for (i in word.word5.letter) {
                var findCell = document.querySelector(`#cell_${word.word5.position[i]}`);

                findCell.innerHTML = word.word5.letter[i];
                console.log(word.word5.letter[i]);
            }
            cell_272.innerHTML = '<span style="color: blue; widith="10px"">5</span>R';
        }
    },
    word6: {
        letter: special_words[5].split(''),
        position: [236, 254, 272, 290, 308],
        write: function () {
            for (i in word.word6.letter) {
                var findCell = document.querySelector(`#cell_${word.word6.position[i]}`);

                findCell.innerHTML = word.word6.letter[i];
                console.log(word.word6.letter[i]);
            }
            cell_236.innerHTML= '<span style="color: blue; widith="10px"">6</span>E';
        }
    },
    word7: {
        letter: special_words[6].split(''),
        position: [116, 134, 152, 170, 188],
        write: function () {
            for (i in word.word7.letter) {
                var findCell = document.querySelector(`#cell_${word.word7.position[i]}`);

                findCell.innerHTML = word.word7.letter[i];
                console.log(word.word7.letter[i]);
            }
            cell_116.innerHTML = '<span style="color: blue; widith="10px"">7</span>F';
        }
    },
    word8: {
        letter: special_words[7].split(''),
        position: [27, 45, 63, 81, 99, 117, 135, 153, 171, 189, 207, 225, 243, 261, 279, 297],
        write: function () {
            for (i in word.word8.letter) {
                var findCell = document.querySelector(`#cell_${word.word8.position[i]}`);

                findCell.innerHTML = word.word8.letter[i];
                console.log(word.word8.letter[i]);
            }
            cell_27.innerHTML = '<span style="color: blue; widith="10px"">8</span>M';
            cell_117.innerHTML = '<span style="color: blue; widith="10px"">13</span>i';
            cell_153.innerHTML = '-';
            cell_207.innerHTML = '-';
        
        }
    },
    word9: {
        letter: special_words[8].split(''),
        position: [203, 204, 205, 312, 313],
        write: function () {
            for (i in word.word9.letter) {
                var findCell = document.querySelector(`#cell_${word.word9.position[i]}`);

                findCell.innerHTML = word.word9.letter[i];
                console.log(word.word9.letter[i]);
            }
            cell_203.innerHTML = '<span style="color: blue; widith="10px"">9</span>D';
        }
    },
    word10: {
        letter: special_words[9].split(''),
        position: [312, 313],
        write: function () {
            for (i in word.word10.letter) {
                var findCell = document.querySelector(`#cell_${word.word10.position[i]}`);

                findCell.innerHTML = word.word10.letter[i];
                console.log(word.word10.letter[i]);
            }
            cell_312.innerHTML = '<span style="color: blue; widith="10px"">10</span>C';
        }
    },
    word11: {
        letter: special_words[10].split(''),
        position: [270, 271, 272, 273, 274, 275, 276, 277, 278, 279],
        write: function () {
            for (i in word.word11.letter) {
                var findCell = document.querySelector(`#cell_${word.word11.position[i]}`);

                findCell.innerHTML = word.word11.letter[i];
                console.log(word.word11.letter[i]);
            }
            cell_270.innerHTML = '<span style="color: blue; widith="10px"">11</span>A';
            cell_276.innerHTML = '-';
        }
    },
    word12: {
        letter: special_words[11].split(''),
        position: [187, 205, 223, 241, 259, 277, 295, 313, 117, 118],
        write: function () {
            for (i in word.word12.letter) {
                var findCell = document.querySelector(`#cell_${word.word12.position[i]}`);

                findCell.innerHTML = word.word12.letter[i];
                console.log(word.word12.letter[i]);
            }
            cell_187.innerHTML = '<span style="color: blue; widith="10px"">12</span>D';
            cell_259.innerHTML = '-';
        }
    },
    word13: {
        letter: special_words[12].split(''),
        position: [117, 118],
        write: function () {
            for (i in word.word13.letter) {
                var findCell = document.querySelector(`#cell_${word.word13.position[i]}`);

                findCell.innerHTML = word.word13.letter[i];
                console.log(word.word13.letter[i]);
            }
            cell_117.innerHTML = '<span style="color: blue; widith="10px"">13</span>I';
        }
    },
    word14: {
        letter: special_words[13].split(''),
        position: [113, 114],
        write: function () {
            for (i in word.word14.letter) {
                var findCell = document.querySelector(`#cell_${word.word14.position[i]}`);

                findCell.innerHTML = word.word14.letter[i];
                console.log(word.word14.letter[i]);
            }
            cell_113.innerHTML = '<span style="color: blue; widith="10px"">14</span>I';
        }
    },
    word15: {
        letter: special_words[14].split(''),
        position: [37, 38, 39, 40, 41, 42, 43, 44, 45],
        write: function () {
            for (i in word.word15.letter) {
                var findCell = document.querySelector(`#cell_${word.word15.position[i]}`);

                findCell.innerHTML = word.word15.letter[i];
                console.log(word.word15.letter[i]);
            }
            cell_37.innerHTML = '<span style="color: blue; widith="10px"">15</span>D';
            cell_41.innerHTML = '-';
        }
    },
    word16: {
        letter: special_words[15].split(''),
        position: [3, 21, 39, 57, 75, 93, 111, 129, 147],
        write: function () {
            for (i in word.word16.letter) {
                var findCell = document.querySelector(`#cell_${word.word16.position[i]}`);

                findCell.innerHTML = word.word16.letter[i];
                console.log(word.word16.letter[i]);
            }
            cell_3.innerHTML = '<span style="color: blue; widith="10px"">16</span>Q';
            cell_75.innerHTML = '-';
        }
    }
};

var widthTable = 18;
var heightTable = 18;


var cont_correctAnswer = 0;

function start() {
    cont_correctAnswer = 0;
    bt_start.style.display = 'none';
    bt_destroyGame.style.display = 'block';
    div_questions.style.display = 'block';
    div_information.innerHTML = '';
    renderGrid();
    gameSequence();

}

function destroyGrid() {
    bt_start.style.display = 'block';
    bt_destroyGame.style.display = 'none';
    div_questions.style.display = 'none';
    document.querySelector('#div_canvasCruzada').innerHTML = '';
    pontuation();
}

function gameSequence() {
    span_questionText.innerHTML = `<b style="color: white">${cont_correctAnswer + 1}.</b><span style="color: white"> ${questions_list[cont_correctAnswer]} </span>`;

    if (cont_correctAnswer == 1) {
        word.word1.write();
    }
    else if (cont_correctAnswer == 2) {
        word.word2.write();
    }
    else if (cont_correctAnswer == 3) {
        word.word3.write();
    }
    else if (cont_correctAnswer == 4) {
        word.word4.write();
    }
    else if (cont_correctAnswer == 5) {
        word.word5.write();
    }
    else if (cont_correctAnswer == 6) {
        word.word6.write();
    }
    else if (cont_correctAnswer == 7) {
        word.word7.write();
    }
    else if (cont_correctAnswer == 8) {
        word.word8.write();
    }
    else if (cont_correctAnswer == 9) {
        word.word9.write();
    }
    else if (cont_correctAnswer == 10) {
        word.word10.write();
    }
    else if (cont_correctAnswer == 11) {
        word.word11.write();
    }
    else if (cont_correctAnswer == 12) {
        word.word12.write();
    }
    else if (cont_correctAnswer == 13) {
        word.word13.write();
    }
    else if (cont_correctAnswer == 14) {
        word.word14.write();
    }
    else if (cont_correctAnswer == 15) {
        word.word15.write();
    }
    else if (cont_correctAnswer == 16) {
        word.word16.write();

        setTimeout(function () {
            destroyGrid();
        }, 3000);
    }


}


function pontuation() {
    div_information.style.display = 'block';

    div_information.innerHTML = '<h1 style="text-align: center;">Parabéns!!</h1><br><br><p style="text-align: center;">Você finalizou o jogo</p><br><br>';
}

function renderGrid() {
    var tableGame = '<table id="gridGame" cellspacing=0 cellpadding=0>';

    // &nbsp its used to set null value to a cell
    var cellContent_tableGame = '&nbsp';
    var cell = 0;
    for (var row = 1; row <= heightTable; row++) {

        tableGame += `<tr id="row_${row}">`;

        for (var column = 1; column <= widthTable; column++ , cell++) {
            tableGame += `<td class="deadCell" id="cell_${cell}">` + cellContent_tableGame + '</td>';

        }
        tableGame += '</tr>';

    }
    tableGame += '</table>';

    document.querySelector('#div_canvasCruzada').innerHTML = tableGame;

    paintCells();
}



function paintCells() {
    
    for (item in filledCell) {
        var paintCell = document.getElementById(`cell_${filledCell[item]}`);
        paintCell.removeAttribute('deadCell');
        paintCell.setAttribute('class', 'availableCell');
    }
    
    for(var initial= 0; initial < firstIndex.length; initial++){
        var paintIndex_cell = document.getElementById(`cell_${firstIndex[initial]}`);

        paintIndex_cell.innerHTML= `<span style="color: red; font-size:10px">${initial + 1}</span>`;

        if(initial== 2 ||initial== 3){
        paintIndex_cell.innerHTML= `<span style="color: red; font-size:10px">3_4</span>`;
        }
    }    
}

function verify() {
    var answer = input_answer.value;


    if (answer != '') {
        // answer = answer.toLowerCase();
        if (answer == special_words[cont_correctAnswer]) {
            div_verifiedAnswer.classList.add('correctAnswer');
            div_verifiedAnswer.innerHTML = '<br><span class="respostaCerta">Resposta Correta!</span>';
            cont_correctAnswer++;
        }
        else {
            div_verifiedAnswer.classList.add('wrongAnswer');
            div_verifiedAnswer.innerHTML = '<br><span class="respostaErrada">Resposta Incorreta, tente novamente</span>';
        }
        setTimeout(function () {
            div_verifiedAnswer.style.display = 'block';
        }, 500);

        setTimeout(function () {
            div_verifiedAnswer.style.display = 'none';
        }, 3000);

        input_answer.value = '';
        gameSequence();
    }
    else {
        alert('Por Favor, digite uma resposta na caixa de texto');
    }
}