// (condicao) ? 'Valor para verdadeiro' : 'Valor para falso';

const pontuacaoUsuario = 100;

const nivelUsuario = pontuacaoUsuario >=1000 ? 'Usuário VIP' : 'Usuário normal';

const corUsuario = null;
const corPadrao  = corUsuario || 'White'; // se for null ele vai derecionar a white

console.log(corPadrao, pontuacaoUsuario)
