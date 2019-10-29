let osc
let env

let noise
let noise_env

let frequency = 50

let circle_radius = 0
let circle_x = 0
let circle_y = 0


function setup() {

    let canvas = createCanvas(windowWidth, windowHeight)
    canvas.parent("p5")

    // create new oscillator 
    osc = new p5.Oscillator()
    osc.setType("square") // "sine" "square" "sawtooth"
    osc.amp(0)  // set initial amplitude to 0

    // create new envelope
    env = new p5.Envelope()
    env.setADSR(0.2, 0.1, 0.1, 0.5)


    // create new noise maker
    noise = new p5.Noise()
    noise.setType("white") // "brown" "pink"
    noise.amp(0)  // set initial amplitude to 0

    noise_env = new p5.Envelope()
    noise_env.setADSR(0.01, 0.1, 0, 0)

}


function draw() {

    noStroke()

    // map the red value of our background fill to the frequency variable
    fill( map(frequency, 50, 2000, 253, 229) , 225, 225)
    rect(0, 0, width, height)

    // make a circle
    fill(227, 216, 247)
    ellipse(circle_x, circle_y, circle_radius, circle_radius)
    if (circle_radius > 0 && mouseIsPressed == false) {
        circle_radius -= 10
    }

    //first purple button 
    push()
    noStroke()
    if (osc.getType() == 'sine') {
        fill(104, 50, 141)
    } else {
        fill(191, 68, 255)
    }
    rect(10, 10, 30, 30)


    pop()

//2nd purple button
 push()
    noStroke()
    if (osc.getType() == 'sawtooth') {
        fill(91, 77, 99)
    } else {
        fill(94, 5, 138)
    }
    rect(50, 50, 30, 30)


    pop()

// 3rd purple button 
push()
    noStroke()
    if (osc.getType() == 'triangle') {
        fill(70, 1, 105)
    } else {
        fill(80, 68, 86)
    }
    rect(90, 90, 30, 30)


    pop()

// 4th purple button
push()
    noStroke()
    if (osc.getType() == 'square') {
        fill(228, 187, 251)
    } else {
        fill(191, 68, 255)
    }
    rect(130, 130, 30, 30)


    pop()

// 1st red button 
    push()
noStroke()
    if (osc.getType() == 'square') {
        fill(255, 0, 0)
    } else {
        fill(255, 0, 0)
    }
    rect(10, 220, 30, 30)


    pop()

 // 2nd red button
    push()
noStroke()
    if (osc.getType() == 'square') {
        fill(250, 106, 77)
    } else {
        fill(250, 106, 77)
    }
    rect(10, 260, 30, 30)


    pop()

 // 3rd red button
    push()
noStroke()
    if (osc.getType() == 'square') {
        fill(134, 25, 3)
    } else {
        fill(134, 25, 3)
    }
    rect(10, 300, 30, 30)


    pop()

  // 4th red button
    push()
noStroke()
    if (osc.getType() == 'square') {
        fill(151, 98, 87)
    } else {
        fill(151, 98, 87)
    }
    rect(10, 340, 30, 30)


    pop()

// 1st yellow button 
   push()
noStroke()
    if (osc.getType() == 'square') {
        fill(255, 255, 0)
    } else {
        fill(255, 255, 0)
    }
    rect(300, 200, 30, 30)


    pop()

// 2nd yellow button

   push()
noStroke()
    if (osc.getType() == 'square') {
        fill(251, 253, 130)
    } else {
        fill(251, 253, 130)
    }
    rect(340, 200, 30, 30)


    pop()

 // 3rd yellow button

   push()
noStroke()
    if (osc.getType() == 'square') {
        fill(201, 181, 7)
    } else {
        fill(201, 181, 7)
    }
    rect(380, 200, 30, 30)


    pop()

// 4th yellow button

   push()
noStroke()
    if (osc.getType() == 'square') {
        fill(252, 226, 3)
    } else {
        fill(252, 226, 3)
    }
    rect(420, 200, 30, 30)


    pop()
// 1st blue button

   push()
noStroke()
    if (osc.getType() == 'square') {
        fill(0, 0, 255)
    } else {
        fill(251, 253, 130)
    }
    rect(300, 500, 30, 30)


    pop()

// 2nd blue button

   push()
noStroke()
    if (osc.getType() == 'square') {
        fill(208, 218, 247)
    } else {
        fill(208, 218, 247)
    }
    rect(260, 460, 30, 30)


    pop()

// 3rd blue button

   push()
noStroke()
    if (osc.getType() == 'square') {
        fill(67, 89, 150)
    } else {
        fill(67, 89, 150)
    }
    rect(220, 420, 30, 30)


    pop()

// 4th blue button

   push()
noStroke()
    if (osc.getType() == 'square') {
        fill(131, 162, 250)
    } else {
        fill(67, 89, 150)
    }
    rect(180, 380, 30, 30)

// 1st green button

   push()
noStroke()
    if (osc.getType() == 'square') {
        fill(151, 250, 131)
    } else {
        fill(131, 162, 250)
    }
    rect(670, 10, 30, 30)


    pop()
// 2nd green button

   push()
noStroke()
    if (osc.getType() == 'square') {
        fill(32, 262, 7)
    } else {
        fill(32, 262, 7)
    }
    rect(630, 10, 30, 30)


    pop()

// 3rd green button

   push()
noStroke()
    if (osc.getType() == 'square') {
        fill(26, 103, 11)
    } else {
        fill(26, 103, 11)
    }
    rect(590, 10, 30, 30)


    pop()

// 4th green button

   push()
noStroke()
    if (osc.getType() == 'square') {
        fill(96, 119, 92)
    } else {
        fill(96, 119, 92)
    }
    rect(550, 10, 30, 30)


    pop()

// 1st orange button

   push()
noStroke()
    if (osc.getType() == 'square') {
        fill(265, 164, 14)
    } else {
        fill(265, 164, 14)
    }
    rect(570, 400, 30, 30)


    pop()

// 2nd orange button

   push()
noStroke()
    if (osc.getType() == 'square') {
        fill(253, 185, 114)
    } else {
        fill(253, 185, 114)
    }
    rect(570, 440, 30, 30)


    pop()

// 3rd orange button

   push()
noStroke()
    if (osc.getType() == 'square') {
        fill(251, 134, 4)
    } else {
        fill(251, 134, 4)
    }
    rect(570, 480, 30, 30)


    pop()

// 4th orange button

   push()
noStroke()
    if (osc.getType() == 'square') {
        fill(250, 222, 174)
    } else {
        fill(265, 164, 14)
    }
    rect(570, 520, 30, 30)


    pop()
}

