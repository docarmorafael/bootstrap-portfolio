const botaoPerfil = document.getElementById("abrirPerfil");

const janelaPerfil = document.getElementById("perfilModal");

const modal = new bootstrap.Modal(janelaPerfil);

botaoPerfil.addEventListener("click", function(event) {
    event.preventDefault();
    modal.show();
});
