console.log("AutoSkipIntro has loaded successfully!");

setInterval(() => {
  const webplayer = document.getElementById("dv-web-player");

  if (window.getComputedStyle(webplayer, null).display !== "none") {
    console.log("User is watching some shit...");

    const skipElement = document.querySelector(".skipElement");
    if (skipElement) {
      console.log("Skip now!!!!");
      skipElement.click();
    } else {
      console.log("Skip element not found!");
    }

    
    const nextUp = document.querySelector(".nextUpWrapper .nextUp .nextUpCard");
    if (nextUp) {
      console.log("Play Next!!!!");
      nextUp.click();
    } else {
      console.log("Next Element not found");
    }

  } else {
    console.log("User is not watching shit...");
  }
}, 1000);
