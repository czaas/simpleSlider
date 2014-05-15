
var img = [ "img/firstcar.gif", "img/secondcar.gif", "img/thirdcar.gif"];
var imgCount = 0;
var showImage = document.getElementById('slideZ');


function slider(){
	if(imgCount >= img.length){
		imgCount=0;
	}
	showImage.src= img[imgCount];
	imgCount++;
}
function slideShow(){
	setInterval(slider, 2000);
}