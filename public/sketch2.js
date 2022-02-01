let timeNow;
let date;
let earlierMins = 1;
let jocc = [];
let jregion = [];
let jtext = [];
let occ = [];
let lan = [];
let occtext = [];
var circles = []; // create an array to hold the DrawCircle objects
let x, y, d, c, s, t;


function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();

	async function getjobs () {
		date = new Date();
		date.setMinutes(date.getMinutes() - earlierMins);
		var tzoffset = (date).getTimezoneOffset() * 60000; //offset in milliseconds
		var localISOTime = (new Date(date - tzoffset)).toISOString().slice(0, -1);
		timeNow =localISOTime
		
		console.log(timeNow + ' from sketch 2');
	
		
		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
				},
			body: JSON.stringify({
			"timeNow" : timeNow
			 }) 
		
			};
		const response = await fetch('/jobs',options);
		const json = await response.json();
		console.log(json);
		let jobOccField = json.jobOccField;
		let jobRegion = json.jobRegion;
		let occupationLabel = json.occupationLabel;
		for (let i = 0; i < json.jobOccField.length; i++){
			jocc.push(jobOccField[i]);
		}
		for (let i = 0; i < json.jobRegion.length; i++){
			jregion.push(jobRegion[i]);
		}
		for (let i = 0; i < json.occupationLabel.length; i++){
			jtext.push(occupationLabel[i]);
		}
		console.log( jocc, jregion, jtext);
		// const jocc = json.jobOccField;
		// const jregion = json.jobRegion;
		return {
			jocc : jocc,
			jregion : jregion,
			jtext : jtext
		  };			
		};

	function Circles (){	
	let promises = [];
	for (let i = 0; i < 1; i++) {
	  promises.push(getjobs());
	}
	Promise.all(promises)
	  .then(results => {
		for (let i = 0; i < results.length; i++) {
		  occ = (results[i].jocc);
		  lan =( results[i].jregion);
		  occtext = (results[i].jtext);
		  console.log(occ,lan,occtext);

		 
		 
		  chooseCircles(occ,lan, occtext);
		  function chooseCircles (occ, lan, occtext){
		  for (let i = 0; i < occ.length; i++) {
			//stroke(255);
				switch (occ[i]) {
					case '1':
						// fill('#e6194B');
						// ellipse(random(width)/2, random(height/3), lan[i] , lan[i]);//lan[i]*2
						x = int(random(width));
						y = random(height/3);
						d = lan[i]*10;
						c = '#e6194B';
						s = random(0.2, 3);
						t = occtext[i];
						console.log(t);
						// circles[i] = new DrawCircle(x, y, d, c, s);
					break;
					case '2':
						// fill('#3cb44b');
						// ellipse(random(width), random(height/3), lan[i], lan[i]);//lan[i]*2
						x = int(random(width));
						y = random(height/3);
						d = lan[i]*10;
						c = '#3cb44b';
						s = random(0.2, 3);
						t = occtext[i];
						// circles[i] = new DrawCircle(x, y, d, c, s);
					break;
					case '3':
						// fill('#ffe119');
						// ellipse(random(width), random(height/3), lan[i], lan[i]);//lan[i]*2
						x = int(random(width));
						y = random(height/3);
						d = lan[i]*10;
						c = '#ffe119';
						s = random(0.2, 3);
						t = occtext[i];
						// circles[i] = new DrawCircle(x, y, d, c, s);
					break;
					case '4':
						// fill('#4363d8');
						// ellipse(random(width), random(height/3), lan[i], lan[i]);//lan[i]*2
						x = int(random(width));
						y = random(height/3);
						d = lan[i]*10;
						c = '#4363d8';
						s = random(0.2, 3);
						t = occtext[i];
						// circles[i] = new DrawCircle(x, y, d, c, s);
					break;
					case '5':
						// fill('#f58231');
						// ellipse(random(width), random(height/3), lan[i], lan[i]);//lan[i]*2
						x = int(random(width));
						y = random(height/3);
						d = lan[i]*10;
						c = '#f58231';
						s = random(0.2, 3);
						t = occtext[i];
						// circles[i] = new DrawCircle(x, y, d, c, s);
					break;
					case '6':
						// fill('#911eb4');
						// ellipse(random(width), random(height/3), lan[i], lan[i]);//lan[i]*2
						x = int(random(width));
						y = random(height/3);
						d = lan[i]*10;
						c = '#911eb4';
						s = random(0.2, 3);
						t = occtext[i];
						// circles[i] = new DrawCircle(x, y, d, c, s);
					break;
					case '7':
						// fill('#42d4f4');
						// ellipse(random(width), random(height/3), lan[i], lan[i]);//lan[i]*2
						x = int(random(width));
						y = random(height/3);
						d = lan[i]*10;
						c = '#42d4f4';
						s = random(0.2, 3);
						t = occtext[i];
						// circles[i] = new DrawCircle(x, y, d, c, s);
					break;
					case '8':
						// fill('#f032e6');
						// ellipse(random(width), random(height/3), lan[i], lan[i]);//lan[i]*2
						x = int(random(width));
						y = random(height/3);
						d = lan[i]*10;
						c = '#f032e6';
						s = random(0.2, 3);
						t = occtext[i];
						// circles[i] = new DrawCircle(x, y, d, c, s);
					break;
					case '9':
						// fill('#bfef45');
						// ellipse(random(width), random(height/3), lan[i], lan[i]);//lan[i]*2
						x = int(random(width));
						y = random(height/3);
						d = lan[i]*10;
						c = '#bfef45';
						s = random(0.2, 3);
						t = occtext[i];
						// circles[i] = new DrawCircle(x, y, d, c, s);
					break;
					case '10':
						// fill('#fabed4');
						// ellipse(random(width), random(height/3), lan[i], lan[i]);//lan[i]*2
						x = int(random(width));
						y = random(height/3);
						d = lan[i]*10;
						c = '#fabed4';
						s = random(0.2, 3);
						t = occtext[i];
						// circles[i] = new DrawCircle(x, y, d, c, s);
					break;
					case '11':
						// fill('#469990');
						// ellipse(random(width), random(height/3), lan[i], lan[i]);//lan[i]*2
						x = int(random(width));
						y = random(height/3);
						d = lan[i]*10;
						c = '#469990';
						s = random(0.2, 3);
						t = occtext[i];
						// circles[i] = new DrawCircle(x, y, d, c, s);
					break;
					case '12':
						// fill('#dcbeff');
						// ellipse(random(width), random(height/3), lan[i], lan[i]);//lan[i]*2
						x = int(random(width));
						y = random(height/3);
						d = lan[i]*10;
						c = '#dcbeff';
						s = random(0.2, 3);
						t = occtext[i];
						// circles[i] = new DrawCircle(x, y, d, c, s);
					break;
					case '13':
						// fill('#9A6324');
						// ellipse(random(width), random(height/3), lan[i], lan[i]);//lan[i]*2
						x = int(random(width));
						y = random(height/3);
						d = lan[i]*10;
						c = '#e8b274';
						s = random(0.2, 3);
						t = occtext[i];
						// circles[i] = new DrawCircle(x, y, d, c, s);
					break;
					case '14':
						// fill('#fffac8');
						// ellipse(random(width), random(height/3), lan[i], lan[i]);//lan[i]*2
						x = int(random(width));
						y = random(height/3);
						d = lan[i]*10;
						c = '#fffac8';
						s = random(0.2, 3);
						t = occtext[i];
						// circles[i] = new DrawCircle(x, y, d, c, s);
					break;
					case '15':
						// fill('#800000');
						// ellipse(random(width), random(height/3), lan[i], lan[i]);//lan[i]*2
						x = int(random(width));
						y = random(height/3);
						d = lan[i]*10;
						c = '#bf8884';
						s = random(0.2, 3);
						t = occtext[i];
						// circles[i] = new DrawCircle(x, y, d, c, s);
					break;
					case '16':
						// fill('#aaffc3');
						// ellipse(random(width), random(height/3), lan[i], lan[i]);//lan[i]*2
						x = int(random(width));
						y = random(height/3);
						d = lan[i]*10;
						c = '#aaffc3';
						s = random(0.2, 3);
						t = occtext[i];
						// circles[i] = new DrawCircle(x, y, d, c, s);
					break;
					case '17':
						// fill('#808000');
						// ellipse(random(width), random(height/3), lan[i], lan[i]);//lan[i]*2
						x = int(random(width));
						y = random(height/3);
						d = lan[i]*10;
						c = '#b5b526';
						s = random(0.2, 3);
						t = occtext[i];
						// circles[i] = new DrawCircle(x, y, d, c, s);
					break;
					case '18':
						// fill('#ffd8b1');
						// ellipse(random(width), random(height/3), lan[i], lan[i]);//lan[i]*2
						x = int(random(width));
						y = random(height/3);
						d = lan[i]*10;
						c = '#ffd8b1';
						s = random(0.2, 3);
						t = occtext[i];
						// circles[i] = new DrawCircle(x, y, d, c, s);
					break;
					case '19':
						// fill('#000075');
						// ellipse(random(width), random(height/3), lan[i], lan[i]);//lan[i]*2
						x = int(random(width));
						y = random(height/3);
						d = lan[i]*10;
						c = '#8484bd';
						s = random(0.2, 3);
						t = occtext[i];
						// circles[i] = new DrawCircle(x, y, d, c, s);
					break;
					case '20':
						// fill('#a9a9a9');
						// ellipse(random(width), random(height/3), lan[i], lan[i]);//lan[i]*2
						x = int(random(width));
						y = random(height/3);
						d = lan[i]*10;
						c = '#a9a9a9';
						s = random(0.2, 3);
						t = occtext[i];
						// circles[i] = new DrawCircle(x, y, d, c, s);
					break;
					case '21':
						// fill('#515abe');
						// ellipse(random(width), random(height/3), lan[i], lan[i]);//lan[i]*2
						x = int(random(width));
						y = random(height/3);
						d = lan[i]*10;
						c = '#515abe';
						s = random(0.2, 3);
						t = occtext[i];
						
						// circles[i] = new DrawCircle(x, y, d, c, s);
					
				}
				//circles[i] = new DrawCircle(x, y, d, c, s);
			console.log(s,c,t);
					var newCircle = new DrawCircle( s, c, t);
					circles.push(newCircle);
				

				}
				
			
			} 
			
		
		}
		//console.log(occtext);	
		console.log(circles);
		// setInterval(() => {
		// 		chooseCircles(occ);
		// 	}, 2000);
		promises = [];
		jocc = [];
		jregion = [];
		occ = [];
		lan = [];
		jtext = [];
		occtext = [];
		//console.log("occ: " + occ + "lan: " + lan + "text: " + occtext);
		//console.log("promise: " + promises);
	  })
	  .catch(err => console.log(err));

	};

	setInterval(function () {
		Circles();
	 }, 60000);

	//Circles();
	setInterval(triggerSend, 500);
	
	


}

