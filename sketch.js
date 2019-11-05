let osc
let env
let bark
let noise
let noise_env
let reverb
let bandpass

let DrumSticks1

let buttononp1 = false
let buttononp2 = false
let buttononp3 = false
let buttononp4 = false

let buttononr1 = false
let buttononr2 = false
let buttononr3 = false
let buttononr4 = false

let buttonony1 = false
let buttonony2 = false
let buttonony3 = false
let buttonony4 = false

let buttononb1 = false
let buttononb2 = false
let buttononb3 = false
let buttononb4 = false

let buttonong1 = false
let buttonong2 = false
let buttonong3 = false
let buttonong4 = false

let buttonono1 = false
let buttonono2 = false
let buttonono3 = false
let buttonono4 = false

let frequency = 50
let circle_radius = 0
let circle_x = 0
let circle_y = 0

function preload() {
DrumSticks1 = loadSound('DrumSticks1.mp3')
}

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
    noise.amp(noise_env)
    noise.disconnect()

    reverb = new p5.Reverb()
    reverb.disconnect()
    DrumSticks1.disconnect()
    // bark.disconnect()
    // reverb.process(bark, 3, 2)
    // bark.play()

    bandpass = new p5.BandPass()

    noise.disconnect()
    noise.connect(bandpass)
}


