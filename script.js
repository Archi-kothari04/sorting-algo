const algorithms = {
    bubble: {
        name: "Bubble Sort",
        complexity: "Time: O(n^2), Space: O(1)",
        bestUse: "Best for small datasets or when the array is almost sorted.",
        code: `
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}`
    },
    selection: {
        name: "Selection Sort",
        complexity: "Time: O(n^2), Space: O(1)",
        bestUse: "Useful when memory writes are more expensive than reads.",
        code: `
function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
    return arr;
}`
    },
    insertion: {
        name: "Insertion Sort",
        complexity: "Time: O(n^2), Space: O(1)",
        bestUse: "Best for small datasets and for nearly sorted datasets.",
        code: `
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}`
    },
    merge: {
        name: "Merge Sort",
        complexity: "Time: O(n log n), Space: O(n)",
        bestUse: "Good for large datasets and when stable sort is required.",
        code: `
function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

function merge(left, right) {
    let result = [], i = 0, j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) result.push(left[i++]);
        else result.push(right[j++]);
    }
    return result.concat(left.slice(i)).concat(right.slice(j));
}`
    },
    quick: {
        name: "Quick Sort",
        complexity: "Time: O(n log n) on average, O(n^2) in the worst case, Space: O(log n)",
        bestUse: "Best for large datasets and when average case performance is more important than worst case.",
        code: `
function quickSort(arr) {
    if (arr.length <= 1) return arr;
    const pivot = arr[arr.length - 1];
    const left = [], right = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) left.push(arr[i]);
        else right.push(arr[i]);
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}`
    }
};

function showDetails(algorithm) {
    const details = algorithms[algorithm];
    document.getElementById('algorithm-name').innerText = details.name;
    document.getElementById('complexity').innerText = `Complexity: ${details.complexity}`;
    document.getElementById('best-use').innerText = `Best Use: ${details.bestUse}`;
    document.getElementById('code-sample').innerText = details.code;
    document.getElementById('details').style.display = 'block';
}
