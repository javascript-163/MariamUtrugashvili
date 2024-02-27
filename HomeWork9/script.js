function processFile() {
  const fileInput = document.getElementById("fileInput");
  const file = fileInput.files[0];
  let fileInfoElement = document.querySelector(".fileInfo");

  if (file) {
      readFileContent(file)
          .then(({ numOfSymbols, numOfWords, longestWord, shortestWord, averageLength, content }) => {
              fileInfoElement.textContent = `Total Symbols: ${numOfSymbols},  
                                          Total Words: ${numOfWords}, 
                                          Longest Word: ${longestWord}, 
                                          Shortest Word: ${shortestWord}, 
                                          Average Length: ${averageLength}.`;
              fileInfoElement.style.display = "block";
              document.getElementById("textInput").innerHTML = content;
          })
          .catch(error => {
              console.error("Error reading file:", error);
          });
  } else {
      alert('Please select a file.');
  }
}

function readFileContent(file) {
  return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.readAsText(file);

      reader.onload = function (event) {
          const content = event.target.result;
          const wordArray = content.split(/\s+/); // Split by whitespace
          const numOfSymbols = content.length;
          const numOfWords = wordArray.length;
          const longestWord = wordArray.reduce((longest, current) => current.length > longest.length ? current : longest, "");
          const shortestWord = wordArray.reduce((shortest, current) => current.length < shortest.length ? current : shortest, "");
          const averageLength = numOfWords > 0 ? (numOfSymbols - numOfWords + 1) / numOfWords : 0;

          resolve({ numOfSymbols, numOfWords, longestWord, shortestWord, averageLength, content });
      };

      reader.onerror = function () {
          reject(new Error("Error reading file."));
      };
  });
}

function loadImage() {
  const imageElement = document.querySelector(".image");
  const fileInput = document.getElementById("imageInput");
  const file = fileInput.files[0];

  if (file && file.type.startsWith("image/")) {
      readAndDisplayImage(imageElement, file);
  } else {
      alert('Please select a valid image file.');
  }
}

function readAndDisplayImage(imageElement, file) {
  const reader = new FileReader();

  reader.readAsDataURL(file);

  reader.onload = function (event) {
      imageElement.src = event.target.result;
      imageElement.style.display = "block";
      imageElement.width = "400";
  };
}

function loadAllMedia() {
  const videoElement = document.querySelector(".video");
  const videoSourceElement = document.querySelector(".videoSource");
  const imageMediaElement = document.querySelector(".imageMedia");
  const textMediaElement = document.querySelector(".textMedia");

  const fileInput = document.getElementById("mediaInput");
  const file = fileInput.files[0];

  if (file) {
      if (file.type.startsWith("image/")) {
          readAndDisplayImage(imageMediaElement, file);
      } else if (file.type === "video/mp4") {
          readAndDisplayVideo(videoElement, videoSourceElement, file);
      } else if (file.type === "text/plain") {
          readAndDisplayText(textMediaElement, file);
      } else {
          alert('Unsupported file type.');
      }
  } else {
      alert('Please select a file.');
  }
}

function readAndDisplayVideo(videoElement, videoSourceElement, file) {
  const reader = new FileReader();

  reader.readAsDataURL(file);

  reader.onload = function (event) {
      const videoSrc = event.target.result;
      videoSourceElement.setAttribute("src", videoSrc);
      videoElement.load();
      videoElement.style.display = "block";
  };
}

function readAndDisplayText(textElement, file) {
  const reader = new FileReader();

  reader.readAsText(file);

  reader.onload = function (event) {
      textElement.textContent = event.target.result;
      textElement.style.display = "block";
  };
}
  
  