var isboyclass = document.getElementsByClassName("boyclass");
var isgirlclass = document.getElementsByClassName("girlclass");
function nam() {
	
	for (var i = 0; i < isgirlclass.length; i++) {
		isgirlclass[i].style.display = "none";
		isboyclass[i].style.display = "inline-block";
	}
} 
function nu() {
	for (var i = 0; i < isgirlclass.length; i++) {
		isgirlclass[i].style.display = "inline-block";
		isboyclass[i].style.display = "none";
	}
}