// Create your global variables below:
var tracklist = ["All We Got", "No Problem", "Summer Friends", "D.R.A.M. Sings Special", "Blessings", "Same Drugs", "Mixtape", "Angels", "Juke Jam", "All Night"];
var volLevels = [];
var num_divs_filled = 3
var tracklist_index = 0;
var interval;

function init() {
	console.log("HIT INIT")
	for (let index = 0; index < 6; index++) {
		let element = document.getElementById("vl" + String(index));
		volLevels[index] = element;
	}
	console.log(volLevels)
	fill_divs()
};

function fill_divs() {
	for (let index = 0; index < 6; index++) {
		element = volLevels[index];
		if(index < num_divs_filled){
			element.style.backgroundColor = "#9f5cc4";
		}
		else {
			element.style.backgroundColor = "white";
		}
		
	}
}

function volUp() {
	console.log(num_divs_filled)
	if(num_divs_filled <=5){
		num_divs_filled +=1;
		fill_divs()
	}
}

function volDown() {
	console.log(num_divs_filled)
	if(num_divs_filled >=1){
		num_divs_filled -=1;
		fill_divs()
	}
	// Your code goes here
}

function switchPlay() {
	let b = document.getElementById("playpause")
	if(b.innerHTML.includes("play_arrow")){
		b.innerHTML = '<i class="material-icons">pause</i>';
		interval = setInterval(increment,1000);
	} else {
		b.innerHTML = '<i class ="material-icons">play_arrow</i>';
		clearInterval(interval);
	}
	console.log(b.innerHTML)
	// b.innerHTML
	// Your code goes here
}

function increment(){
	e = document.getElementById("time_selector");
	// console.log(e)
	e.value = String(parseInt(e.value) + 1)
	// console.log(e.innerHTML)
	if(e.value == 180){
		e.value = 0
		nextSong()
	}

	let c = document.getElementById("start")
	c.innerHTML = secondsToMs(e.value)
}

function nextSong() {
	let e = document.getElementById("player-song-name")
	tracklist_index +=1 
	e.innerHTML = tracklist[tracklist_index % tracklist.length]

	t = document.getElementById("time_selector");
	t.value = "0"

	let c = document.getElementById("start")
	c.innerHTML = secondsToMs(t.value)
}

function prevSong() {
	let e = document.getElementById("player-song-name")
	if(tracklist_index == 0){
		tracklist_index = tracklist.length }
	tracklist_index -=1
	e.innerHTML = tracklist[tracklist_index % tracklist.length]

	t = document.getElementById("time_selector");
	t.value = "0"

	let c = document.getElementById("start")
	c.innerHTML = secondsToMs(t.value)
}

function secondsToMs(d) {
    d = Number(d);

    var min = Math.floor(d / 60);
    var sec = Math.floor(d % 60);

    return `0${min}`.slice(-1) + ":" + `00${sec}`.slice(-2);
}

init();