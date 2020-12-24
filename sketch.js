var hr, mn, sc

function preload(){
    
}

function setup(){
   createCanvas (400, 800)
   angleMode(DEGREES)
   
}



function draw(){
background(0)
hr = hour()
mn = minute()
sc = second()

translate(200,200)
rotate(-90)

stroke("red")
noFill()
strokeWeight(8)
var scangle = map(sc, 0, 60, 0, 360)

arc(0,0,300, 300, 0, scangle)


stroke("blue")
noFill()
strokeWeight(8)
var mnangle = map(mn, 0, 60, 0, 360)

arc(0,0,280, 280, 0, mnangle)

stroke("purple")
noFill()
strokeWeight(8)
var hrangle = map(hr, 0, 60, 0, 360)

arc(0,0,260, 260, 0, hrangle)

push()
rotate(scangle)
stroke("cyan")
line(0,0,100,0)
pop()

push()
rotate(mnangle)
stroke("green")
line(0,0,100,0)
pop()

push()
rotate(hrangle)
stroke("orange")
line(0,0,100,0)
pop()

stroke("black")
point(0,0, 20)


 drawSprites()   
}   

