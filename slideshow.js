var imagecount=1;
		var total=5;
		
		function slide(x){
		var image= document.getElementById('img');
		imagecount=imagecount+x;
		if(imagecount>total){
		imagecount=1;}
		else if(imagecount<1){
		imagecount=total;}
		image.src="slide"+imagecount+".jpg";}
		
		window.setInterval(function slide(x){
		var image= document.getElementById('img');
		imagecount=imagecount+1;
		if(imagecount>total){
		imagecount=1;}
		else if(imagecount<1){
		imagecount=total;}
		image.src="slide"+imagecount+".jpg";},5000);