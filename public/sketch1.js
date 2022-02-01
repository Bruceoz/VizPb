let timeNow;
let date;
let earlierMins = 20;
let jocc = [];
let jregion = [];
let occ = [];
let lan = [];
var circles = []; // create an array to hold the DrawCircle objects
let x, y, d, c, s;


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
		let jobOccField = json.jobOccField;
		let jobRegion = json.jobRegion;
		for (let i = 0; i < json.jobOccField.length; i++){
			jocc.push(jobOccField[i]);
		}
		for (let i = 0; i < json.jobRegion.length; i++){
			jregion.push(jobRegion[i]);
		}
		console.log("in getjobs " + jocc, jregion);
		// const jocc = json.jobOccField;
		// const jregion = json.jobRegion;
		return {
			jocc : jocc,
			jregion : jregion
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
		  lan =(results[i].jregion);
		  console.log(occ,lan);

		 
		 
		  chooseCircles(occ,lan);
		  function chooseCircles (occ, lan){
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
						// circles[i] = new DrawCircle(x, y, d, c, s);
					break;
					case '13':
						// fill('#9A6324');
						// ellipse(random(width), random(height/3), lan[i], lan[i]);//lan[i]*2
						x = int(random(width));
						y = random(height/3);
						d = lan[i]*10;
						c = '#9A6324';
						s = random(0.2, 3);
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
						// circles[i] = new DrawCircle(x, y, d, c, s);
					break;
					case '15':
						// fill('#800000');
						// ellipse(random(width), random(height/3), lan[i], lan[i]);//lan[i]*2
						x = int(random(width));
						y = random(height/3);
						d = lan[i]*10;
						c = '#800000';
						s = random(0.2, 3);
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
						// circles[i] = new DrawCircle(x, y, d, c, s);
					break;
					case '17':
						// fill('#808000');
						// ellipse(random(width), random(height/3), lan[i], lan[i]);//lan[i]*2
						x = int(random(width));
						y = random(height/3);
						d = lan[i]*10;
						c = '#808000';
						s = random(0.2, 3);
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
						// circles[i] = new DrawCircle(x, y, d, c, s);
					break;
					case '19':
						// fill('#000075');
						// ellipse(random(width), random(height/3), lan[i], lan[i]);//lan[i]*2
						x = int(random(width));
						y = random(height/3);
						d = lan[i]*10;
						c = '#000075';
						s = random(0.2, 3);
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
						// circles[i] = new DrawCircle(x, y, d, c, s);
					
				}
				//circles[i] = new DrawCircle(x, y, d, c, s);
				
					var newCircle = new DrawCircle(x, y, d, c, s);
					circles.push(newCircle);
				

				}
			
			
			} 
			
		
		}	
		console.log(circles);
		// setInterval(() => {
		// 		chooseCircles(occ);
		// 	}, 2000);
		promises = [];
		jocc = [];
		jregion = [];
		occ = [];
		lan = [];
		console.log("occ: " + occ + "lan: " + lan);
		console.log("promise: " + promises);
	  })
	  .catch(err => console.log(err));

	};


	//backgint(255);

	

	//getjobs();
	Circles();
	
	// setInterval(function () {
	// 	Circles();
	//  }, 60000);
	

	//noLoop()
	// setInterval(function () {
	// 	showCircles();
	//  }, 1000);
	//setInterval(showCircles,1000);


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

function DrawCircle( x, y, d, c, s ) {
	// declare the properties
	this.xPos = x;
	this.yPos = y;
	this.diameter = d;
	this.color = c;
	this.speed = s;
	this.available = true;
  }
  
  DrawCircle.prototype = {
	  constructor: DrawCircle,
	// *** Method: display the circle on the canvas *** 
	display: function() {
	 fill(this.color);
	//   ellipse(this.xPos,this.yPos, this.diameter, this.diameter);
	  
	  // uncomment the lines below and start building your own shape here!
	  //rect(this.xPos,this.yPos, this.diameter/2, this.diameter);
	  	stroke(this.color);
		strokeWeight(this.diameter);
	  	point(this.xPos, this.yPos);
	},
	
	// *** Method: move the circle downwards ***
	move: function() {
		  this.yPos += this.speed;
		  this.xPos = this.xPos + random(-4, 4);
	  // the circle is outside the canvas, retset its position at the top
			if (this.yPos - this.diameter/2 > height) {
				this.yPos = -this.diameter/2;
				
				}
		this.available = true;		
	  }

  }	  
