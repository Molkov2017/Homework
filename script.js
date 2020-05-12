'use strict';

const personalMovieDB = {
        count: 0,
        movies: {},
        actors: {},
        genres: [],
        privat: false,
        start: function () {
            personalMovieDB.count = +prompt("Сколько фильмов Вы уже посмотрели?", "");
            while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
                personalMovieDB.count = +prompt('Сколько фильмов Вы уже посмотрели?', "");
            }
        },
        answer: function () {
            for (let i = 0; i < 2; i++) {
                const a = prompt("Какой фильм Вы посмотрели последним?", ""),
                    b = prompt("Оцените его по десятибальной шкале", "");

                if (a != null && b != null && a != "" && b != "" && a.length < 50) {
                    personalMovieDB.movies[a] = b;
                } else {
                    i--;
                }
            }
        },
        userLevelMov: function () {
            if (personalMovieDB.count < 10) {
                console.log("Просмотрено мало фильмов", "");
            } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
                console.log("Вы - классический зритель");
            } else if (personalMovieDB.count > 30) {
                console.log("Вы киноман");
            }
        },
        toggleVisibleMyDB: function () {
            if (personalMovieDB.privat) {
                personalMovieDB.privat = false;
            } else {
                personalMovieDB.privat = true;
            }

        },
        showMyDB: function (hidden) {
            if (!hidden) {
                console.log(personalMovieDB);
            }
        },

        writeYourGenres: function () {
            for (let i = 1; i < 2; i++) {
                let genres = prompt("Введите Ваши любимые жанры через запятую");
                if (genres === "" || genres == null) {
                    console.log("Вы ввели некорректные данные или не ввели их совсем");
                    i--;
                } else {
                    personalMovieDB.genres = genres.split(", ");
                    personalMovieDB.genres.sort();
                }
            }

            personalMovieDB.genres.forEach((item, i) => {
                    console.log(`Любимый жанр ${i + 1} - это ${item}`);
                });
            }
};