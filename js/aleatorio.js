const nomes = ["Fernanda", "Dina", "Melissa", "Morgana", "Calebe","Tulio", "Gabriel","Jaqueline", "Aline", "Salete"];
export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)