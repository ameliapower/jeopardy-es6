import '../css/global.scss';

let categories = 'http://jservice.io/api/categories?&count=100', 
	questions = "http://jservice.io/api/clues?&category=",
	// trivia = [], //create holding array
	cluesDiv = document.getElementById('clues'),
	jeopardy;


let getData = url => {
	return fetch(url).then(response => response.json())
		.catch(error => console.error('Error:', error))
} 


//GET CATEGORY LIST
getData(categories).then( data => {
	// console.log(data)
	let cats='<ul><h2>Choose a category</h2>';
	for(let i=0; i<data.length; i++) {
		cats+='<li>'+data[i].id + ' - ' + data[i].title+'</li>';
	}
	cats+='</ul>';
	document.getElementById('catList').innerHTML = cats;
});


//ON USER INPUT, GET CATEGORY CLUES
document.getElementById('cat-id').addEventListener('change', e => {
	//TODO: Change from input box to select
	if(e.target.value === "" || e.target.value === NaN ){return }
	let questions = 'http://jservice.io/api/clues?&category='+e.target.value; 
	
	getData(questions).then( data => {
		jeopardy='<ul class="list-group">';
		for(let i=0; i<data.length; i++) {
			jeopardy += '<li class="list-group-item">'+data[i].question+
			'<input class="answer" type="text" placeholder="enter answer" />'+
			'<span class="hidden correct-answer">'+data[i].answer+
			'</span><span class="hidden value">'+data[i].value+'</span></li>';
		}
		jeopardy+='</ul>';
		cluesDiv.innerHTML = jeopardy;

		//CHECK ANSWERS ARE CORRECT
		let answerBox = document.querySelectorAll('.answer');

		if(answerBox && answerBox !== null){
			for(let i=0; i<answerBox.length; i++){
				answerBox[i].addEventListener('change', e => {
					let correctAnswer = e.target.nextSibling.innerHTML;
					// console.log('e.target.value');
					// console.log(e.target.value);
					if(e.target.value && e.target.value === correctAnswer){
						alert('correct');
					}else{
						alert('wrong');
					}
				})
			}

		//TO DO: limit tries
		//TO DO: add values to score

		} //check answer

	}) //getData
}) //eventListener





// choose cat from left rail by selection
// id must be max 5 numbers
// two chances to get correct
// if correct value is added to score
// otherwise next question is enabled
// questions have to be answered in sequence

// bonus 20 points if answer begins with 'what is...'