function draw() {
	// if (keyIsDown(UP_ARROW)) {
	// 	osc.disconnect()
	// 	reverb.connect()
	// 	reverb.process(osc, 3, 2)

	// } else {
	// 	osc.connect()
	// 	reverb.disconnect()
	// }

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
    if (buttononp1 == true) {
        fill(165, 149, 177)
    } else {
        fill(191, 68, 255)
    }
    rect(10, 10, 30, 30)


    pop()

//2nd purple button
 push()
    noStroke()
    if (buttononp2 == true) {
        fill(221, 175, 254)
    } else {
        fill(94, 5, 138)
    }
    rect(50, 50, 30, 30)


    pop()

// 3rd purple button 
push()
    noStroke()
    if (buttononp3 == true) {
        fill(123, 85, 151)
    } else {
        fill(80, 68, 86)
    }
    rect(90, 90, 30, 30)


    pop()

// 4th purple button
push()
    noStroke()
    if (buttononp4 == true) {
        fill(228, 187, 251)
    } else {
        fill(191, 68, 255)
    }
    rect(130, 130, 30, 30)


    pop()

// 1st red button 
    push()
noStroke()
    if (buttononr1 == true) {
        fill(162, 92, 78)
    } else {
        fill(255, 0, 0)
    }
    rect(10, 220, 30, 30)


    pop()

 // 2nd red button
    push()
noStroke()
    if (buttononr2 == true) {
        fill(247, 124, 124)
    } else {
        fill(108, 7, 7)
    }
    rect(10, 260, 30, 30)


    pop()

 // 3rd red button
    push()
noStroke()
    if (buttononr3 == true) {
        fill(134, 25, 3)
    } else {
        fill(255, 50, 50)
    }
    rect(10, 300, 30, 30)


    pop()

  // 4th red button
    push()
noStroke()
    if (buttononr4 == true) {
        fill(151, 98, 87)
    } else {
        fill(140, 55, 55)
    }
    rect(10, 340, 30, 30)


    pop()

// 1st yellow button 
   push()
noStroke()
    if (buttonony1 == true) {
        fill(255, 255, 0)
    } else {
        fill(252, 226, 3)
    }
    rect(300, 200, 30, 30)


    pop()

// 2nd yellow button

   push()
noStroke()
    if (buttonony2 == true) {
        fill(223, 216, 97)
    } else {
        fill(191, 179, 2)
    }
    rect(340, 200, 30, 30)


    pop()

 // 3rd yellow button

   push()
noStroke()
    if (buttonony3 == true) {
        fill(192, 184, 82)
    } else {
        fill(253, 234, 3)
    }
    rect(380, 200, 30, 30)


    pop()

// 4th yellow button

   push()
noStroke()
    if (buttonony4 == true) {
        fill(252, 226, 3)
    } else {
        fill(251, 253, 130)
    }
    rect(420, 200, 30, 30)


    pop()
// 1st blue button

   push()
noStroke()
    if (buttononb1 == true) {
        fill(0, 0, 255)
    } else {
        fill(208, 218, 247)
    }
    rect(300, 500, 30, 30)


    pop()

// 2nd blue button

   push()
noStroke()
    if (buttononb2 == true) {
        fill(20, 31, 102)
    } else {
        fill(102, 113, 183)
    }
    rect(260, 460, 30, 30)


    pop()

// 3rd blue button

   push()
noStroke()
    if (buttononb3 == true) {
        fill(67, 89, 150)
    } else {
        fill(72, 44, 250)
    }
    rect(220, 420, 30, 30)


    pop()

// 4th blue button

   push()
noStroke()
    if (buttononb4 == true) {
        fill(131, 162, 250)
    } else {
        fill(67, 89, 150)
    }
    rect(180, 380, 30, 30)

// 1st green button

   push()
noStroke()
    if (buttonong1 == true) {
        fill(154, 252, 125)
    } else {
        fill(131, 156, 124)
    }
    rect(670, 10, 30, 30)


    pop()
// 2nd green button

   push()
noStroke()
    if (buttonong2 == true) {
        fill(152, 252, 125)
    } else {
        fill(26, 103, 11)
    }
    rect(630, 10, 30, 30)


    pop()

// 3rd green button

   push()
noStroke()
    if (buttonong3 == true) {
        fill(152, 252, 125)
    } else {
        fill(32, 262, 7)
    }
    rect(590, 10, 30, 30)


    pop()

// 4th green button

   push()
noStroke()
    if (buttonong4 == true) {
        fill(96, 119, 92)
    } else {
        fill(26, 103, 11)
    }
    rect(550, 10, 30, 30)


    pop()

// 1st orange button

   push()
noStroke()
    if (buttonono1 == true) {
        fill(225, 152, 107)
    } else {
        fill(255, 97, 1)    }
    rect(570, 400, 30, 30)


    pop()

// 2nd orange button

   push()
noStroke()
    if (buttonono2 == true) {
        fill(254, 139, 1)
    } else {
        fill(223, 184, 137)
    }
    rect(570, 440, 30, 30)


    pop()

// 3rd orange button

   push()
noStroke()
    if (buttonono3 == true) {
        fill(219, 137, 79)
    } else {
        fill(252, 197, 117)
    }
    rect(570, 480, 30, 30)


    pop()

// 4th orange button

   push()
noStroke()
    if (buttonono4 == true) {
        fill(193, 131, 43)
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
    noise.start()
    noise_env.triggerAttack()

    let reverb_time = map(mouseY, 0, height, .1, 3)
    reverb.process(DrumSticks1, reverb_time, 2)
    DrumSticks1.play


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

print(int(mouseX), int(mouseY))

    // first purple button
    if (mouseX > 10 && mouseX < 40 && mouseY > 10 && mouseY < 40) {

    	if (buttononp1 == true) {
    		buttononp1 = false

} else { 
buttononp1 = true
}

        print('sine mode')
            osc.setType('sine')
            osc.freq(500)
   
  		 }
// 2nd purple button 
    if (mouseX > 50 && mouseX < 80 && mouseY > 50 && mouseY < 80) {

    	    	if (buttononp2 == true) {
    		buttononp2 = false

} else { 
buttononp2 = true
}
    	    print('sine mode')
            osc.setType('sine')
            osc.freq(1000)
   
        }
// third purple button 
    if (mouseX > 90 && mouseX < 120 && mouseY > 90 && mouseY < 120) { 
    	if (buttononp3 == true) {
    		buttononp3 = false

} else { 
buttononp3 = true
}
    	    print('sine mode')
            osc.setType('sine')
            osc.freq(1500)
   
        }

// fourth purple button 
    if (mouseX > 130 && mouseX < 160 && mouseY > 130 && mouseY < 160) {

    	    	if (buttononp4 == true) {
    		buttononp4 = false

} else { 
buttononp4 = true
}
    	    print('sine mode')
            osc.setType('sine')
            osc.freq(2000)
   
        }

// first red button
    if (mouseX > 11 && mouseX < 39 && mouseY > 221 && mouseY < 262) {

    	if (buttononr1 == true) {
    		buttononr1 = false

} else { 
buttononr1 = true
}

        print('triangle mode')
            osc.setType('triangle')
            osc.freq(500)
        }
// second red button
    if (mouseX > 10 && mouseX < 39 && mouseY > 260 && mouseY < 289) {

    	if (buttononr2 == true) {
    		buttononr2 = false

} else { 
buttononr2 = true
}

        print('triangle mode')
            osc.setType('triangle')
            osc.freq(1000)
        }
// third red button
    if (mouseX > 10 && mouseX < 40 && mouseY > 300 && mouseY < 330) {

    	if (buttononr3 == true) {
    		buttononr3 = false

} else { 
buttononr3 = true
}

        print('triangle mode')
            osc.setType('triangle')
            osc.freq(1500)
        }
// fourth red button
    if (mouseX > 10 && mouseX < 40 && mouseY > 340 && mouseY < 370) {

    	if (buttononr4 == true) {
    		buttononr4 = false

} else { 
buttononr4 = true
}

        print('triangle mode')
            osc.setType('triangle')
            osc.freq(2000)
        }
// 1st yellow button
    if (mouseX > 300 && mouseX < 330 && mouseY > 200 && mouseY < 230) {

    	if (buttonony1 == true) {
    		buttonony1 = false

} else { 
buttonony1 = true
}

        print('sawtooth mode')
            osc.setType('sawtooth')
            osc.freq(500)
        }

// 2nd yellow button
    if (mouseX > 340 && mouseX < 370 && mouseY > 200 && mouseY < 230) {

    	if (buttonony2 == true) {
    		buttonony2 = false

} else { 
buttonony2 = true
}

        print('sawtooth mode')
            osc.setType('sawtooth')
            osc.freq(1000)
        }
// 3rd yellow button
    if (mouseX > 380 && mouseX < 410 && mouseY > 200 && mouseY < 230) {

    	if (buttonony3 == true) {
    		buttonony3 = false

} else { 
buttonony3 = true
}

        print('sawtooth mode')
            osc.setType('sawtooth')
            osc.freq(1500)
        }
// 4th yellow button
    if (mouseX > 420 && mouseX < 450 && mouseY > 200 && mouseY < 230) {

    	if (buttonony4 == true) {
    		buttonony4 = false

} else { 
buttonony4 = true
}

        print('sawtooth mode')
            osc.setType('sawtooth')
            osc.freq(2000)
        }
// 1st blue button
    if (mouseX > 300 && mouseX < 330 && mouseY > 500 && mouseY < 530) {

    	if (buttononb1 == true) {
    		buttononb1 = false

} else { 
buttononb1 = true
}

        print('square mode')
            osc.setType('square')
            osc.freq(500)
        }
// 2nd blue button
    if (mouseX > 260 && mouseX < 290 && mouseY > 460 && mouseY < 490) {

    	if (buttononb2 == true) {
    		buttononb2 = false

} else { 
buttononb2 = true
}

        print('square mode')
            osc.setType('square')
            osc.freq(1000)
        }
// 3rd blue button
    if (mouseX > 220 && mouseX < 250 && mouseY > 420 && mouseY < 450) {

    	if (buttononb3 == true) {
    		buttononb3 = false

} else { 
buttononb3 = true
}

        print('square mode')
            osc.setType('square')
            osc.freq(1500)
        }
// 4th blue button
    if (mouseX > 180 && mouseX < 210 && mouseY > 380 && mouseY < 410) {

    	if (buttononb4 == true) {
    		buttononb4 = false

} else { 
buttononb4 = true
}

        print('square mode')
            osc.setType('square')
            osc.freq(2000)
        }
// 1st green button
    if (mouseX > 670 && mouseX < 700 && mouseY > 11 && mouseY < 41) {
    	    // print('DrumSticks1 mode')
         //    DrumSticks1.play()
         //    osc.freq(0)
    	if (buttonong1 == true) {
    		buttonong1 = false

} else { 
buttonong1 = true
}


        print('square mode')
            osc.setType('square')
            osc.freq(500)
            osc.amp(1)
           
        }
// 2ND green button
    if (mouseX > 630 && mouseX < 660 && mouseY > 11 && mouseY < 41) {
    	    // print('DrumSticks1 mode')
         //    DrumSticks1.play()
         //    osc.freq(0)
    	if (buttonong2 == true) {
    		buttonong2 = false
    		osc.amp(.9)

} else { 
buttonong2 = true
}

        print('square mode')
            osc.setType('square')
            osc.freq(1000)
            osc.amp(.8)
        }
// 3RD green button
    if (mouseX > 590 && mouseX < 620 && mouseY > 11 && mouseY < 41) {
    	    // print('DrumSticks1 mode')
         //    DrumSticks1.play()
         //    osc.freq(0)
    	if (buttonong3 == true) {
    		buttonong3 = false

} else { 
buttonong3 = true
}

        print('square mode')
            osc.setType('square')
            osc.freq(1500)
            osc.amp(.7)
        }
// 4th green button
    if (mouseX > 550 && mouseX < 580 && mouseY > 11 && mouseY < 41) {
    	    // print('DrumSticks1 mode')
         //    DrumSticks1.play()
         //    osc.freq(0)
    	if (buttonong4 == true) {
    		buttonong4 = false

} else { 
buttonong4 = true
}

        print('square mode')
            osc.setType('square')
            osc.freq(2000)
            osc.amp(.6)
        }
// 1st orange button
    if (mouseX > 570 && mouseX < 600 && mouseY > 400 && mouseY < 430) {

    	if (buttonono1 == true) {
    		buttonono1 = false

} else { 
buttonono1 = true
}

        print('square mode')
            osc.setType('square')
            osc.freq(500)
            osc.amp(.1)
        }
// 2nd orange button
    if (mouseX > 570 && mouseX < 600 && mouseY > 440 && mouseY < 470) {

    	if (buttonono2 == true) {
    		buttonono2 = false

} else { 
buttonono2 = true
}

        print('square mode')
            osc.setType('square')
            osc.freq(1000)
            osc.amp(.2)
        }
// 3rd orange button
    if (mouseX > 570 && mouseX < 600 && mouseY > 480 && mouseY < 510) {

    	if (buttonono3 == true) {
    		buttonono3 = false

} else { 
buttonono3 = true
}

        print('square mode')
            osc.setType('square')
            osc.freq(1500)
            osc.amp(.3)
        }
// 4th orange button
    if (mouseX > 570 && mouseX < 600 && mouseY > 520 && mouseY < 550) {

    	if (buttonono4 == true) {
    		buttonono4 = false

} else { 
buttonono4 = true
}

        print('square mode')
            osc.setType('square')
            osc.freq(2000)
            osc.amp(.4)
        }



}


function keyPressed() {

    if (keyIsDown(UP_ARROW)) {
        print('reverb on')
        osc.disconnect()
        reverb.connect()
        reverb.process(osc, 5, 10)
    }
  if (keyIsDown(DOWN_ARROW)) {
  		noise.connect()
        print('BandPass on')
        // noise.disconnect()
        // reverb.connect()
        // reverb.process(noise, 5, 10)
    }
}

function keyReleased() {
	noise.disconnect()
    print('reverb off')
    reverb.disconnect()
    osc.connect()

}

// 	If (key == 'k') {
// 		bark.play()

// 	}




// }