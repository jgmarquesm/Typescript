$("body").append("Usando jQuery");

$("body").append(`<br>Para acessar a documentação de como definir tipos para bibliotecas veja 
<a href="https://www.typescriptlang.org/docs/handbook/declaration-files/by-example.html" target=__blank>aqui</a>`);

$("body").append(`<br>
Podemos ainda usar a definição de Tipos públicas (que traz algumas vantagens, como code complete) 
quando estamos trabalhando com bibliotecas conhecidas. 
<br> Para bibliotecas próprias, devemos usar o jquery.d.ts e definir 
os tipos manualmente. 
<br> 
Para isso devemos instalar as dependencias usando o npm:`);

const dependencias: string = `
<ul>
    <li>
        rodar o seguinte comando no terminal na pasta raíz do projeto: <code>npm --save-dev @types/nomeDaBiblioteca</code>;
    </li>
    <li>
        Caso tenha dúvidas de como rodar o <code>npm --save-dev @types/nomeDaBiblioteca</code> pesquise pelos tipos <a href="https://www.typescriptlang.org/dt/search" target=_blank>aqui</a>;
    </li>
</ul>
`
$("body").append(dependencias);

