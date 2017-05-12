$(function() {

    $('#login-form-link').click(function(e) {
		$("#login-form").delay(100).fadeIn(100);
 		$("#register-form").fadeOut(100);
		$('#register-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});
	$('#register-form-link').click(function(e) {
		$("#register-form").delay(100).fadeIn(100);
 		$("#login-form").fadeOut(100);
		$('#login-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});

	$('#login-submit').on('click', function(){
		var credentials = {
			username: $('#lusername').val().trim(),
			password: $('#lpassword').val().trim()
		};

		if (credentials.username.length === 0 || credentials.password.length === 0){
			$('.modal-body').text('Cannot have an empty field');
			$('#loginModal').modal('show');
		} else {
			$.post('/login', credentials, function(data){
				console.log(data);
			});		
		}

	});

	$('#register-submit').on('click', function(){

		var credentials = {
			username: $('#rusername').val().trim(),
			password: $('#rpassword').val().trim(),
			confirmPassword: $('#rconfirm-password').val().trim(),
			fantasyTeamName: $('#rFantasyTeamName').val().trim()
		};

		var validatedFields

		if (credentials.username.length === 0 || credentials.password.length === 0 || credentials.confirmPassword.length === 0 || credentials.fantasyTeamName.length === 0){
			$('.modal-body').text('Cannot have an empty field');
			$('#loginModal').modal('show');
		} else {
			validatedFields = true
		}

		console.log(credentials);
		if (validatedFields === true) {
			if (credentials.password != credentials.confirmPassword) {
				$('.modal-body').text('Looks like your passwords do not match');			
				$('#loginModal').modal('show');
			} else {
				$.post('/register', credentials, function(data){
					console.log(data);
				});
			}
		}

	})
});
