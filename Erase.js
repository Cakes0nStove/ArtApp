function Eraser(){

    this.icon = "assets/eraser.png";
    this.name = "erase";
    

    this.draw = function(){



        if(mouseIsPressed){

			//check if they previousX and Y are -1. set them to the current
			//mouse X and Y if they are.
			if (previousMouseX == -1){
				previousMouseX = mouseX;
				previousMouseY = mouseY;
			}
			//if we already have values for previousX and Y we can draw a line from 
			//there to the current mouse location
			else{
                strokeWeight(10)
                erase(150,150)
				line(previousMouseX, previousMouseY, mouseX, mouseY);
				previousMouseX = mouseX;
				previousMouseY = mouseY;
                noErase();
			}
        
        
        }
		//if the user has released the mouse we want to set the previousMouse values 
		//back to -1.
		//try and comment out these lines and see what happens!
        else{
			previousMouseX = -1;
			previousMouseY = -1;
		}


    }

}
