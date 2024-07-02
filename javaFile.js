// Sample card data
let cards = [];
// Sample themes
let themes = {
    default: {
        fontName: 'Arial',
        fontStyle: 'normal',
        fontColor: '#000000',
        bodyColor: '#FFFFFF',
        backgroundColor: '#F0F0F0'
    },
    cool: {
        fontName: 'Verdana',
        fontStyle: 'italic',
        fontColor: '#007bff',
        bodyColor: '#FFFFFF',
        backgroundColor: '#00FF00'
    },
    sad: {
        fontName: 'Times New Roman',
        fontStyle: 'normal',
        fontColor: '#FF0000',
        bodyColor: '#FFFFFF',
        backgroundColor: '#0000FF'
    },
    funny: {
        fontName: 'Comic Sans MS',
        fontStyle: 'normal',
        fontColor: '#FFA500',
        bodyColor: '#FFFFFF',
        backgroundColor: '#FF00FF'
    }
};

// Sample card data
let cards = [];

// Function to add a new card
function addCard(event) {
    event.preventDefault();
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const eventInfo = document.getElementById('event').value;
    const nearestPlace = document.getElementById('nearest-place').value;
    const image = document.getElementById('image').files[0];

    // Create card object
    const card = {
        date: date,
        time: time,
        title: title,
        description: description,
        event: eventInfo,
        nearestPlace: nearestPlace,
        image: image ? URL.createObjectURL(image) : null
    };


    // Push card to cards array
    cards.push(card);

    // Clear form fields
    document.getElementById('card-form').reset();

    // Update theme options with new card added
    updateThemeOptions();
}

// Function to search cards
function searchCards() {
    const searchTerm = document.getElementById('search-input').value;
    const filterOption = document.getElementById('filter-options').value;
    let results = [];

    if (searchTerm.trim() !== '') {
        results = cards.filter(card => {
            // Check if card contains search term in specified field
            return card[filterOption].toLowerCase().includes(searchTerm.toLowerCase());
        });
    } else {
        results = cards;
    }

    // Display search results
    displaySearchResults(results);
}

