My HTML Steps:
Start with HTML Structure:

Begin by creating an HTML document using the HTML5 declaration.
Head Section:

Set up the head section to contain essential metadata and information about the web page.
Meta Tags and Title:

Add meta tags for character encoding and viewport settings. Include a title element for the web page title.
Link to Bootstrap CSS:

Include a link to Bootstrap CSS to style the page.
Script Tags:

Link to external JavaScript (index.js) and CSS (index.css) files for additional functionality and styling.
Create the Body:

Develop the visible content of the web page within the body element.
Header Section:

Design the header with the website name, navigation bar, and a search form.
Navigation Bar:

Add a navigation bar (nav) containing links to Home, Movies, About, and Contact. Include a search form and a "My Account" link.
Main Content Section:

Create the main section for the primary content of the web page.
Movie Container:

Within the main, create a div to serve as a container for movie-related content.
Movie List:

Inside this container, include another div to display a list of movies.
Movie Details:

In the same container, create a div to showcase details about a specific movie, including its image, title, description, runtime, showtime, capacity, and tickets sold. Add buttons for buying tickets and marking movies as sold out.
Footer Section:

At the end of the page, place the footer section, which includes a copyright notice.



My Js steps :
DOM Content Loaded Event Listener:

The code begins by adding an event listener to the DOMContentLoaded event. This ensures that the JavaScript code executes after the HTML document has loaded.
fetchMovies Function:

Inside the event listener, the fetchMovies function is defined.
It makes an HTTP GET request to "http://localhost:3000/films" to fetch a list of movies.
It parses the response as JSON and calls the filmDetails function to handle the movie data.
filmDetails Function:

The filmDetails function takes the movie data as a parameter and prepares to display a list of movies in the UI.
It clears the existing content of the movie list element.
It iterates through the list of movies and creates a list item (li) for each movie's title.
It adds a click event listener to each movie item to trigger the displayMovieDetails function when clicked.
It appends the movie item to the movie list element.
displayMovieDetails Function:

The displayMovieDetails function takes a movie object as a parameter and is responsible for displaying detailed information about a selected movie.
It retrieves various elements from the DOM using their respective IDs.
It updates the movie image source, title, description, runtime, showtime, capacity, and tickets sold with the data from the selected movie.
It sets up event listeners for the "Buy Ticket" button and "Sold Out" button.
buyTicket Function:

The buyTicket function is responsible for allowing users to buy tickets for a movie.
It checks if the number of tickets sold is less than the movie's capacity.
If tickets are available, it increments the tickets_sold count, updates the display, and checks if the movie is sold out.
If the movie is sold out, it hides the "Buy Ticket" button and shows the "Sold Out" button.

My css steps ;
Set Body Background Color:

The code sets the background color of the entire web page body to a light gray color (#f0f0f0).
Style the Navbar:

It styles the navigation bar (.navbar) by adding a blue bottom border (2px solid #2196F3).
Style the Movie Container:

The movie container (.movie-container) is styled with a white background, padding, a slight margin from the top, a light gray border, rounded corners, and a subtle box shadow for a card-like appearance.
Style the Movie List:

The movie list (.movie-list) on the left is styled with a right border, padding on the right side, creating a visual separation from the movie details.
Style the Movie Details:

The movie details (.movie-details) on the right are given padding and a box shadow for a card-like appearance.
Reset Card Styles:

The code resets the default card styles (.card) to have no border, no box shadow, and square corners.
Adjust Card Title and Text Styles:

The card title (.card-title) is styled with a larger font size and dark gray color. The card text (.card-text) is styled with a slightly smaller font size and a medium gray color.
The small text inside the card text (.card-text small) is styled with a lighter gray color.
Style the Movie Image:

The movie image (.card-img-top) is styled with a light border, rounded corners, and some margin at the bottom.
Customize Movie List Styles:

The code further customizes the movie list by removing list bullets, padding, and margin for the unordered list (ul). It also adds padding and a bottom border to each list item (li). The list items change background color on hover for better user feedback.
Styling the Navbar (Again):

The code styles the navigation bar (.navbar) once more by changing the background color to a bright red (#ff6b6b).
Style Navbar Brand and Links:

The navbar brand and navigation links (.navbar-brand, .nav-link) are styled with a specific font family, white color, and visibility. The toggler icon and toggler button are styled with different colors.
Highlight Active Navbar Link:


Form inputs (.form-control) have a light gray background and dark gray text color for better readability.
Style Success Button:

Success buttons (.btn-success) have a green background and border color. On hover, the background color changes to lime green, creating a visual response.
Style the "Sold Out" Button:

The "Sold Out" button (#sold-out-button) has a red background, white text color, and no border. On hover, the background color changes to a darker shade of red.