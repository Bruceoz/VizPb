//import { text } from "express";

//const createApplication = require("express/lib/express");

let timeNow;
let date;
let earlierMins = 30;
let earlierHrs = 0;
let jocc = [];
let jregion = [];
let jtext = [];
let municipalitytext = [];
let webUrl = [];
let occ = [];
let lan = [];
let occtext = [];
let platsUrl = [];
var circles = []; // create an array to hold the DrawCircle objects
let x, y, d, c, s, t, n, m, u;
let upSound;
let note1, note2, note3, note4, note5, note6, note7, note8, note9, note10, note11, note12, note13, note14, note15, note16, note17, note18, note19, note20, note21;
let button, button1;
let soundOn = false;
let showText = false;
var statement =[0,0,0];
var jobList = [];
let totalCount = 0;
let count;

//Load the sound files
function preload() {
	note1 = loadSound('notes/Synth/0.mp3');
	note2 = loadSound('notes/Synth/1.mp3');
	note3 = loadSound('notes/Synth/2.mp3');
	note4 = loadSound('notes/Synth/3.mp3');
	note5 = loadSound('notes/Synth/4.mp3');
	note6 = loadSound('notes/Synth/5.mp3');
	note7 = loadSound('notes/007HALLAND.mp3');
	note8 = loadSound('notes/008OREBRO.mp3');
	note9 = loadSound('notes/009SODERMANLAND.mp3');
	note10 = loadSound('notes/010DALARNA.mp3');
	note11 = loadSound('notes/011GAVLEBORG.mp3');
	note12 = loadSound('notes/012VARMLAND.mp3');
	note13 = loadSound('notes/013VASTMANLAND.mp3');
	note14 = loadSound('notes/014VASTERBOTTEN.mp3');
	note15 = loadSound('notes/015NORRBOTTEN.mp3');
	note16 = loadSound('notes/016KALMAR.mp3');
	note17 = loadSound('notes/017VASTERNORRLAND.mp3');
	note18 = loadSound('notes/018KRONOBERG.mp3');
	note19 = loadSound('notes/019BLEKINGE.mp3');
	note20 = loadSound('notes/020JAMTLAND.mp3');
	note21 = loadSound('notes/021GOTLAND.mp3');
	
  }

