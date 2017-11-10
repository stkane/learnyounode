//sum all argv 

console.log(sum(process.argv));

function sum(array) {
	sum = 0;
	for(let i = 2; i < array.length; i++) {
		sum += Number(array[i]);
	};
	return sum;
}