"use strict";

const questionHowMuch = 'Сколько фильмов вы уже посмотрели?';
const questionWhich = 'Один из последних просмотренных фильмов?';
const questionMark = 'На сколько оцените его?';

const personalMovieDB = {
    count: undefined,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let howMuchAnswer;

do {
    howMuchAnswer = prompt(questionHowMuch, '');
} while(['', null].indexOf(howMuchAnswer) !== -1);

personalMovieDB.count = +howMuchAnswer;

console.log(personalMovieDB.count < 10 ? 'Просмотрено довольно мало фильмов' : 
personalMovieDB.count < 30 ? 'Вы классический зритель' : 
personalMovieDB.count > 30 ? 'Вы киноман' : 'Произошла ошибка');

for(let i = 0; i < personalMovieDB.count; i++) {
    let questionWhichAnswer;

    do {
        questionWhichAnswer = prompt(questionWhich, '');
    } while(['', null].indexOf(questionWhichAnswer) !== -1 || questionWhichAnswer.length > 50);

    let questionMarkAnswer;

    do {
        questionMarkAnswer = prompt(questionMark, '');
    } while(['', null].indexOf(questionMarkAnswer) !== -1 || questionMarkAnswer.length > 50);
    
    personalMovieDB.movies[questionWhichAnswer] = questionMarkAnswer;
}