// Function to display search results
function displaySearchResults(results) {
    const searchResultsDiv = document.getElementById('search-results');
    // Clear previous results
    searchResultsDiv.innerHTML = '';

    // Display each result
    results.forEach(result => {
        const resultDiv = document.createElement('div');
        resultDiv.classList.add('card');
        resultDiv.innerHTML = `
            <p><strong>Date:</strong> ${result.date}</p>
            <p><strong>Time:</strong> ${result.time}</p>
            <p><strong>Title:</strong> ${result.title}</p>
            <p><strong>Description:</strong> ${result.description}</p>
            <p><strong>Event:</strong> ${result.event}</p>
            <p><strong>Nearest Place:</strong> ${result.nearestPlace}</p>
        `;
        if (result.image) {
            const img = document.createElement('img');
            img.src = result.image;
            img.alt = 'Card Image';
            resultDiv.appendChild(img);
        }
        searchResultsDiv.appendChild(resultDiv);
    });
}
/*
// Function to add a new card
function addCard(event) {
    event.preventDefault();
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const eventInfo = document.getElementById('event').value;
    const nearestPlace = document.getElementById('nearest-place').value;
    const image = document.getElementById('image').files[0];

    // Create card object
    const card = {
        date: date,
        time: time,
        title: title,
        description: description,
        event: eventInfo,
        nearestPlace: nearestPlace,
        image: image ? URL.createObjectURL(image) : null
    };

    // Push card to cards array
    cards.push(card);

    // Clear form fields
    document.getElementById('card-form').reset();

    // Update theme options with new card added
    updateThemeOptions();

    // Update search results
    searchCards();
}

// Function to search cards
function searchCards() {
    const searchTerm = document.getElementById('search-input').value;
    const filterOption = document.getElementById('filter-options').value;
    let results = [];

    if (searchTerm.trim() !== '') {
        results = cards.filter(card => {
            // Check if card contains search term in specified field
            return card[filterOption].toLowerCase().includes(searchTerm.toLowerCase());
        });
    } else {
        results = cards;
    }

    // Display search results
    displaySearchResults(results);
}

// Function to display search results
function displaySearchResults(results) {
    const searchResultsDiv = document.getElementById('search-results');
    // Clear previous results
    searchResultsDiv.innerHTML = '';

    // Display each result
    results.forEach(result => {
        const resultDiv = document.createElement('div');
        resultDiv.classList.add('card');
        resultDiv.innerHTML = `
            <p><strong>Date:</strong> ${result.date}</p>
            <p><strong>Time:</strong> ${result.time}</p>
            <p><strong>Title:</strong> ${result.title}</p>
            <p><strong>Description:</strong> ${result.description}</p>
            <p><strong>Event:</strong> ${result.event}</p>
            <p><strong>Nearest Place:</strong> ${result.nearestPlace}</p>
            <button onclick="deleteCard('${result.title}')">Delete</button>
        `;
        if (result.image) {
            const img = document.createElement('img');
            img.src = result.image;
            img.alt = 'Card Image';
            resultDiv.appendChild(img);
        }
        searchResultsDiv.appendChild(resultDiv);
    });
}

// Function to delete a specific card record
function deleteCard(title) {
    cards = cards.filter(card => card.title !== title);
    searchCards(); // Update search results
}

// Function to delete all card records
function deleteAllCards() {
    cards = [];
    searchCards(); // Update search results
}*/
/*
// Function to add a new card
function addCard(event) {
    event.preventDefault();
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const eventInfo = document.getElementById('event').value;
    const nearestPlace = document.getElementById('nearest-place').value;
    const image = document.getElementById('image').files[0];

    // Create card object
    const card = {
        date: date,
        time: time,
        title: title,
        description: description,
        event: eventInfo,
        nearestPlace: nearestPlace,
        image: image ? URL.createObjectURL(image) : null
    };

    // Push card to cards array
    cards.push(card);

    // Clear form fields
    document.getElementById('card-form').reset();

    // Update theme options with new card added
    updateThemeOptions();

    // Update search results
    searchCards();
}

// Function to search cards
function searchCards() {
    const searchTerm = document.getElementById('search-input').value;
    const filterOption = document.getElementById('filter-options').value;
    let results = [];

    if (searchTerm.trim() !== '') {
        results = cards.filter(card => {
            // Check if card contains search term in specified field
            return card[filterOption].toLowerCase().includes(searchTerm.toLowerCase());
        });
    } else {
        results = cards;
    }

    // Display search results
    displaySearchResults(results);
}

// Function to display search results
function displaySearchResults(results) {
    const searchResultsDiv = document.getElementById('search-results');
    // Clear previous results
    searchResultsDiv.innerHTML = '';

    // Display each result
    results.forEach(result => {
        const resultDiv = document.createElement('div');
        resultDiv.classList.add('card');
        resultDiv.innerHTML = `
            <p><strong>Date:</strong> ${result.date}</p>
            <p><strong>Time:</strong> ${result.time}</p>
            <p><strong>Title:</strong> ${result.title}</p>
            <p><strong>Description:</strong> ${result.description}</p>
            <p><strong>Event:</strong> ${result.event}</p>
            <p><strong>Nearest Place:</strong> ${result.nearestPlace}</p>
            <button onclick="deleteCard('${result.title}')">Delete</button>
            <button onclick="editCard('${result.title}')">Edit</button>
        `;
        if (result.image) {
            const img = document.createElement('img');
            img.src = result.image;
            img.alt = 'Card Image';
            resultDiv.appendChild(img);
        }
        searchResultsDiv.appendChild(resultDiv);
    });
}

// Function to delete a specific card record
function deleteCard(title) {
    cards = cards.filter(card => card.title !== title);
    searchCards(); // Update search results
}

// Function to delete all card records
function deleteAllCards() {
    cards = [];
    searchCards(); // Update search results
}*/
// Function to edit a card record
function editCard(title) {
    const cardIndex = cards.findIndex(card => card.title === title);
    if (cardIndex !== -1) {
        const card = cards[cardIndex];
        // Populate form fields with card data
        document.getElementById('date').value = card.date;
        document.getElementById('time').value = card.time;
        document.getElementById('title').value = card.title;
        document.getElementById('description').value = card.description;
        document.getElementById('event').value = card.event;
        document.getElementById('nearest-place').value = card.nearestPlace;
        // Remove card from array
        cards.splice(cardIndex, 1);
        // Update search results
        searchCards();
    }
}

// Function to add a new theme
function addNewTheme() {
    const newThemeName = prompt('Enter new theme name:');
    if (newThemeName && !themes[newThemeName]) {
        const fontName = prompt('Enter font name:');
        const fontStyle = prompt('Enter font style:');
        const fontColor = prompt('Enter font color (hex):');
        const bodyColor = prompt('Enter body color (hex):');
        const backgroundColor = prompt('Enter background color (hex):');

        // Create new theme object
        const newTheme = {
            fontName: fontName,
            fontStyle: fontStyle,
            fontColor: fontColor,
            bodyColor: bodyColor,
            backgroundColor: backgroundColor
        };

        // Add new theme to themes object
        themes[newThemeName] = newTheme;

        // Apply the new theme
        applyTheme(newThemeName);
    } else {
        alert('Invalid theme name or theme already exists.');
    }
}

// Function to apply selected theme
function applyTheme(themeName) {
    const selectedTheme = themes[themeName];

    // Apply selected theme
    document.body.style.fontFamily = selectedTheme.fontName;
    document.body.style.fontStyle = selectedTheme.fontStyle;
    document.body.style.color = selectedTheme.fontColor;
    document.body.style.backgroundColor = selectedTheme.backgroundColor;
}

// Voice command functionality (basic implementation)
document.addEventListener('DOMContentLoaded', function () {
    const recognition = new webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    document.getElementById('voice-command').addEventListener('click', function () {
        recognition.start();
    });

    recognition.onresult = function (event) {
        const speechToText = event.results[0][0].transcript;
        document.getElementById('search-input').value = speechToText;
        searchCards();
    };
});
