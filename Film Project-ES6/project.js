const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardbody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");

// UI Objesini Başlatma 

// const ui = new UI();

// // Storage Objesi Üret

// const storage = new Storage();

// // Tüm eventlerii yükleme 

eventListeners();

function eventListeners() {
    form.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded", function () {
        let films = Storage.getFilmsFromStorage();
        UI.loadAllFilms(films);
    });
    cardbody.addEventListener("click", deleteFilm);
    clear.addEventListener("click", clearAllFilms);

}

function addFilm(e) {
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;
    if (title === "" || director === "" || url === "") {
        // Hata
        UI.displayMessages("Tüm Alanları Doldurunuz...", "danger");
    }
    else {
        //Yeni film
        const newFilm = new Film(title, director, url);

        UI.addFilmToUI(newFilm);   // Arayüze film Ekleme 
        Storage.addFilmToStorage(newFilm);  // storage film ekleme
        UI.displayMessages("Film başarıyla eklendi...", "success");
    }

    UI.clearInputs(titleElement, urlElement, directorElement);


    e.preventDefault();
}


function deleteFilm(e) {
    if (e.target.id === "delete-film") {
        UI.deleteFilmFromUI(e.target);
        Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);

        UI.displayMessages("Silme işlemi başarılı", "success");
    }
}


function clearAllFilms() {

    if (confirm("Emin Misiniz?")) {
        UI.clearAllFilmsFromUI();
        Storage.clearAllFilmsFromStorage();
    }
}
