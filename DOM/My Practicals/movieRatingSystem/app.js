const form = document.getElementById("form");
const movie = document.getElementById("movie");
const director = document.getElementById("director");
const year = document.getElementById("year");
const rating = document.getElementById("rating");
const movieDetails = document.getElementById("movieDetails");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const Movie = movie.value;
  const Director =  director.value;
  const Year = year.value;
  const Rating = rating.value;

});