function setup() {
	var myCanvas = createCanvas(windowWidth, windowHeight);
	myCanvas.parent("canvasContainer");
	noStroke();

	async function getjobs () {
		date = new Date();
		date.setHours(date.getHours() - earlierHrs);
		date.setMinutes(date.getMinutes() - earlierMins);
		var tzoffset = (date).getTimezoneOffset() * 60000; //offset in milliseconds
		console.log(tzoffset);
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
		let municipalityLabel = json.municipalityLabel;
		let webUrl = json.webUrl;
		for (let i = 0; i < json.jobOccField.length; i++){
			jocc.push(jobOccField[i]);
		}
		for (let i = 0; i < json.jobRegion.length; i++){
			jregion.push(jobRegion[i]);
		}
		for (let i = 0; i < json.occupationLabel.length; i++){
			jtext.push(occupationLabel[i]);
		}
		for (let i = 0; i < json.municipalityLabel.length; i++){
			municipalitytext.push(municipalityLabel[i]);
		}
		for (let i = 0; i < json.webUrl.length; i++){
			platsUrl.push(webUrl[i]);
		}
		//console.log( jocc, jregion, jtext);
		// const jocc = json.jobOccField;
		// const jregion = json.jobRegion;
		return {
			jocc : jocc,
			jregion : jregion,
			jtext : jtext,
			municipalitytext : municipalitytext,
			platsUrl : platsUrl
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
		  municipalitytext = (results[i].municipalitytext);
		  platsUrl = (results[i].platsUrl);
		  //console.log(occ,lan,occtext,municipalitytext,platsUrl);

		 
		 
		  chooseCircles(occ,lan, occtext, municipalitytext);
		  function chooseCircles (occ, lan, occtext, municipalitytext){
		  for (let i = 0; i < occ.length; i++) {
			//stroke(255);
				switch (occ[i]) {
					case '1':
						// fill('#e6194B');
						// ellipse(random(width)/2, random(height/3), lan[i] , lan[i]);//lan[i]*2
						x = int(random(width));
						y = random(height/3);
						d =int( lan[i]);
						c = '#e6194B';
						s = random(0.2, 3);
						t = occtext[i];
						n = note1;
						m = municipalitytext[i];
						//console.log(t);
						// circles[i] = new DrawCircle(x, y, d, c, s);
					break;
					case '2':
						// fill('#3cb44b');
						// ellipse(random(width), random(height/3), lan[i], lan[i]);//lan[i]*2
						x = int(random(width));
						y = random(height/3);
						d =int( lan[i]);
						c = '#3cb44b';
						s = random(0.2, 3);
						t = occtext[i];
						n = note2;
						m = municipalitytext[i];
						// circles[i] = new DrawCircle(x, y, d, c, s);
					break;
					case '3':
						// fill('#ffe119');
						// ellipse(random(width), random(height/3), lan[i], lan[i]);//lan[i]*2
						x = int(random(width));
						y = random(height/3);
						d =int( lan[i]);
						c = '#ffe119';
						s = random(0.2, 3);
						t = occtext[i];
						n = note3;
						m = municipalitytext[i];
						// circles[i] = new DrawCircle(x, y, d, c, s);
					break;
					case '4':
						// fill('#4363d8');
						// ellipse(random(width), random(height/3), lan[i], lan[i]);//lan[i]*2
						x = int(random(width));
						y = random(height/3);
						d =int( lan[i]);
						c = '#4363d8';
						s = random(0.2, 3);
						t = occtext[i];
						n = note4;
						m = municipalitytext[i];
						// circles[i] = new DrawCircle(x, y, d, c, s);
					break;
					case '5':
						// fill('#f58231');
						// ellipse(random(width), random(height/3), lan[i], lan[i]);//lan[i]*2
						x = int(random(width));
						y = random(height/3);
						d =int( lan[i]);
						c = '#f58231';
						s = random(0.2, 3);
						t = occtext[i];
						n = note5;
						m = municipalitytext[i];
						// circles[i] = new DrawCircle(x, y, d, c, s);
					break;
					case '6':
						// fill('#911eb4');
						// ellipse(random(width), random(height/3), lan[i], lan[i]);//lan[i]*2
						x = int(random(width));
						y = random(height/3);
						d =int( lan[i]);
						c = '#911eb4';
						s = random(0.2, 3);
						t = occtext[i];
						n = note6;
						m = municipalitytext[i];
						// circles[i] = new DrawCircle(x, y, d, c, s);
					break;
					case '7':
						// fill('#42d4f4');
						// ellipse(random(width), random(height/3), lan[i], lan[i]);//lan[i]*2
						x = int(random(width));
						y = random(height/3);
						d =int( lan[i]);
						c = '#42d4f4';
						s = random(0.2, 3);
						t = occtext[i];
						n = note7;
						m = municipalitytext[i];
						// circles[i] = new DrawCircle(x, y, d, c, s);
					break;
					case '8':
						// fill('#f032e6');
						// ellipse(random(width), random(height/3), lan[i], lan[i]);//lan[i]*2
						x = int(random(width));
						y = random(height/3);
						d =int( lan[i]);
						c = '#f032e6';
						s = random(0.2, 3);
						t = occtext[i];
						n = note8;
						m = municipalitytext[i];
						// circles[i] = new DrawCircle(x, y, d, c, s);
					break;
					case '9':
						// fill('#bfef45');
						// ellipse(random(width), random(height/3), lan[i], lan[i]);//lan[i]*2
						x = int(random(width));
						y = random(height/3);
						d =int( lan[i]);
						c = '#bfef45';
						s = random(0.2, 3);
						t = occtext[i];
						n = note9;
						m = municipalitytext[i];
						// circles[i] = new DrawCircle(x, y, d, c, s);
					break;
					case '10':
						// fill('#fabed4');
						// ellipse(random(width), random(height/3), lan[i], lan[i]);//lan[i]*2
						x = int(random(width));
						y = random(height/3);
						d =int( lan[i]);
						c = '#fabed4';
						s = random(0.2, 3);
						t = occtext[i];
						n = note10;
						m = municipalitytext[i];
						// circles[i] = new DrawCircle(x, y, d, c, s);
					break;
					case '11':
						// fill('#469990');
						// ellipse(random(width), random(height/3), lan[i], lan[i]);//lan[i]*2
						x = int(random(width));
						y = random(height/3);
						d =int( lan[i]);
						c = '#469990';
						s = random(0.2, 3);
						t = occtext[i];
						n = note11;
						m = municipalitytext[i];
						// circles[i] = new DrawCircle(x, y, d, c, s);
					break;
					case '12':
						// fill('#dcbeff');
						// ellipse(random(width), random(height/3), lan[i], lan[i]);//lan[i]*2
						x = int(random(width));
						y = random(height/3);
						d =int( lan[i]);
						c = '#dcbeff';
						s = random(0.2, 3);
						t = occtext[i];
						n = note12;
						m = municipalitytext[i];
						// circles[i] = new DrawCircle(x, y, d, c, s);
					break;
					case '13':
						// fill('#9A6324');
						// ellipse(random(width), random(height/3), lan[i], lan[i]);//lan[i]*2
						x = int(random(width));
						y = random(height/3);
						d =int( lan[i]);
						c = '#e8b274';
						s = random(0.2, 3);
						t = occtext[i];
						n = note13;
						m = municipalitytext[i];
						// circles[i] = new DrawCircle(x, y, d, c, s);
					break;
					case '14':
						// fill('#fffac8');
						// ellipse(random(width), random(height/3), lan[i], lan[i]);//lan[i]*2
						x = int(random(width));
						y = random(height/3);
						d =int( lan[i]);
						c = '#fffac8';
						s = random(0.2, 3);
						t = occtext[i];
						n = note14;
						m = municipalitytext[i];
						// circles[i] = new DrawCircle(x, y, d, c, s);
					break;
					case '15':
						// fill('#800000');
						// ellipse(random(width), random(height/3), lan[i], lan[i]);//lan[i]*2
						x = int(random(width));
						y = random(height/3);
						d =int( lan[i]);
						c = '#bf8884';
						s = random(0.2, 3);
						t = occtext[i];
						n = note15;
						m = municipalitytext[i];
						// circles[i] = new DrawCircle(x, y, d, c, s);
					break;
					case '16':
						// fill('#aaffc3');
						// ellipse(random(width), random(height/3), lan[i], lan[i]);//lan[i]*2
						x = int(random(width));
						y = random(height/3);
						d =int( lan[i]);
						c = '#aaffc3';
						s = random(0.2, 3);
						t = occtext[i];
						n = note16;
						m = municipalitytext[i];
						// circles[i] = new DrawCircle(x, y, d, c, s);
					break;
					case '17':
						// fill('#808000');
						// ellipse(random(width), random(height/3), lan[i], lan[i]);//lan[i]*2
						x = int(random(width));
						y = random(height/3);
						d =int( lan[i]);
						c = '#b5b526';
						s = random(0.2, 3);
						t = occtext[i];
						n = note17;
						m = municipalitytext[i];
						// circles[i] = new DrawCircle(x, y, d, c, s);
					break;
					case '18':
						// fill('#ffd8b1');
						// ellipse(random(width), random(height/3), lan[i], lan[i]);//lan[i]*2
						x = int(random(width));
						y = random(height/3);
						d =int( lan[i]);
						c = '#ffd8b1';
						s = random(0.2, 3);
						t = occtext[i];
						n = note18;
						m = municipalitytext[i];
						// circles[i] = new DrawCircle(x, y, d, c, s);
					break;
					case '19':
						// fill('#000075');
						// ellipse(random(width), random(height/3), lan[i], lan[i]);//lan[i]*2
						x = int(random(width));
						y = random(height/3);
						d =int( lan[i]);
						c = '#8484bd';
						s = random(0.2, 3);
						t = occtext[i];
						n = note19;
						m = municipalitytext[i];
						// circles[i] = new DrawCircle(x, y, d, c, s);
					break;
					case '20':
						// fill('#a9a9a9');
						// ellipse(random(width), random(height/3), lan[i], lan[i]);//lan[i]*2
						x = int(random(width));
						y = random(height/3);
						d =int( lan[i]);
						c = '#a9a9a9';
						s = random(0.2, 3);
						t = occtext[i];
						n = note20;
						m = municipalitytext[i];
						// circles[i] = new DrawCircle(x, y, d, c, s);
					break;
					case '21':
						// fill('#515abe');
						// ellipse(random(width), random(height/3), lan[i], lan[i]);//lan[i]*2
						x = int(random(width));
						y = random(height/3);
						d =int( lan[i]);
						c = '#515abe';
						s = random(0.2, 3);
						t = occtext[i];
						n = note21;
						m = municipalitytext[i];
						// circles[i] = new DrawCircle(x, y, d, c, s);
					
				}
				//circles[i] = new DrawCircle(x, y, d, c, s);
			//console.log(s,c,t,n,d, m);


					var newCircle = new DrawCircle( s, c, t, n, d, m);
					circles.push(newCircle);
					
						
					
					

				}
		
			
			} 
			
		
		}
		for(i=0;i<occtext.length;i++){
						
			//statement[i]="<a href='google.com/"+occtext[i]+"'>"+municipalitytext[i]+"</a><br>";
			
			statement[i]="<a href="+platsUrl[i]+" class=list-group-item list-group-item-action target = _blank"+">"+occtext[i]+" i "+municipalitytext[i]+"</a>"
			jobList.unshift(statement[i]);
			
			//document.getElementById("jobList").innerHTML+=statement[i];
		}
console.log(jobList);
		for(i=0;i<jobList.length;i++){
			//document.getElementById("jobList").innerHTML+=jobList[i];
			document.getElementById("jobList").insertAdjacentHTML("afterbegin",jobList[i]);
		}
		jobList = [];
		//console.log(occtext);	
		// let div = createDiv(occtext.length);
		// div.style('font-size', '16px');
		// div.position(10, 50);
		count = occtext.length;
		totalCount = totalCount + occtext.length;
		document.getElementById("count").innerHTML = "Antal annonser senaste minut: " + count;
		document.getElementById("totCount").innerHTML = "Antal annonser totalt: " + totalCount ;
		
		// let div1= createDiv(count);
		// div1.style('font-size', '16px');
		// div1.position(10, 150);

		//console.log(occtext.length);
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
		municipalitytext = [];
		platsUrl = [];
		//console.log("occ: " + occ + "lan: " + lan + "text: " + occtext);
		//console.log("promise: " + promises);
	  })
	  .catch(err => console.log(err));

	};

