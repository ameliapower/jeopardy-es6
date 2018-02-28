import '../css/global.scss';
// import lodash from 'lodash';

function getClues(triviaId) {
	console.log('Category ID: '+triviaId);

	let url = "http://jservice.io/api/clues?&category="+triviaId;
	let cluesDiv = document.getElementById('clues');
	let trivia = []; //create holding array
	let jeopardy;

	fetch(url)
		.then(response => response.json()
			.then(data => {
				jeopardy='<ul class="list-group">';
			    for(var i=0; i<data.length; i++) {
			    	jeopardy += '<li class="list-group-item">'+data[i].question+
			    	'<input class="answer" type="text" placeholder="enter answer" />'+
			    	'<span class="hidden correct-answer">'+data[i].answer+
			    	'</span><span class="hidden value">'+data[i].value+'</span></li>';
			    }
			    jeopardy+='</ul>';
			    cluesDiv.innerHTML = jeopardy;

			
			    var answerBox = document.querySelectorAll('input');

				if(answerBox && answerBox !== null){
					for(var i=0; i<answerBox.length; i++){
						answerBox[i].addEventListener('change', e => {
							// console.log(e.target.nextSibling.innerHTML)
							if(e.target.value === e.target.nextSibling.innerHTML){
								alert('correct');
							}else{
								alert('wrong');
							}
						})
					}
				}
	    	

		} //then
	)); //first, second then
	//fetch



} //getClues

getClues(1212); 

// choose random cat id
// id must be max 4 numbers
// two chances to get correct
// if correct value is added to score
// otherwise next question is enabled
// questions have to be answered in sequence

// bonus 20 points if answer begins with 'what is...'




