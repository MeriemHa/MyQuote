//Quotes Array
const myQuotes = [
  {
    quote:
      '"The greatest glory in living lies not in never falling, but in rising every time we fall."',
    writer: "Nelson Mandela",
  },

  {
    quote:
      "\"All humans make mistakes. What determines a person's character aren't the mistakes we make. It's how we take those mistakes and turn them into lessons rather than excuses. \" ",
    writer: "Colleen Hoover",
  },

  {
    quote:
      '"And once the storm is over you won’t remember how you made it through, how you managed to survive. You won’t even be sure, in fact, whether the storm is really over. But one thing is certain. When you come out of the storm you won’t be the same person who walked in. That’s what this storm’s all about." ',
    writer: "Haruki Murakumi",
  },

  {
    quote:
      '"Does losing prove that you are weak? Isn’t losing difficult for all of you? A challenge where, after ending up on your hands and knees, you must see if you can stand up again. If you stay on your hands and knees, that proves that you are weak." ',
    writer: "Takeda Ittetsu.Haikyu!",
  },

  {
    quote: '"The world is cruel but also very beautiful.  " ',
    writer: "Mikasa Ackerman. Attack On Titan",
  },

  {
    quote:
      '"Ulac win izegren asif ur yelxis.                                                                                         " ',
    writer: "Proverbe Kabyle",
  },

  {
    quote:
      '"Ur yezmir yiwen ad yeffer iṭij s-uɣerbal.                                                                                 " ',
    writer: "Proverbe Kabyle",
  },

  {
    quote:
      '"Ljerḥ yeqqaz iḥellu, yir awal yeqqaz irennu.                                                                               " ',
    writer: "Proverbe Kabyle",
  },

  {
    quote:
      '"omae wa mou shindeiru.                                                                               " ',
    writer: "Hokuto no Ken",
  },

  {
    quote:
      '"Give up on your dreams and die.                                                                               " ',
    writer: "Levi Ackerman",
  },
];

const favoriteQuotes = []; // Array to store favorite quotes

// function that allows us to display quotes randomly takes as a parameter the array of quotes and returns a random quote .

function getRandomQuote(quotes) {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

// Event runs once the DOM (Document Object Model) is laoded,
// and allow execution of the function.
document.addEventListener("DOMContentLoaded", function () {
  // Get the elements from the DOM
  const generateBtn = document.querySelector(".button-28");
  const quotePopup = document.querySelector(".QuoteDiv");
  const quoteElement = document.getElementById("quote");
  const writerElement = document.getElementById("writer");
  const heartIcon = document.querySelector(".heart-icon");

  // Function to display a random quote

  function generateQuote() {
    const filteredQuotes = myQuotes.filter(
      (quote) => !favoriteQuotes.includes(quote)
    );
    if (filteredQuotes.length > 0) {
      const randomQuote = getRandomQuote(filteredQuotes);
      quoteElement.textContent = randomQuote.quote;
      writerElement.textContent = randomQuote.writer;
      quotePopup.style.display = "block";
      heartIcon.style.display = "block";
      heartIcon.classList.remove("clicked");
      currentQuote = randomQuote; // Update current quote
    } else {
      quoteElement.textContent = "No more quotes available.";
      writerElement.textContent = "";
      heartIcon.style.display = "none";
    }
  }

  // We store the current quote
  let currentQuote = null;

  // Event  for the heart icon click

  heartIcon.addEventListener("click", function () {
    heartIcon.classList.toggle("clicked");
    if (heartIcon.classList.contains("clicked")) {
      currentQuote.isLiked = true;
      favoriteQuotes.push(currentQuote); // Add current quote to favorites
    } else {
      // If the heart icon does not have the "clicked" class
      currentQuote.isLiked = false; // Set the isLiked property of the current quote to false
      const index = favoriteQuotes.findIndex((quote) => quote === currentQuote);
      if (index !== -1) {
        favoriteQuotes.splice(index, 1); // Remove the current quote from favorites
      }
    }
  });
  // When we click generate button generateQuote function runs
  generateBtn.addEventListener("click", generateQuote);
});

//Show Page of Quotes Generation
function showPage1() {
  //We remove  Classname class name active page for page1 the display will be none  ,
  // Display page 1 by adding a ClassName active-page

  document.getElementById("page2").classList.remove("active-page");
  document.getElementById("page1").classList.add("active-page");
}

// Function to show the page of favourites quotes
function showPage2() {
  // Remove "active-page" class from page1 element and add it to page2 element
  //Display page 2 (Fav Quotes)
  document.getElementById("page1").classList.remove("active-page");
  document.getElementById("page2").classList.add("active-page");

  // Get the favorites container element
  const favoritesContainer = document.getElementById("favorites-container");

  //Creating HTML for each fav element (The liked ones)

  favoriteQuotes.forEach((quote) => {
    const FquoteDiv = document.createElement("div");
    FquoteDiv.classList.add("Fquote");

    const QDiv = document.createElement("div");
    QDiv.classList.add("QDiv");

    const quoteDiv = document.createElement("div");
    quoteDiv.classList.add("quote-item");
    quoteDiv.classList.add("quote-border");

    const quoteText = document.createElement("p");
    quoteText.textContent = quote.quote;

    const writerText = document.createElement("p");
    writerText.textContent = quote.writer;

    //Delete icon
    const DelBut = document.createElement("img");
    DelBut.classList.add("quote-Del");
    DelBut.src = "Images/DelB.svg";
    DelBut.width = 25;
    DelBut.height = 25;

    // Append the created elements to their respective parent elements
    QDiv.appendChild(quoteText);
    QDiv.appendChild(writerText);
    FquoteDiv.appendChild(DelBut);
    quoteDiv.appendChild(QDiv);
    quoteDiv.appendChild(FquoteDiv);

    let currentQuote = null;

    favoritesContainer.appendChild(quoteDiv);

    // function that allows us to delete the fav quote once we click the delete icon
    DelBut.addEventListener("click", function () {
      DelBut.classList.toggle("clicked");
      if (DelBut.classList.contains("clicked")) {
        quoteDiv.remove(currentQuote);
      }
    });
  });
}
