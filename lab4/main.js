function createArray(size) {
    let array = [];

    for (let i = 0; i < size; i++) {
        array.push(Math.floor(Math.random() * 500));
    }

    return array;
}

let simpleArray = createArray(100);

let sparseArray = createArray(100);
sparseArray[12] = undefined;
sparseArray[45] = undefined;
sparseArray[80] = undefined;

console.log("===== NORMAL ARRAY =====");
console.log("Original:", simpleArray);

console.log(SortTools.bubble([...simpleArray], "asc"));
console.log(SortTools.selection([...simpleArray], "asc"));
console.log(SortTools.insertion([...simpleArray], "asc"));
console.log(SortTools.shell([...simpleArray], "asc"));
console.log(SortTools.quick([...simpleArray], "asc"));

console.log("===== SPARSE ARRAY =====");
console.log("Original:", sparseArray);

console.log(SortTools.bubble([...sparseArray], "desc"));
console.log(SortTools.selection([...sparseArray], "desc"));
console.log(SortTools.insertion([...sparseArray], "desc"));
console.log(SortTools.shell([...sparseArray], "desc"));
console.log(SortTools.quick([...sparseArray], "desc"));
