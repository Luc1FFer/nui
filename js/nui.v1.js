/*document.getElementById("username").addEventListener("keyup",  function () {
	var http = new XMLHttpRequest();
	var url = 'http://staff/include/searchvega.php';
	var params = 'lang=eng&search='+this.value;
	http.open('POST', url, true);

	//Send the proper header information along with the request
	http.setRequestHeader('Access-Control-Allow-Origin', url);
	http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=UTF-8');

	http.onreadystatechange = function() {//Call a function when the state changes.
	    if(http.readyState == 4 && http.status == 200) {
	        alert(http.responseText);
	    }
	    console.log("Response:" + http.responseText);
	}
	http.send(params);
}
)*/

function whichAnimationEvent(){
  var t,
      el = document.createElement("fakeelement");

  var animations = {
    "animation"      : "animationend",
    "OAnimation"     : "oAnimationEnd",
    "MozAnimation"   : "animationend",
    "WebkitAnimation": "webkitAnimationEnd"
  }

  for (t in animations){
    if (el.style[t] !== undefined){
      return animations[t];
    }
  }
}

function procceedToPassword() {
	console.log('Procceeeding to paswword...');
	var usernameInput = document.getElementById('input-username'), transitionEvent = whichAnimationEvent();
	var passwordInput = document.getElementById('input-password');
	var procceedToPasswordButton = document.getElementById('button-procceed-to-password');
	var procceedToLoginButton = document.getElementById('button-do-login');

	usernameInput.classList.add('bounceOutLeft');

	// procceedToPasswordButton.classList.add('hidden');
	// procceedToLoginButton.classList.remove('hidden');

	usernameInput.addEventListener(transitionEvent, function(){
		console.log('animation end');
		usernameInput.classList.add('hidden');
		passwordInput.classList.remove('hidden');
		passwordInput.classList.add('bounceInRight');

		
	});

	passwordInput.addEventListener(transitionEvent, function() {
		var loginPanel = document.getElementById('login-panel');
		loginPanel.classList.add('shake');
	});

	// usernameInput.classList.add('hidden');
	
}

function doLogin() {
	console.log('login');
}

