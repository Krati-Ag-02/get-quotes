document.getElementById("quoteBtn").addEventListener("click", getQuote);

async function getQuote() {
  try {
    const res = await fetch("https://dummyjson.com/quotes/random");
    const data = await res.json();

    document.getElementById("quote").innerText = `"${data.quote}"`;
    document.getElementById("author").innerText = "- " + data.author;
  } catch (error) {
    document.getElementById("quote").innerText = "Oops! Could not fetch quote.";
    document.getElementById("author").innerText = "";
    console.error("Error fetching quote:", error);
  }
}
