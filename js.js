'use strict'

let field = document.querySelector('#field');

function range(count) {
    let arr = []
	for(let i=1; i<=count; i++){
        arr.push(i)
    }
    return arr
}

function shuffle(arr) {
	return arr.map(i => [Math.random(),i]).sort().map(i => i[1])
}

function chunk(arr, n) {
   let res = [];
   let len = arr.length / n
   for(let i=0; i<arr.length;i++){
	let elem = arr.splice(0,len)
	res.push(elem)
   }
   return res
}

function prepare(size) {
	let arr = [];
	
	arr = range(size * size);
	arr = shuffle(arr);
	arr = chunk(arr, size);
	
	return arr;
}

function build(field, arr) {
	field.textContent = ''
	let res = [];
	for(let i=0;i<arr.length; i++){
		let tr = document.createElement('tr')
		for(let j=0; j<arr[i].length; j++){
			let td = document.createElement('td')
			td.textContent = arr[i][j]
			tr.appendChild(td)
			res.push(td)
		}
		field.appendChild(tr)
	}
	return res
}

start(2);

function start(size) {
	activate(build(field, prepare(size)), size);
}

function activate(cells,size){
	let last = size*size
	let counter = 1;
	
	for(let cell of cells){
		cell.addEventListener('click',function(){
			if(this.textContent == counter){
			this.classList.add('active')

			counter++

			if(this.textContent == last){
				start(size+1)
				}
			}
		})	
	}	
}

