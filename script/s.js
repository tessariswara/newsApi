function ambilBerita() {
  const apiKey = "54830afbf016420594a3d9728b090ea2";
  const endpointUrl = "https://newsapi.org/v2/top-headlines";

  const parametr = {
    country: "us",
    // category: "general",
    // pageSize: 100,
    apiKey: apiKey,
  };

  const queryString = Object.keys(parametr)
    .map((key) => `${key}=${encodeURIComponent(parametr[key])}`)
    .join("&");

  console.log(queryString);

  const url = `${endpointUrl}?${queryString}`;
  console.log(url);

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const berita = data.articles;

      const container = document.querySelector(".wrap");
      berita.forEach((beritaItem) => {
        const judul = beritaItem.title;
        const berita = beritaItem.description;
        const imageUrl = beritaItem.urlToImage;
        const tautanBerita = beritaItem.url;

        const beritaElement = document.createElement("a");
        beritaElement.classList.add("content");
        beritaElement.href = tautanBerita;

        const divText = document.createElement("div");
        divText.classList.add("contentText");

        const divImg = document.createElement("div");
        divImg.classList.add("contentImg");

        const judulElement = document.createElement("h2");
        judulElement.textContent = judul;

        const beritaTextElement = document.createElement("p");
        beritaTextElement.textContent = berita;

        const gambarElement = document.createElement("img");
        gambarElement.src = imageUrl;

        divText.appendChild(judulElement);
        divText.appendChild(beritaTextElement);
        divImg.appendChild(gambarElement);

        beritaElement.appendChild(divText);
        beritaElement.appendChild(divImg);

        container.appendChild(beritaElement);
      });
    })
    .catch((error) => {
      console.error("Terjadi kesalahan:", error);
    });
}
const tampilkanBeritaButton = document.getElementById("tampilkanBeritaButton");
tampilkanBeritaButton.addEventListener("click", ambilBerita);
