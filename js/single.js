const getUrlVars = () => {
    let vars = {};
    let parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
const imdbID = getUrlVars()["i"];


(function() {
    const apiEndpoint = `http://www.omdbapi.com/?i=${imdbID}&apikey=bb4d0a41`;
    fetch(apiEndpoint)
    .then(res => res.json())
    .then(data => showMovie(data))
    .catch(err => console.log(err));

    const showMovie = (data) => {
        let singleContainer = document.getElementById('single-movie-container');
        let movieDetails = `<div class="movie-details">
        <img
          src=${data.Poster}
          alt=${data.Title}
        />
        <h2 class="title">${data.Title}</h2>
        <p class="title">Actors: ${data.Actors}</p>
        <div class="body">
        <p>Rated: ${data.Rated}</p>
        <p>Released: ${data.Released}</p>
          <p>Director: ${data.Director}</p>
          <p>Runtime: ${data.Runtime}</p>
          <p>Genre: ${data.Genre}</p>
          <p>Plot: ${data.Plot}</p>
          <p>Language: ${data.Language}</p>
          <p>Country: ${data.Country}</p>
          <p>Awards: ${data.Awards}</p>
          <p>imdb Rating: ${data.imdbRating}</p>
          <p>Box Office: ${data.BoxOffice}</p>
        </div>
        <a href="index.html" class="btn"><< BACK </a>
      </div>`;

        singleContainer.innerHTML = movieDetails;
    }

})();
