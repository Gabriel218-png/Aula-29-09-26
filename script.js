let musicas = [
    {
        titulo: "Música do Sol",
        artista: "Artista A",
        arquivo: "musicas/musica1.mp3"
    },
    {
        titulo: "Noite Azul",
        artista: "Artista B",
        arquivo: "musicas/musica2.mp3"
    },
    {
        titulo: "Caminho Livre",
        artista: "Artista C",
        arquivo: "musicas/musica3.mp3"
    }
];

function tocarMusica(indice) {

    let musica = musicas[indice];

    document.getElementById("titulo").textContent = musica.titulo;
    document.getElementById("artista").textContent = musica.artista;

    let audio = document.getElementById("audio");

    audio.src = musica.arquivo;

    audio.play();
}