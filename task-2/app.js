document.addEventListener("DOMContentLoaded", function () {
  var centerImage = document.querySelector(".student2");
  var leftImage = document.querySelector(".student1");
  var rightImage = document.querySelector(".student3");

  var centerDiv = document.querySelector(".center-rectangle");
  var leftDiv = document.querySelector(".leftside-div");
  var rightDiv = document.querySelector(".rightside-div");

  var centerTitle = document.querySelector(".title");
  var centerContent = document.querySelector(".content");

  var prevButton = document.querySelector(".prevbutton");
  var nextButton = document.querySelector(".nextbutton");

  var imageData = [
    {
      image: "static/Student1.png",
      color: "#ffca3a",
      title: "A B",
      content:
        "A B Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, quidem ipsum illo assumenda soluta ipsam quo doloremque nulla, cumque eum aut? Asperiores, eaque molestiae quod sapiente recusandae, accusantium, quas debitis numquam repellat voluptate molestias animi pariatur dolor? Quod nemo possimus repudiandae facilis eaque sequi dolore, distinctio corrupti doloremque consequuntur animi.",
    },
    {
      image: "static/Student2.png",
      color: "#e74c3c",
      title: "C D",
      content:
        "C D Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, quidem ipsum illo assumenda soluta ipsam quo doloremque nulla, cumque eum aut? Asperiores, eaque molestiae quod sapiente recusandae, accusantium, quas debitis numquam repellat voluptate molestias animi pariatur dolor? Quod nemo possimus repudiandae facilis eaque sequi dolore, distinctio corrupti doloremque consequuntur animi.",
    },
    {
      image: "static/Student3.png",
      color: "#1982c4",
      title: "E F",
      content:
        "E F Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, quidem ipsum illo assumenda soluta ipsam quo doloremque nulla, cumque eum aut? Asperiores, eaque molestiae quod sapiente recusandae, accusantium, quas debitis numquam repellat voluptate molestias animi pariatur dolor? Quod nemo possimus repudiandae facilis eaque sequi dolore, distinctio corrupti doloremque consequuntur animi.",
    },
  ];

  var currentIndex = 0;

  function updateImages() {
    leftImage.src =
      imageData[(currentIndex - 1 + imageData.length) % imageData.length].image;
    leftDiv.style.backgroundColor =
      imageData[(currentIndex - 1 + imageData.length) % imageData.length].color;

    centerImage.src = imageData[currentIndex].image;
    centerDiv.style.backgroundColor = imageData[currentIndex].color;
    centerTitle.textContent = imageData[currentIndex].title;
    centerContent.textContent = imageData[currentIndex].content;

    rightImage.src = imageData[(currentIndex + 1) % imageData.length].image;
    rightDiv.style.backgroundColor =
      imageData[(currentIndex + 1) % imageData.length].color;
  }

  nextButton.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % imageData.length;
    updateImages();
  });

  prevButton.addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + imageData.length) % imageData.length;
    updateImages();
  });

  var autoClickInterval = setInterval(function () {
    nextButton.click();
  }, 30000);

  [nextButton, prevButton].forEach(function (button) {
    button.addEventListener("click", function () {
      clearInterval(autoClickInterval);
      autoClickInterval = setInterval(function () {
        nextButton.click();
      }, 30000);
    });
  });

  updateImages();
});
