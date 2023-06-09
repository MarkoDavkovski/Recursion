const mergeSort = (arr) => {
	if (arr.length <= 1) return arr;

	//remove duplicates
	const uniqueArr = [...new Set(arr)];

	let mid = Math.floor(uniqueArr.length / 2);
	let left = uniqueArr.slice(0, mid);
	let right = uniqueArr.slice(mid, arr.length);

	return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
	let result = [];
	let leftIndex = 0;
	let rightIndex = 0;

	while (leftIndex < left.length && rightIndex < right.length) {
		if (left[leftIndex] < right[rightIndex]) {
			result.push(left[leftIndex]);
			leftIndex++;
		} else {
			result.push(right[rightIndex]);
			rightIndex++;
		}
	}

	while (leftIndex < left.length) {
		result.push(left[leftIndex]);
		leftIndex++;
	}

	while (rightIndex < right.length) {
		result.push(right[rightIndex]);
		rightIndex++;
	}

	return result;
};

const random = Array.from({ length: 50 }, () =>
	Math.floor(Math.random() * 100)
);

let callMergeSort = mergeSort(random);
console.log(`Random Array : ${random}`);
console.log(`Sorted Array : ${callMergeSort}`);
