function setup() {
    w = 1600;
    h = 900;
    createCanvas(w, h);
    size = 20;
    makeGrid();
    makePlayer()
}

function draw() {


}

function makeGrid() {
    rect(0, 0, w-1, h-1);
    var i = 0;
    while(i <= w/size){
        var x = i*size;
        line(x, 0, x, h);
        i += 1
    }
    var i = 0;
    while(i <= h/size){
        var y = i*size;
        line(0, y, w, y);
        i += 1
    }
}

function makePlayer() {
    fill(random(255), random(255), random(255));
    randx = Math.floor(random(w/size)-1)*size;
    randy = Math.floor(random(h/size)-1)*size;
    rect(randx, randy, size, size)
}