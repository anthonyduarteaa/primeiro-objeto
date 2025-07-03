function chama_aluno(){
    
    let aluno = {
        nome: 'Abner Trovão',
        idade: 35,
        altura: 1.72,
        nota: 0
    };


    document.getElementById('nome_aluno').textContent = 'O nome do aluno é: ' + aluno.nome;
    document.getElementById('idade_aluno').textContent = 'A idade do aluno é: ' + aluno.idade;
    document.getElementById('altura_aluno').textContent = 'A altura do aluno é: ' + aluno.altura;
    document.getElementById('nota_aluno').textContent = 'A nota do aluno é: ' + aluno.nota;

    
}