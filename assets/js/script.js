let email = 'pamela@hcode.com.br';
// Definindo a variável "email" com o valor 'pamela@hcode.com.br'


// Atribuindo um novo valor à variável "email" ('glaucio@hcode.com.br')
email = 'glaucio@hcode.com.br';

// Imprimindo o valor atual da variável "email" no console
console.log(email);// Output: glaucio@hcode.com.br

console.log('O seu email é:'+ email);
// Imprimindo uma mensagem com o valor da variável "email" concatenado no console

console.log(`O seu email é: ${email}`); // Output: O seu email é: glaucio@hcode.com.br



// Adicionando um evento de clique ao elemento com ID "btn-submit" e exibindo mensagem no console ao ser clicado
document.getElementById('btn-submit').addEventListener('click', e => {

    console.log('O botão foi clicado !');
});

// Adicionando um evento de mouseenter (quando o mouse entra no elemento) ao formulário com ID "form-login" e exibindo mensagem no console
document.getElementById('form-login').addEventListener('mouseenter', e => {

    console.log('O mouse está sobre o formulário');
});

// Adicionando um evento de mouseleave (quando o mouse sai do elemento) ao formulário com ID "form-login" e exibindo mensagem no console
document.querySelector('#form-login').addEventListener('mouseleave', e => {

    console.log('O mouse está fora do formulário.');
});

// Adicionando um evento de submit (quando o formulário é submetido) ao formulário com ID "form-login" e prevenindo o comportamento padrão (envio do formulário)
document.querySelector('#form-login').addEventListener('submit', e => {
     
    e.preventDefault();


    // Capturando os valores dos campos de email e senha
    let email = document.querySelector('#email').value;
    let passaword = document.querySelector('#password').value;

    
    // Imprimindo os valores capturados no console
    console.log(email,passaword);

    
    // Criando um objeto JSON com a propriedade "email" e imprimindo-o no console
    let json = {
    
       email: "pamelaalves.pa13@gmail.com" 

    };
    console.log(json);
  





});

 