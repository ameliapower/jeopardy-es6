// different ways of writing the export file

// module.exports = (a, b) => a + b; //unnamed


// module.exports default function add(a, b) {
// 	return a + b;
// };
// module.exports = {
// 	add: add
// };


// single function:
// export function add(a,b){
// 	return a+b
// }


//or multiple functions:
module.exports = {
	add: (a,b) => {
		return a+b
	},
 
	subtract: (a,b) => {  //same as: let subtract = function(a,b){
		return a-b
	},

	evenNumber: (a,b) => {
		return a%b === 0
	}
}