getAudioContext().suspend();

	setInterval(function () {
		Circles();
	 }, 60000);
	
	//Circles();
	setInterval(triggerSend, 500);
	
	button = createButton('Play sound');
 	button.position(40, 10);
  	button.mousePressed(toggleSound);
	
	button1 = createButton('Show text');
	button1.position(140, 10);
	button1.mousePressed(toggleText);



//console.log(occtext+ '  ' + municipalitytext);


  

}

function draw() {
	background(220);
	textSize(32);
	fill(50);
	text(circles.length, 40, 250);
	//DrawCircle object
		for (var i = 0; i < circles.length; i++) {
			circles[i].move();
			circles[i].display();
		}	


}



function toggleSound(){
	if (!soundOn) {
		userStartAudio();
		button.html('Pause sound');
		soundOn = true;
	}
	else if (soundOn){
		soundOn = false
		button.html('Play sound');
	}
}

//function to show or hide text
function toggleText(){
	if (!showText){
		button1.html('Hide text');
		showText = true;
	}
	else if (showText){
		button1.html('Show text');
		showText = false;
	}
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
		if (circles.length > 10) {
			circles.shift();
	}
  }
  //console.log(circles.length);
}

// Jitter class
class DrawCircle {
  constructor(s,c,t,n,d,m){

    this.x = random(100, width-200);
    //starting point
    this.y = height;
    this.occtext = t;
	this.muntext = m;
    //character size
    this.w = 10 * (this.occtext.length + this.muntext.length) ;
    this.h = 50;
    this.speed = s;
	this.col = c;
    this.available = true;
	this.upSound = n;
	this.lan = d;

	
  }

