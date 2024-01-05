const skill = document.getElementById("skills")
const experience = document.getElementById("exp")
const education = document.getElementById("edu")
const tapChange= (ids)=>{
	 if( ids === `skills`){
			skill.style.opacity = `1`;
			experience.style.opacity = `0`; 
			education.style.opacity = `0`; 	
			skill.style.visibility = `visible`;
			experience.style.visibility = `hidden`; 
			education.style.visibility = `hidden`; 	
			
		}
	 else if( ids === `exp`){
			experience.style.opacity = `1`;
			skill.style.opacity = `0`; 
			education.style.opacity = `0`; 
			skill.style.visibility = `hidden`;
			experience.style.visibility = `visible`; 
			education.style.visibility = `hidden`; 	

		}
	 else if( ids === `edu`){
			education.style.opacity = `1`;
			experience.style.opacity = `0`; 
			skill.style.opacity = `0`; 
			skill.style.visibility = `hidden`;
			experience.style.visibility = `hidden`; 
			education.style.visibility = `visible`; 	

		}

}

const wrapper = 	document.getElementById("wrapper");
var value=1
const tog = document.getElementById("mobile-toggle")
const toggle = () => {
	if(value === 1){ 
 show()
	wrapper.style.opacity=".3"
	}

	else{ 
	hide()
wrapper.style.opacity="0"
	}
}



document.getElementById("wrapper").addEventListener("click", hide);
window.addEventListener("scroll", hide)	;



function hide(){

	tog.style.left="450px";
	value = 1;

} 
function show(){

	tog.style.left="214px";
	value = 0;

} 

// fetching the API
// fetch(`https://type.fit/api/quotes`)
// .then(()=>{
	
// })

// .then(()=>{ 

 fetch(`https://type.fit/api/quotes`)
.then((r)=> r.json())
.then ((j)=>{
	

	const short = document.getElementById("quote")
	console.log(Math.floor(Math.random()*j.length));
	const randomNumber = Math.floor(Math.random()*j.length)
console.log(j[randomNumber].text);
var varForQuote=j[randomNumber].text
 
document.getElementById("quote").innerHTML = '"  ' +varForQuote+ '  "';
short.style.fontFamily = "Space Grotesk"; 
short.style.color= "#757575";
short.style.fontWeight="100";

}
) 



//go to the top button
// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


