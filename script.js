
// CLASSE ABSTRATA
class Personagem {
    constructor(nome, idade) {
        if (new.target === Personagem) {
            throw new Error("A classe Personagem não pode ser instanciada diretamente.");
        }

        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        throw new Error("O método apresentar deve ser implementado.");
    }
}

// CLASSE HERDEIRA 1
class Guerreiro extends Personagem {
    constructor(nome, idade, arma) {
        super(nome, idade);
        this.arma = arma;
    }

    apresentar() {
        return `Sou ${this.nome}, tenho ${this.idade} anos e luto usando ${this.arma}.`;
    }
}

// CLASSE HERDEIRA 2
class Mago extends Personagem {
    constructor(nome, idade, magia) {
        super(nome, idade);
        this.magia = magia;
    }

    apresentar() {
        return `Sou ${this.nome}, tenho ${this.idade} anos e domino ${this.magia}.`;
    }
}

// INSTÂNCIAS DOS OBJETOS
const aragorn = new Guerreiro("Aragorn", 35, "Espada Andúril");

const legolas = new Guerreiro("Legolas", 2931, "Arco e flechas");

const gandalf = new Mago("Gandalf", 2000, "Magia Arcana");

// ARRAY DE PERSONAGENS
const personagens = [aragorn, legolas, gandalf];

// EXIBIÇÃO NA PÁGINA
const container = document.querySelector("#personagens");

personagens.forEach((personagem) => {
    const card = document.createElement("article");

    card.classList.add("personagem");

    const tipo = personagem instanceof Guerreiro
        ? "Guerreiro"
        : "Mago";

    card.innerHTML = `
        <span class="tipo">${tipo}</span>
        <h3>${personagem.nome}</h3>
        <p>Idade: ${personagem.idade} anos</p>
        <p>${personagem.apresentar()}</p>
    `;

    container.appendChild(card);
});
