async function cadastrar() {
    // 1. Coletar dados dos campos de entrada
    const nome = document.getElementById('nome_cad').value;
    const email = document.getElementById('email_cad').value;
    const senha = document.getElementById('senha_cad').value;
  
    // 2. Validar os dados de entrada (opcional, mas recomendado)
    if (!nome || !email || !senha) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
  
    // 3. Criar um objeto com os dados do usuário
    const usuario = {
      nome: nome,
      email: email,
      senha: senha
    };
  
    // 4. Enviar a requisição POST para o endpoint do servidor
    try {
      const resposta = await fetch('/cadastro', { // Ajuste o endpoint aqui
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
      });
  
      // 5. Lidar com a resposta do servidor
      if (resposta.ok) {
        // Registro bem-sucedido
        alert('Usuário registrado com sucesso!');
        window.location.href = '/assets/user/login.html'; // Redirecionar para a página de login
      } else {
        // Lidar com erros do servidor
        const dadosErro = await resposta.json();
        alert(`Erro ao registrar usuário: ${dadosErro.mensagem}`);
      }
    } catch (erro) {
      // Lidar com erros de rede
      console.error('Erro ao registrar usuário:', erro);
      alert('Ocorreu um erro ao registrar o usuário. Por favor, tente novamente mais tarde.');
    }
  }
  