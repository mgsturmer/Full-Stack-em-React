const { gets, print } = require('../Importação e Exportação/Funcoes auxiliares');

const media = gets();

if(media < 5) {
    print('Reprovado');
} else if(media >= 5 && media < 7) {
    print('Recuperação');
} else if(media > 7){
    print('Aprovado');
}else {
    print('Insira um valor de media valido.')
}