  move() {
    //this.x += random(-this.speed, this.speed);
    //this.y += random(-this.speed, this.speed*2);
    if(!this.available){
      this.y -= random(2,5);
      if(this.y < 10){
        this.x = random(100, width-150);
        this.y = height;
        this.available = true;
		if (soundOn){
			this.upSound.play();
		}
		else {
			this.upSound.pause();
		}
		//console.log(this.speed);
      }
    }
  }
  display() {
    //x,y,w,h,rounded corner
	let fillColor = color(this.col);
	fillColor.setAlpha(150 + 128 * sin(millis() / 1000));//150
	fill(fillColor);
	if (this.lan >= 1 && this.lan <= 4) {
		circle(this.x, this.y, this.w / 2, this.h, this.y);
		
		if (showText){
			fill(51);
			textAlign(CENTER);
			textSize(16);
			text(this.occtext + '\n'  + this.muntext, this.x , this.y );//+ this.h/1.5
			//createA('https://arbetsformedlingen.se/platsbanken/annonser/25711380 target=_blank',this.occtext + '\n'  + this.muntext,this.x , this.y )
		}
	  }
	else if (this.lan >= 5 && this.lan <= 13){
		ellipse(this.x, this.y, this.w, this.h, this.y);
			if (showText){
				fill(51);
				textAlign(CENTER);
				textSize(16);
				text(this.occtext + '\n'  + this.muntext, this.x , this.y );//+ this.h/1.5
			}
		//triangle(this.x, this.y, this.w, this.h, this.y,this.w);
	  }
	// else if (this.lan >= 19 && this.lan <= 21){
	// 	//ellipse(this.x, this.y, this.w, this.h, this.y);
	// 	triangle(this.h, this.w, this.h*2, this.w*2, random(width), random(height)); 
	// }
	else {
		rect(this.x, this.y, this.w, this.h);//, this.y
			if (showText){
				fill(51);
				textAlign(CENTER);
				textSize(16);
				text(this.occtext + '\n'  + this.muntext, this.x  + this.w/2, this.y + this.h/2);//+ this.h/1.5
			}
	}

	
  }



  go(){
    this.available = false;  
	 
  }
}
