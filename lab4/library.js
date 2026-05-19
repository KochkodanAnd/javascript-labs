const SortTools = {
    prepareArray(array) {
        let clean = [];
        let empty = 0;

        for (let i = 0; i < array.length; i++) {
            if (array[i] === undefined) {
                empty++;
            } else {
                clean.push(array[i]);
            }
        }

        if (empty > 0) {
            console.log("Undefined elements found:", empty);
        }

        return { clean, empty };
    },

    finishArray(array, empty) {
        for (let i = 0; i < empty; i++) {
            array.push(undefined);
        }
        return array;
    },

    needSwap(a, b, order) {
        if (order === "asc") return a > b;
        if (order === "desc") return a < b;
        return false;
    },

    bubble(array, order = "asc") {
        let data = this.prepareArray(array);
        let arr = data.clean;
        let comparisons = 0;
        let swaps = 0;

        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = 0; j < arr.length - i - 1; j++) {
                comparisons++;

                if (this.needSwap(arr[j], arr[j + 1], order)) {
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    swaps++;
                }
            }
        }

        console.log("Bubble sort");
        console.log("Comparisons:", comparisons);
        console.log("Swaps:", swaps);

        return this.finishArray(arr, data.empty);
    },

    selection(array, order = "asc") {
        let data = this.prepareArray(array);
        let arr = data.clean;
        let comparisons = 0;
        let swaps = 0;

        for (let i = 0; i < arr.length - 1; i++) {
            let index = i;

            for (let j = i + 1; j < arr.length; j++) {
                comparisons++;

                if (this.needSwap(arr[index], arr[j], order)) {
                    index = j;
                }
            }

            if (index !== i) {
                let temp = arr[i];
                arr[i] = arr[index];
                arr[index] = temp;
                swaps++;
            }
        }

        console.log("Selection sort");
        console.log("Comparisons:", comparisons);
        console.log("Swaps:", swaps);

        return this.finishArray(arr, data.empty);
    },

    insertion(array, order = "asc") {
        let data = this.prepareArray(array);
        let arr = data.clean;
        let comparisons = 0;
        let moves = 0;

        for (let i = 1; i < arr.length; i++) {
            let current = arr[i];
            let j = i - 1;

            while (j >= 0) {
                comparisons++;

                if (this.needSwap(arr[j], current, order)) {
                    arr[j + 1] = arr[j];
                    moves++;
                    j--;
                } else {
                    break;
                }
            }

            arr[j + 1] = current;
        }

        console.log("Insertion sort");
        console.log("Comparisons:", comparisons);
        console.log("Moves:", moves);

        return this.finishArray(arr, data.empty);
    },

    shell(array, order = "asc") {
        let data = this.prepareArray(array);
        let arr = data.clean;
        let comparisons = 0;
        let moves = 0;

        for (let gap = Math.floor(arr.length / 2); gap > 0; gap = Math.floor(gap / 2)) {
            for (let i = gap; i < arr.length; i++) {
                let current = arr[i];
                let j = i;

                while (j >= gap) {
                    comparisons++;

                    if (this.needSwap(arr[j - gap], current, order)) {
                        arr[j] = arr[j - gap];
                        moves++;
                        j -= gap;
                    } else {
                        break;
                    }
                }

                arr[j] = current;
            }
        }

        console.log("Shell sort");
        console.log("Comparisons:", comparisons);
        console.log("Moves:", moves);

        return this.finishArray(arr, data.empty);
    },

    quick(array, order = "asc") {
        let data = this.prepareArray(array);
        let arr = data.clean;
        let comparisons = 0;
        let swaps = 0;

        function compareLeft(value, pivot) {
            comparisons++;
            return order === "asc" ? value < pivot : value > pivot;
        }

        function compareRight(value, pivot) {
            comparisons++;
            return order === "asc" ? value > pivot : value < pivot;
        }

        function quickSort(left, right) {
            let i = left;
            let j = right;
            let pivot = arr[Math.floor((left + right) / 2)];

            while (i <= j) {
                while (compareLeft(arr[i], pivot)) {
                    i++;
                }

                while (compareRight(arr[j], pivot)) {
                    j--;
                }

                if (i <= j) {
                    let temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;

                    swaps++;
                    i++;
                    j--;
                }
            }

            if (left < j) quickSort(left, j);
            if (i < right) quickSort(i, right);
        }

        if (arr.length > 1) {
            quickSort(0, arr.length - 1);
        }

        console.log("Quick sort");
        console.log("Comparisons:", comparisons);
        console.log("Swaps:", swaps);

        return this.finishArray(arr, data.empty);
    }
};
