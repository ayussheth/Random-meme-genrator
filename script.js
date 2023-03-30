const memes = [
    "https://i.imgflip.com/1bgw.jpg",
    "https://i.imgflip.com/1bip.jpg",
    "https://i.imgflip.com/1bhm.jpg",
  ];
  
  const captions = [
    "When you finally get your code to work",
    "When your boss says 'just make it look nice'",
    "When you realize your code has been working in production for 2 years without any issues",
  ];
  function generateMeme() {
    const memeIndex = Math.floor(Math.random() * memes.length);
    const captionIndex = Math.floor(Math.random() * captions.length);
    const meme = memes[memeIndex];
    const caption = captions[captionIndex];
    const img = document.createElement("img");
    img.src = meme;
    img.alt = caption;
    const p = document.createElement("p");
    p.textContent = caption;
    const container = document.getElementById("meme-container");
    container.innerHTML = "";
    container.appendChild(img);
    container.appendChild(p);
  }
  const generateBtn = document.getElementById("generate-btn");
  generateBtn.addEventListener("click", generateMeme);
  