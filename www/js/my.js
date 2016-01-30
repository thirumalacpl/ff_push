document.addEventListener("deviceready",onDeviceReady,false);

<!--Device Ready Function-->
function onDeviceReady(){
alert("Device Ready");

<!--Initializing Push Notification-->
var push = PushNotification.init({

<!--Setting attributes for Android, IOS and Windows-->
android: {
senderID: "224978017474"
},
ios: {
alert: "true",
badge: "true",
sound: "true"
},
windows: {}
});

<!--This will alert registration ID which is returned by the GCM-->
push.on('registration', function(data) {
alert(data.registrationId);
$("#regid").val(data.registrationId);
});
push.on('notification', function(data) {
});
push.on('error', function(e) {
});
}

<!--Fetching the values of registration ID, name and email from the input boxes-->
$(document).ready(function() {
$("#submit").click(function() {
var regid = $("#regid").val();
var name = $("#name").val();
var email = $("#email").val();
alert(regid);
alert(name);
alert(email);

<!--Passing those values to the insertregid.php file-->
$.ajax({
url: "http://staging.eimpressive.com/thiru/insertregid.php",
type: "POST",
dataType:'text',
data: {regid: regid,name: name,email:email},
success: function(data){
alert(data);
}
});
});
});