function draw() {
	background(220);


	//DrawCircle object
		for (var i = 0; i < circles.length; i++) {
			circles[i].move();
			circles[i].display();
		}	

			
	
			

	
	// keep the number of circles on the canvas under 60
	// if (circles.length > 60) {
	// 	circles.shift();
	// }



}

let other = true;
// function mousePressed(){
//   //interval between hits
// 	triggerSend(); 
// }

function triggerSend() {
	if(other){
    sendTextUp();
    other = false;
  }else{
    other = true;
  }
}
  

function sendTextUp(){
  let availableText = [];
  for (var i = 0; i < circles.length; i++) {
    if(circles[i].available){
      availableText.push(i);
	  
    }
  }
  //console.log(circles.length);
  if(availableText.length > 0){
    let ran = int(random(0, availableText.length));
    circles[availableText[ran]].go();
		if (circles.length > 40) {
			circles.shift();
	}
  }
  console.log(circles.length);
}

// Jitter class
class DrawCircle {
  constructor(s,c,t){

    this.x = random(100, width-200);
    //starting point
    this.y = height;
    this.occtext = t;
    //character size
    this.w = 10 * this.occtext.length ;
    this.h = 50;
    this.speed = s;
	this.col = c;
    this.available = true;
  }

  move() {
    //this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
    if(!this.available){
      this.y -= 2;
      if(this.y < 10){
        this.x = random(100, width-150);
        this.y = height;
        this.available = true;
      }
    }
  }
  display() {
    //x,y,w,h,rounded corner
	fill(this.col);
    rect(this.x, this.y, this.w, this.h, this.y);
	fill(51);
    text(this.occtext, this.x + this.w/5, this.y + this.h/1.5);
  }
  go(){
    this.available = false;   
  }
}
