const fibs = (n = 8) => {
	let arr = [0, 1];
	if (n <= 0) return `Enter a valid number bigger than 0 `;
	else if (n === 1) return [0];
	else if (n === 2) return arr;

	for (let i = 2; i < n; i++) {
		arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
	}
	return arr;
};
console.log(`fibs : ${fibs()}`);

const fibsRec = (n = 8) => {
	if (n <= 1) return [0];
	if (n === 2) return [0, 1];
	let res = fibsRec(n - 1);
	res.push(res[res.length - 1] + res[res.length - 2]);
	return res;
};

console.log(`fibsRec : ${fibsRec()}`);
