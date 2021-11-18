/**
 * Direction:
 * Find missing number from the list
 *
 * Expected Result:
 * 8
 */
const numbers = [9, 6, 4, 2, 3, 5, 7, 0, 1];

function result(numbers) {
	// Your Code Here
	const max = Math.max(...numbers);
	const min = Math.min(...numbers);
	let result = [];

	for (let i = min; i <= max; i++) {
		if (!numbers.includes(i)) {
			result.push(i);
		}
	}

	return result;
}

console.log(result(numbers));
