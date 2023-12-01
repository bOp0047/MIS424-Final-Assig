function toggleElement(){
	var paragraph = document.getElementById("toggleParagraph");
	
	if (paragraph.style.display === 'none' || paragraph.style.display === "") {
		
		paragraph.style.display = 'block';
		
	} else {
		paragraph.style.display = 'none';
	}
}