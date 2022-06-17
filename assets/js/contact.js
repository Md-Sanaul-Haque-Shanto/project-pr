function sendmail(){
    
			var name = $('#Name').val();
			var email = $('#Sender').val();
			var phone = $('#Phone').val();
			var subject = $('Power Rangers QA').val();
            var message = $('#Message').val();

			// var body = $('#body').val();

			var Body='Name: '+name+'<br>Email: '+email+'<br>Subject: '+subject+'<br>Phone: '+phone+'<br>Message: '+message;
			//console.log(name, phone, email, message);

			Email.send({
                SecureToken:"84e3503b-e550-4666-bc68-cbc4ba528d65",
				To: "pr@theoriginator.org",
				From: "filosopharstone@gmail.com",
				Subject: "New PR message on contact from "+name,
				Body: Body
			}).then(
				message =>{
					//console.log (message);
					if(message=='OK'){
					alert('Your mail has been send. Thank you for connecting.');
					}
					else{
						console.error (message);
						alert('There is error at sending message. ')
						
					}

				}
			);



		}
