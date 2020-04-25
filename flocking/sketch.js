let flock = [];

let alignSlider, cohesionSlider, separationSlider;

function setup() {
    createCanvas(windowWidth, windowHeight - 28);
    alignSlider = createSlider(0, 2, 1, 0.1);
    cohesionSlider = createSlider(0, 2, 1, 0.1);
    separationSlider = createSlider(0, 2, 1, 0.1);
    createBoids();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    createBoids();
}

function draw() {
    background(51);
    for (let boid of flock) {
        boid.edges();
        boid.flock(flock);
        boid.update();
        boid.show();
    }
}

function createBoids() {
    flock = [];
    let boidCount = floor((100 * width * height) / (640 * 360));
    for (let i = 0; i < min(200, boidCount); i++) {
        flock.push(new Boid());
    }
}
