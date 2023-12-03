function nextInLine(arr, item) {
	// Змініть код лише під цим рядком
	arr.push(item);

	item = arr.shift();

	return item;
	// Змініть код лише над цим рядком
}

// Налаштування
let testArr = [1, 2, 3, 4, 5];

// Відобразити код
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
