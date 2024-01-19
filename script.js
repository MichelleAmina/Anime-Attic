const form = document.getElementById("search-form");
const inputEl = document.getElementById("search");
const searchResultsDiv = document.getElementById("searchResults");
//console.log(searchResultsDiv);

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const inputData = inputEl.value.trim();

    // In this if statement, we allow a user to fetch data either based on the name entered or the genre desired 
    if (inputData) {
        const isGenre = isInputGenre(inputData);
        if (isGenre) {
            // If input is a valid genre, fetch anime data for that genre
            fetchAnimeDataByGenre(inputData);
        } else {
            // If input is not a valid genre, fetch anime data based on the entered name
            fetchAnimeData(inputData);
        }
    }
});

function isInputGenre(input) {
    const validGenres = ["action", "adventure", "fantasy", "drama", "comedy", "sci-fi", "mystery", "romance"];
    // Convert the input .toLowerCase for case-insensitive comparison. Can also convert .toUpperCae
    const lowerInput = input.toLowerCase();
    // Check if the lowercased input is in the list of valid genres
    return validGenres.includes(lowerInput);
}

function fetchAnimeData(name) {
    // Fetch anime data based on the entered name and limit the data received to 12
    fetch(`https://api.jikan.moe/v4/anime?q=${name}&limit=15`)
        .then((resp) => resp.json())
        .then((data) => {
            handleData(data.data);
        })
}

function fetchAnimeDataByGenre(genre) {
    // Fetch anime data based on the entered genre
    const endpoint = `https://api.jikan.moe/v4/anime?q=${genre}&sfw`;

    fetch(endpoint)
        .then((resp) => resp.json())
        .then((data) => {
            //handleData is a function that will be called on to process the data 
            handleData(data.data);
        })
}

function filterByGenre(data, genre) {
    // If no genre is entered, return all data
    if (!genre) {
        return data;
    }
    // Filter data based on the entered genre
    return data.filter((item) => {
        // Check if the genre exists in the genres of the current anime
        return item.genres.some((g) => g.name.toLowerCase() === genre.toLowerCase());
    });
}

// Function that handles the fetched data
function handleData(data) {
    // Clear previous results
    searchResultsDiv.innerHTML = "";

    // For each item in the data array, do the following 
    data.forEach((item) => {

        // Create variable names
        const image = item.images.jpg.image_url;
        const titleEl = item.title;
        const japaneseTitleEl = item.title_japanese;
        const episodes = item.episodes;
        const status = item.status;
        const synopsis = item.synopsis;
        const url = item.url;
        const genres = item.genres.map((genre) => genre.name).join(", ");

        // Create a new result element
        const resultElement = document.createElement("div");
        resultElement.classList.add("anime-result");

        // Display the following on the HTML when anime is searched for
        resultElement.innerHTML = `
            <div class="anime-img">
                <img src="${image}" alt="${titleEl}">
            </div>
            <div class="movie-content">
                <h2>${titleEl}</h2>
                <h3>${japaneseTitleEl}</h3>
                <h4>${genres}</h4>
                <h4>Episodes: ${episodes}</h4>
                <h4>Status: ${status}</h4>
                <div class="button">
                    <button><a href="${url}" target="_blank">Learn More</a></button>
                </div>
            </div>`;

        // Append the result element to the searchResultsDiv
        searchResultsDiv.appendChild(resultElement);
    });
}