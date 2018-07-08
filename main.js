function countdown() {
	var timmer;
	timmer = setInterval(change_image, 2500);
}

function change_image() {
		
			var myImage = document.querySelector('img');
			var mySrc = myImage.getAttribute('src');

			if (mySrc === 'images/01.jpg') {
				myImage.setAttribute('src', 'images/02.jpg');
			} else if (mySrc === 'images/02.jpg'){
				myImage.setAttribute('src', 'images/03.jpg');
			} else if (mySrc === 'images/03.jpg'){
				myImage.setAttribute('src', 'images/04.jpg');
			} else if (mySrc === 'images/04.jpg'){
			myImage.setAttribute('src', 'images/05.jpg');
			} else {
				myImage.setAttribute('src', 'images/01.jpg');
			}
			
}