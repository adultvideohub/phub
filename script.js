const API_URL = "https://www.pornhub.com/webmasters/search?category=ebony&thumbsize=medium&api_key=apify_api_iqBm9zjmIGR8zAy9iyeEzxVQh4Nqzw3Nfymg";

// Ambil video dari API Pornhub
fetch(API_URL)
    .then(response => response.json())
    .then(data => {
        const videos = data.videos;
        const videoContainer = document.getElementById("videos");

        videos.forEach(video => {
            let videoElement = document.createElement("div");
            videoElement.classList.add("video-item");

            videoElement.innerHTML = `
                <a href="${video.url}" target="_blank">
                    <img src="${video.thumb}" alt="${video.title}">
                    <p>${video.title}</p>
                </a>
            `;

            videoContainer.appendChild(videoElement);
        });
    })
    .catch(error => console.error("Error fetching data:", error));
