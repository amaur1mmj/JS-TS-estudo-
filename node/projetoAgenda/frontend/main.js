import 'core-js/stable';
import 'regenerator-runtime/runtime';

import Login from './modules/Login';
import CadastroContato from './modules/CadastroContato';

const login = new Login('.form-login');
const cadastro = new Login('.form-cadastro');
const formCadastro = new CadastroContato('.form-cadastro-contato');

login.init();
cadastro.init();

formCadastro.initEvents();




//mport './assets/css/style.css';

