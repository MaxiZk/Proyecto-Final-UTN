document.addEventListener("DOMContentLoaded", () => {
    fetch("data.json")
      .then(response => response.json())
      .then(data => {
        const mediaList = document.getElementById("media-list");
  
        data.movies.forEach(media => {
          const listItem = document.createElement("li");
          listItem.innerHTML = `<strong>Película:</strong> ${media.title} (${media.year})<br>${media.review}`;
          mediaList.appendChild(listItem);
        });
  
        data.series.forEach(media => {
          const listItem = document.createElement("li");
          listItem.innerHTML = `<strong>Serie:</strong> ${media.title} (${media.year})<br>${media.review}`;
          mediaList.appendChild(listItem);
        });
      })
      .catch(error => {
        console.error("Error:", error);
      });
  });