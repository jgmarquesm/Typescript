import $ from "jquery"
import Livro from "./modelo/livro";

const livro = new Livro("O pequeno Príncipe", 19.90);

$("body").append(`<h1>${livro.nome}</h1>`);
$("body").append(`<h2>Preço: R$ ${livro.precoComDesconto().toFixed(2)}</h2>`);