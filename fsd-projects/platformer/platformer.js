$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(400, 650, 200, 20, "green");
    createPlatform(400, 0, 5, 155, "red");
    createPlatform(700, 575, 200, 20,"green");
    createPlatform(400, 300, 5, 100, "red");
    createPlatform(400, 300, 500, 10, "green");
    createPlatform(1100, 575, 200, 20,"green");
    createPlatform(1350, 450, 200, 100,"blue");
    createPlatform(100, 300, 100, 10,"blue");
    createPlatform(950, 650, 100, 100,"blue");
    createPlatform(1000, 400, 200, 10, "green", 800, 1100, 1);

    // TODO 3 - Create Collectables
    createCollectable("database", 125, 255, 0.5, 0.7);
    createCollectable("database", 980, 600, 0.7, 0.7);
    createCollectable("database", 1360, 400, 0.6, 0.8);

    
    // TODO 4 - Create Cannons
    createCannon("right", 690, 1200);
    createCannon("bottom", 200, 1200);
    createCannon("left", 190, 1700);
    createCannon("bottom", 1270, 1750)

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
