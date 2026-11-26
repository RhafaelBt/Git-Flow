
const formulario = document.getElementById("formulario");
const mensagem = document.getElementById("mensagem");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const idade = document.getElementById("idade").value;

    if (nome === "" || email === "" || senha === "" || idade === "") {

        mensagem.textContent = "Preencha todos os campos!";
        mensagem.style.color = "red";

    } else if (senha.length < 6) {

        mensagem.textContent = "A senha deve ter pelo menos 6 caracteres!";
        mensagem.style.color = "red";

    } else if (Number(idade) < 18) {

        mensagem.textContent = "É necessário ter pelo menos 18 anos!";
        mensagem.style.color = "red";

    } else {

        mensagem.textContent = "Cadastro realizado com sucesso!";
        mensagem.style.color = "green";

        formulario.reset();
    }

});
