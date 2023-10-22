document.addEventListener('DOMContentLoaded', () => {
    fetchMovies();

    function fetchMovies() {
        fetch("http://localhost:3000/films")
            .then(resp => resp.json())
            .then((films) => {
                console.log(films);
                filmDetails(films);
            })
    }

    function filmDetails(films) {
        const movieListElement = document.getElementById('movie-list');
        movieListElement.innerHTML = '';

        films.forEach((film) => {
            const filmElement = document.createElement('li');
            filmElement.textContent = film.title;
            filmElement.addEventListener('click', () => {
                displayMovieDetails(film);
            });
            movieListElement.appendChild(filmElement);
        });
    }

    function displayMovieDetails(film) {
        const movieImageElement = document.getElementById('movie-image');
        const movieTitleElement = document.getElementById('movie-title');
        const movieDescriptionElement = document.getElementById('movie-description');
        const movieRuntimeElement = document.getElementById('movie-runtime');
        const movieShowtimeElement = document.getElementById('movie-showtime');
        const movieCapacityElement = document.getElementById('movie-capacity');
        const movieTicketsSoldElement = document.getElementById('movie-tickets-sold');

        
        movieImageElement.src = film.poster;
        movieImageElement.alt = film.title;
        movieTitleElement.textContent = film.title;
        movieDescriptionElement.textContent = film.description;
        movieRuntimeElement.textContent = `Runtime: ${film.runtime} minutes`;
        movieShowtimeElement.textContent = `Showtime: ${film.showtime}`;
        movieCapacityElement.textContent = `Capacity: ${film.capacity} seats`;
        movieTicketsSoldElement.textContent = `Tickets Sold: ${film.tickets_sold}`;

        const buyTicketButton = document.getElementById('buy-ticket-button');
        const soldOutButton = document.getElementById('sold-out-button');


        buyTicketButton.addEventListener('click', () => {
            if (film.tickets_sold < film.capacity) {
                buyTicket(film, movieTicketsSoldElement);
            }
        });

        function buyTicket(film, movieTicketsSoldElement) {
            
            if (film.tickets_sold < film.capacity) {
                film.tickets_sold++;
                movieTicketsSoldElement.textContent = `Tickets Sold: ${film.tickets_sold}`;
    
               
                if (film.tickets_sold >= film.capacity) {
                    buyTicketButton.style.display = 'none'; 
                    soldOutButton.style.display = 'block'; 
                }
            }
        }
    }
});
