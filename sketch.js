//load silhouette image
let img
function preload(){
	img = loadImage('./silhouette.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight); //scale cnavs to window
   
  frameRate(1.5);

}

function draw() {
	blendMode(BLEND);
	background(220);
 	blendMode(DIFFERENCE); //set blending to layer dolls
 	//tint(200, 200, 0);
	// if(height>= img.height/0.8){ //scale to window height or image height, responsively
	// 	drawDolls(img.height/0.8, (height-img.height/0.8)/2, 1);
	// } else {
		drawDolls(height, 0, 1);
	// }


}

//recursive draw dolling function
function drawDolls(dadHeight, y, numDolls){
	let childHeight, ratio, childWith, childY; 
	//if drawing only one doll, draw slightly smaller than parent
	childHeight = dadHeight * 0.8; 

	if(numDolls == 1){  
		//scale properly
		ratio = img.width/img.height; 
		childWidth = childHeight *ratio; 
		childY = y + dadHeight * 0.1; 
		image(img, (width-childWidth)/2, childY, childWidth, childHeight);
		//continue drawing dolls until they get to small
		if(childHeight > 100){ 
			drawDolls(childHeight, childY, ceil(random(5))); 
		}
	//if drawing several dolls, stack them vericaly to hieght of parent
	} else {
		for(var i = 0; i < numDolls; i++){
			childHeight = dadHeight/numDolls; 
			ratio = img.width/img.height; 
			childWidth = childHeight *ratio;
			childY = y + i * childHeight;
			image(img, (width-childWidth)/2, childY, childWidth, childHeight)
			//continue drawing dolls until they get to small
			if(childHeight > 100){
				drawDolls(childHeight, childY, ceil(random(5)));
			}
		}
	}
}