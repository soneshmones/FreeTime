Router.map(function(){
	this.route('student', {
		path: 'student'
	});
	this.route('teacher', {
		path: 'teacher'
	});
	this.route('login', {
		path: '/'
	});
});



  function toggle(btn){
if(document.getElementById(btn).style.color == 'rgb(204, 204, 204)')
	document.getElementById(btn).style.color = '#ffffff'
else
{

	document.getElementById(btn).style.color = '#cccccc';
}

  };