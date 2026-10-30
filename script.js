
const alunos = [
    { nome: "Ana", nota: 8.5 },
    { nome: "Bruno", nota: 5.0 },
    { nome: "Carla", nota: 9.0 },
    { nome: "Daniel", nota: 6.0 },
    { nome: "Eduarda", nota: 4.5 },
    { nome: "Felipe", nota: 7.5 }
];

// Função que retorna apenas os alunos aprovados
function filtrarAprovados(lista) {
    return lista.filter(aluno => aluno.nota >= 6);
}

// Filtrando os alunos
const aprovados = filtrarAprovados(alunos);

// Exibindo os resultados na página
const resultado = document.querySelector("#resultado");

aprovados.forEach(aluno => {
    const elemento = document.createElement("div");

    elemento.classList.add("aluno");

    elemento.innerHTML = `
        <span>${aluno.nome}</span>
        <span class="aprovado">Nota: ${aluno.nota} - Aprovado</span>
    `;

    resultado.appendChild(elemento);
});

console.log("Alunos aprovados:", aprovados);
