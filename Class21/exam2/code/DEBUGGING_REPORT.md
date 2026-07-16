# Debugging Report

### Bug 1
* **File Name**: index.html
* **Original Defective Code / Behaviour**: The application script was loaded near the bottom of the body tag using <script src="./js/app.js"></script>. This caused the web page to crash on startup with a syntax error because it did not recognize "import" or "export" keywords.
* **Correction**: Changed the tag to include the type attribute: <script type="module" src="./js/app.js"></script>.
* **Explanation**: The browser did not know this script was a module, so it could not use import/export. Adding type="module" tells the browser to load it as modern JavaScript.
* **How Correction Was Tested**: Saved the file, reloaded the page in the web browser, and verified that the initial module loading error completely cleared from the console.

### Bug 2
* **File Name**: js/api.js
* **Original Defective Code / Behaviour**: 
const artistResponse = fetch("./artist.json");
const performanceResponse = fetch("./performances.json");
const responses = Promise.all(artistResponse, performanceResponse);
if (artistResponse.ok || performanceResponse.ok) {
  throw new Error("Festival data could not be loaded.");
}
const artists = artistResponse.json;
const performances = performanceResponse.json();
* **Correction**: Corrected the file name to plural "./artists.json", wrapped the fetch promises inside array brackets [...] for Promise.all(), added the missing await keyword, inverted the if check to catch failures (!responses[0].ok), and added the missing await and () parentheses to make .json() run as an asynchronous method call.
* **Explanation**: The code fetched the wrong file name and used Promise.all incorrectly. It also treated .json as if it were a normal property instead of a function call, so the data never loaded correctly.
* **How Correction Was Tested**: Reloaded the page in the browser and confirmed that no immediate syntax or reference errors were thrown by the api module on startup.

### Bug 3
* **File Name**: js/Artist.js
* **Original Defective Code / Behaviour**: 
constructor(id, name, country, genre) {
  this.id = name;
  this.artistName = id;
  this.country = genre;
  this.genre = country;
}
get displayLabel() {
  return ${this.artistName} —  + ${this.genre};
}
* **Correction**: Corrected the property assignments so they match the incoming arguments directly (this.id = id; this.name = name; this.country = country; this.genre = genre;) and fixed the displayLabel getter to combine this.name and this.country.
* **Explanation**: The constructor stored values in the wrong object properties, so artist names, IDs, countries, and genres were mixed up. Fixing the property assignments makes the class hold the right data and show the correct label.
* **How Correction Was Tested**: Reloaded the page to verify that the file layout compiled correctly without any syntax issues.

### Bug 4
* **File Name**: js/Performance.js
* **Original Defective Code / Behaviour**: 

this.stage = time;
this.time = stage;
this.ticketPrice = String(ticketPrice);
this.ticketsRemaining = String(ticketsRemaining);

* **Correction**: Swapped the properties back to their correct layout variables (this.stage = stage; this.time = time;) and converted the ticket values into numbers using Number().
* **Explanation**: The stage and time values were swapped, so the wrong text showed up. Also ticket amounts were kept as strings instead of numbers, so math did not work correctly.
* **How Correction Was Tested**: Verified that the math operations inside the application successfully calculated real sums instead of gluing strings together.

### Bug 5
* **File Name**: js/PerformanceCard.js
* **Original Defective Code / Behaviour**: 
const article = document.querySelector(".performance-card");
if (this.performance.featured) { article.classList.add("sold-out"); }
if (!this.performance.hasTickets) { article.classList.add("featured"); }
this.shadowRoot.querySelector(".price").textContent = this.performance.formattedPrice();
* **Correction**: Changed the selector to look inside the component (this.shadowRoot.querySelector), swapped the incorrect variant class strings, and removed the parentheses () from getters like formattedPrice, ticketLabel, and displayLabel.
* **Explanation**: The component looked for elements on the whole page instead of its own shadow DOM, and it added the wrong style classes. It also tried to call getters like functions, which breaks the code. Fixing those made the cards display correctly.
* **How Correction Was Tested**: Loaded the application, clicked the button, and verified that the cards rendered on screen with the correct text, borders, and opacities without any console crashes.

### Bug 6
* **File Name**: js/app.js
* **Original Defective Code / Behaviour**: 

searchInput.addEventListener("change", applyFilters);
stageFilter.addEventListener("input", applyFilters);
ticketsFilter.value = false;

* **Correction**: Updated the search listener to use the "input" event, updated the stage dropdown to use the "change" event, and cleared the checkbox states inside the reset function using .checked = false;.
* **Explanation**: The search box needed the "input" event to update while typing, and the stage dropdown should use "change" when a new option is picked. Also, checkboxes are reset with .checked = false, not by changing .value.
* **How Correction Was Tested**: Loaded the completed app, typed keywords into the search bar to confirm live updates, and verified that clicking the reset button successfully unchecked both filter boxes.
