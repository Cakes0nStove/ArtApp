


///line to tool has been assigned a function
function LineToTool(){
	this.icon = "assets/lineTo.jpg";// icon for the straight lines
	this.name = "LineTo"; //name of its ability


	//these variables are being declared
	var startMouseX = -1; 
	var startMouseY = -1;
	var drawing = false;

	this.draw = function(){

		if(mouseIsPressed){
			if(startMouseX == -1){// -1 because when you draw a new line it restarts it
				//since it doesnt start from your position so everytime you draw
				// a line, it always calls that function
				startMouseX = mouseX;// mouseX and mouseY, these two
				//are just declaring where the mouse starts
				startMouseY = mouseY;
				drawing = true; // this declares that once the mouse starts; 
				//it is ready to upload its pixels.
				loadPixels();
			}

			else{//this else statement is for whenthe mouse is getting dragged in which
				// the pixels are getting filled and therefore updates and so
				//the line ends up being producsed when the mouse is being released
				updatePixels();
				line(startMouseX, startMouseY, mouseX, mouseY);
			}

		}

		else if(drawing){// so if the mouse is never pressed is keeps the mouse at -1 so that the
			// line of the mouse is never drawn
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
	};


}
