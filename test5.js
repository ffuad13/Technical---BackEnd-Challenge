/**
 * Direction:
 * Find prefix of the word from array of string
 *
 * Expected Result:
 * fl
 */
const words = ["flower", "flow", "flight"];

function result(words) {
	if (!words || words.length === 0) {
		return "";
	}

	let sortedWord = words.sort((a, b) => a.length - b.length);
	let prefix = sortedWord[0];

	while (!words.every((string) => string.startsWith(prefix))) {
		if (prefix.length === 0) {
			return;
		}
		prefix = prefix.slice(0, -1);
	}
	return prefix;
}

console.log(result(words));
