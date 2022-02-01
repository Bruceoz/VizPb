let timeNow;
let date;
let earlierMins = 1;
let jocc = [];
let jregion = [];
let occ = [];
let lan = [];

// let json;

	// date = new Date();
	// date.setMinutes(date.getMinutes() - earlierMins);
	// var tzoffset = (date).getTimezoneOffset() * 60000; //offset in milliseconds
    // var localISOTime = (new Date(date - tzoffset)).toISOString().slice(0, -1);
	// timeNow =localISOTime
	
	// console.log(timeNow + ' from sketch');
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

	function drawCircles (){	
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
						fill('#e6194B');
						ellipse(random(width-20)/2, random(height-20), lan[i] , lan[i]);//lan[i]*2

					break;
					case '2':
						fill('#3cb44b');
						ellipse(random(width-20), random(height-20), lan[i], lan[i]);//lan[i]*2
					break;
					case '3':
						fill('#ffe119');
						ellipse(random(width-20), random(height-20), lan[i], lan[i]);//lan[i]*2
					break;
					case '4':
						fill('#4363d8');
						ellipse(random(width-20), random(height-20), lan[i], lan[i]);//lan[i]*2
					break;
					case '5':
						fill('#f58231');
						ellipse(random(width-20), random(height-20), lan[i], lan[i]);//lan[i]*2
					break;
					case '6':
						fill('#911eb4');
						ellipse(random(width-20), random(height-20), lan[i], lan[i]);//lan[i]*2
					break;
					case '7':
						fill('#42d4f4');
						ellipse(random(width-20), random(height-20), lan[i], lan[i]);//lan[i]*2
					break;
					case '8':
						fill('#f032e6');
						ellipse(random(width-20), random(height-20), lan[i], lan[i]);//lan[i]*2
					break;
					case '9':
						fill('#bfef45');
						ellipse(random(width-20), random(height-20), lan[i], lan[i]);//lan[i]*2
					break;
					case '10':
						fill('#fabed4');
						ellipse(random(width-20), random(height-20), lan[i], lan[i]);//lan[i]*2
					break;
					case '11':
						fill('#469990');
						ellipse(random(width-20), random(height-20), lan[i], lan[i]);//lan[i]*2
					break;
					case '12':
						fill('#dcbeff');
						ellipse(random(width-20), random(height-20), lan[i], lan[i]);//lan[i]*2
					break;
					case '13':
						fill('#9A6324');
						ellipse(random(width-20), random(height-20), lan[i], lan[i]);//lan[i]*2
					break;
					case '14':
						fill('#fffac8');
						ellipse(random(width-20), random(height-20), lan[i], lan[i]);//lan[i]*2
					break;
					case '15':
						fill('#800000');
						ellipse(random(width-20), random(height-20), lan[i], lan[i]);//lan[i]*2
					break;
					case '16':
						fill('#aaffc3');
						ellipse(random(width-20), random(height-20), lan[i], lan[i]);//lan[i]*2
					break;
					case '17':
						fill('#808000');
						ellipse(random(width-20), random(height-20), lan[i], lan[i]);//lan[i]*2
					break;
					case '18':
						fill('#ffd8b1');
						ellipse(random(width-20), random(height-20), lan[i], lan[i]);//lan[i]*2
					break;
					case '19':
						fill('#000075');
						ellipse(random(width-20), random(height-20), lan[i], lan[i]);//lan[i]*2
					break;
					case '20':
						fill('#a9a9a9');
						ellipse(random(width-20), random(height-20), lan[i], lan[i]);//lan[i]*2
					break;
					case '21':
						fill('#515abe');
						ellipse(random(width-20), random(height-20), lan[i], lan[i]);//lan[i]*2

				}
				
				}
			
			} 
			
		
		}
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



	
	

function setup() 
{


	createCanvas(800, 600);
	background(255);

	

	//getjobs();

	
	setInterval(function () {
		drawCircles();
	}, 60000);
	
	
	noLoop()
	
	
}

function draw()
{


}
