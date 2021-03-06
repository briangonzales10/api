
const form = document.getElementById("searchForm")
form.addEventListener("submit", getGif)


function getGif(evt) {
    evt.preventDefault();

    const API = "https://api.giphy.com/v1/gifs/search?api_key=DuM5deN971gS5WhyqEDc8RJNX4OdB1bJ&q="
    const searchTerm = form.searchTerm.value;
    const searchURL = `${API}${searchTerm}`

    fetch(searchURL)
        .then((response) => response.json())
        .then((gifs) => displayGifs(gifs.data));
    form.searchTerm.value = "";
}

function displayGifs(mygifs) {
    
    document.getElementById("gifcont").innerHTML = "";

    for (let gif of mygifs) {
        const gifTitle = gif.title;
        const gifURL = gif.images.downsized_small.mp4;
    
        
        const box = document.createElement("div")
        box.setAttribute("class", "gifBox")
        box.innerHTML = `<p>${gifTitle}</p>
                        <video src="${gifURL}" alt="${gifTitle}" />
        `;

        document.getElementById("gifcont").appendChild(box);
        
    }
}
