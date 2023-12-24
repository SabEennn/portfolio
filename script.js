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

var value=1
const tog = document.getElementById("mobile-toggle")
const toggle = () => {
	if(value === 1){ 
tog.style.left=" 214px";
value = 0;
	}

	else{ 
		tog.style.left="450px";
		value = 1;
	}
}