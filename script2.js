
$(function(){
	$('.registration').on('submit', function(event){
		event.preventDefault();
		signup();
	});
});

function signup(){
	var id = $("#user_id").val();
	var username = $("#username").val();
	var email = $("#email").val();
	var password = $("#password").val();
	var data =  {

		username : username,
		email : email,
		password : password,
		id : id

	}
	console.log(data)

	$.ajax({

		url: "http://localhost/my_project/process1.php",
		type: "POST",
		data: JSON.stringify(data),
		contentType: "application/json",
		success: function(result){
			console.log(result);
			var response = JSON.parse(result);
			if (response.status == 200) {
				alert(response.message);
			}else{
				alert(response.message);
			}
		}
	});
}