"use strict";

const quiestion = 'Сколько фильмов вы уже посмотрели?';
const answer = prompt(quiestion, '');

const personalMovieDB = {
    count: +answer,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const quiestion2 = 'Один из последних просмотренных фильмов?';
const quiestion3 = 'На сколько оцените его?';

const a = prompt(quiestion2, ''),
      b = prompt(quiestion3, ''),
      c = prompt(quiestion2, ''),
      d = prompt(quiestion3, '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;