function logar() {
    var email = document.getElementById('email_login').value;
    var senha = document.getElementById('senha_login').value;

    fetch("/login", {
        method: 'POST',
        body: JSON.stringify({
            email_login: email,
            senha: senha
        }),
        headers: { "Content-Type": "application/json" }
    })
    .then(async (resp) => {
        var status = await resp.text();
        console.log(status);
        if (status === 'conectado') {
            location.href = '/assets/user/cadastro.html'; // Redireciona para a página de cadastro
        } else {
            alert('Nome/senha inválidos!');
        }
    })
    .catch(error => {
        console.error('Erro ao fazer login:', error);
    });
}
