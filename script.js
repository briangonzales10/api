
document.getElementById("gifbutton").addEventListener("click", getGif)

function getGif() {
    const URL = "https://api.giphy.com/v1/gifs/search?api_key=DuM5deN971gS5WhyqEDc8RJNX4OdB1bJ&q=homer%20simpson";
    fetch(URL)
        .then((response) => response.json())
        .then((gifs) => displayGifs(gifs.data));

}

function displayGifs(mygifs) {
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