function windowResized() {    
    resizeCanvas(windowWidth, windowHeight)
}


function mousePressed() {

    // trigger the osc envelope
    osc.start()
    osc.amp(env)
    env.triggerAttack()

    // trigger the noise envelope
    // noise.start()
    // noise.amp(noise_env)
    // noise_env.triggerAttack()

    // set the circle to the mouse position and increase its radius
    circle_radius = 100
    circle_x = mouseX
    circle_y = mouseY

    mouseDragged()
}

function mouseReleased() {

    // "release" the envelopes
    env.triggerRelease()
    noise_env.triggerRelease()

}

function mouseDragged() {

    // map the mouse position to a frequency variable
    frequency = map(mouseY, 0, height, 2000, 50)
    // osc.freq(frequency) // set the osc to this frequency

    // track the mouse position with circle variables
    circle_x = mouseX
    circle_y = mouseY

    // map pan to mouseX
    let pan = map(mouseX, 0, width, -1, 1)
    osc.pan(pan)

}

function mouseClicked() {

    // first purple button
    if (mouseX > 10 && mouseX < 40 && mouseY > 10 && mouseY < 40) {
        print('sine mode')
            osc.setType('sine')
            osc.freq(500)
   
    }
// 2nd purple button 
    if (mouseX > 50 && mouseX < 80 && mouseY > 50 && mouseY < 80) {
    	    print('sine mode')
            osc.setType('sine')
            osc.freq(1000)
   
        }
// third purple button 
    if (mouseX > 90 && mouseX < 120 && mouseY > 90 && mouseY < 120) {
    	    print('sine mode')
            osc.setType('sine')
            osc.freq(2000)
   
        }

// fourth purple button 
    if (mouseX > 130 && mouseX < 160 && mouseY > 130 && mouseY < 160) {
    	    print('sine mode')
            osc.setType('sine')
            osc.freq(3000)
   
        }

   
        }
