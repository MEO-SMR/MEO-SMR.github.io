      var username;
      var password;
      var url;

      fetch('users.json')
        .then(response => response.json())
        .then(data => {
          // Store the key-pair values in variables
          username = data.Username;
          password = data.Password;
	        url = data.Url;
        });

      document.getElementById("form").addEventListener("submit", function(e) {
        e.preventDefault();
        if (document.getElementById("username").value == username &&   document.getElementById("password").value == password) {
	   alert('Validation succeeded, select ok to continue..', '', 'height=200,width=200,top=' + (window.innerHeight / 2 - 100) + ',left=' + (window.innerWidth / 2 - 100));
	   window.location.href = url;
        } else  if (document.getElementById("username").value == "" && document.getElementById("password").value !== "") {
             document.getElementById('username').focus();
	     alert('Please enter username..', '', 'height=200,width=200,top=' + (window.innerHeight / 2 - 100) + ',left=' + (window.innerWidth / 2 - 100));
	} else  if (document.getElementById("username").value !== "" && document.getElementById("password").value == "") {
	     document.getElementById('password').focus();
	     alert('Please enter password..', '', 'height=200,width=200,top=' + (window.innerHeight / 2 - 100) + ',left=' + (window.innerWidth / 2 - 100));
        } else {
	    document.getElementById('password').value = "";
	    document.getElementById('password').focus();
	     alert('Wrong Password!', '', 'height=200,width=200,top=' + (window.innerHeight / 2 - 100) + ',left=' + (window.innerWidth / 2 - 100));	
	}
      });


    document.getElementById("password").value = "";
    document.getElementById("password").focus();
    document.getElementById("username").focus();
