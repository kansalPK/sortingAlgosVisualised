export function mergeSort (array) {
    const animations = [], cnt = [];
    cnt[0] = 0;
    if (array.length <= 1) {
        return array;
    }
    const auxiliaryArray = array.slice();
    mergeSortHelper(array.slice(), 0, array.length - 1, auxiliaryArray, animations, cnt);
    return [animations, cnt[0]];
}

function mergeSortHelper (
    mainArray,
    start,
    end,
    auxiliaryArray,
    animations,
    cnt
) {
    if (start === end) {
        return;
    }
    const midIndex = Math.floor(start + ((end - start) / 2));
    mergeSortHelper(auxiliaryArray, start, midIndex, mainArray, animations, cnt);
    mergeSortHelper(auxiliaryArray, midIndex + 1, end, mainArray, animations, cnt);
    didMerge(mainArray, start, midIndex, end, auxiliaryArray, animations, cnt);
}

function didMerge (
    mainArray,
    start,
    midIndex,
    end,
    auxiliaryArray,
    animations,
    cnt
) {
    let k = start;
    let i = start;
    let j = midIndex + 1;
    let inc = 0;
    while (i <= midIndex && j <= end) {
        animations.push([i, j, 0]);
        animations.push([i, j, 1]);
        ++inc;
        if (auxiliaryArray[i] <= auxiliaryArray[j]) {
            animations.push([k, auxiliaryArray[i], 2]);
            mainArray[k++] = auxiliaryArray[i++];
        } else {
            animations.push([k, auxiliaryArray[j], 2]);
            mainArray[k++] = auxiliaryArray[j++];
        }
    }
    while (i <= midIndex) {
        animations.push([i, i, 0]);
        animations.push([i, i, 1]);
        animations.push([k, auxiliaryArray[i], 2]);
        mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= end) {
        animations.push([j, j, 0]);
        animations.push([j, j, 1]);
        animations.push([k, auxiliaryArray[j], 2]);
        mainArray[k++] = auxiliaryArray[j++];
    }
    cnt[0] += inc;
}

export function selectionSort (array) {
    const animations = [], cnt = [];
    if (array.length <= 1) {
        return array;
    }
    selectionSortHelper(array.slice(), animations, cnt);
    return [animations, cnt[0]];
}

function selectionSortHelper (ar, animations, cnt) {
    let numberOfComparisons = 0;
    const n = ar.length;
    for (let j = 0; j < n - 1; ++j) {
        let smallest = j;
        for (let i = j + 1; i < n; ++i) {
            animations.push([smallest, i, 0]);
            animations.push([smallest, i, 1]);
            ++numberOfComparisons;
            if (ar[i] < ar[smallest]) {
                smallest = i;
            }
        }
        animations.push([smallest, j, 0]);
        animations.push([smallest, j, 1]);
        
        let temp = ar[j];
        animations.push([j, ar[smallest], 2]);
        animations.push([smallest, ar[j], 2]);
        ar[j] = ar[smallest];
        ar[smallest] = temp;
    }
    cnt.push(numberOfComparisons);
}

export function bubbleSort (array) {
    const animations = [], cnt = [];
    if (array.length <= 1) {
        return array;
    }
    bubbleSortHelper(array.slice(), animations, array.length, cnt);
    return [animations, cnt[0]];
}

function bubbleSortHelper (ar, animations, n, cnt) {
    let cntbubb = 0;
    for (let i = 0; i < n - 1; ++i) {
        let isSorted = 1;
        for (let j = n - 1; j > i; --j) {
            animations.push([j, j-1, 0]);
            animations.push([j, j-1, 1]);
            ++cntbubb;
            if (ar[j] < ar[j - 1]) {
                let temp = ar[j];
                animations.push([j, ar[j-1], 2]);
                animations.push([j-1, temp, 2]);
                ar[j] = ar[j - 1];
                ar[j - 1] = temp;
                isSorted = 0;
            } else {
                animations.push([j, ar[j], 2]);
                animations.push([j-1, ar[j-1], 2]);
            }
        }
        if (isSorted) {
            break;
        }
        animations.push([i, i, 0]);
        animations.push([i, i, 1]);
    }
    cnt.push(cntbubb);
}

export function insertionSort (array) {
    const animations = [], cnt = [];
    cnt[0] = 0;
    if (array.length <= 1) {
        return array;
    }
    insertionSortHelper(array.slice(), animations, cnt);
    return [animations, cnt[0]];
}

function insertionSortHelper (ar, animations, cnt) {
    const n = ar.length;
    for (let j = 1; j < n; ++j) {
        let key = ar[j], i = j - 1;
        while (i >= 0) {
            animations.push([i+1, i, 0]);
            animations.push([i+1, i, 1]);
            if (ar[i] > key) {
                ++cnt[0];
                animations.push([i+1, ar[i], 2]);
                ar[i + 1] = ar[i];
                --i;
            } else {
                break;
            }
        }
        animations.push([i+1, key, 2]);
        ar[i + 1] = key;
    }
}

export function shellSort (array) {
    const animations = [], cnt = [];
    if (array.length <= 1) {
        return array;
    }
    shellSortHelper(array.slice(), animations, cnt);
    return [animations, cnt[0]];
}

function shellSortHelper (intArray, animations, cnt) {

   const n = intArray.length;
   let inner, outer, valueToInsert, interval = 1, pubg = 0;
   
   while(interval <= parseInt(n/3)) {
      interval = ((interval*3) + 1);
   }

   while(interval > 0) {

      for(outer = interval; outer < n; outer++) {
         valueToInsert = intArray[outer];
         inner = outer;
			
         while(inner > interval-1 && intArray[inner - interval] >= valueToInsert) {
            ++pubg;
            animations.push([outer, inner-interval, 0]);
            animations.push([outer, inner-interval, 1]);
            animations.push([inner, intArray[inner - interval], 2]);
            intArray[inner] = intArray[inner - interval];
            inner -=interval;
         }
         animations.push([inner, valueToInsert, 2]);
         intArray[inner] = valueToInsert;
      }
		
      interval = parseInt((interval -1) /3);

   }
   cnt.push(pubg);
}

    export function hoareQuickSort (array) {
        const animations = [], cnt = [];
        cnt[0] = 0;
        if (array.length <= 1) {
            return array;
        }
        hoareQuickSortHelper(array.slice(), 0, array.length - 1 , animations, cnt);
        return [animations, cnt[0]];
    }

    function hoareQuickSortHelper (ar, p, r, animations, cnt) {
        if (p < r) {
            let q = hoarePartitionf(ar, p, r, animations, cnt);
            hoareQuickSortHelper(ar, p, q, animations, cnt);
            hoareQuickSortHelper(ar, q + 1, r, animations, cnt);
        }
    }
    
    function hoarePartitionf (ar, p, r, animations, cnt) {
        let x = ar[p], c1 = 0;
        let i = p - 1, j = r + 1;
        while (true) {
            do {
                --j; ++c1;
                animations.push([j, p, 0]);
                animations.push([j, p, 1]);
            } while (ar[j] > x);
            do {
                ++i; ++c1;
                animations.push([i, p, 0]);
                animations.push([i, p, 1]);
            } while (ar[i] < x);
            animations.push([i, j, 0]);
            animations.push([i, j, 1]);
            if (i >= j) {
                cnt[0] += c1;
                return j;
            }
            let temp = ar[i];
            animations.push([i, ar[j], 2]);
            ar[i] = ar[j];
            animations.push([j, temp, 2]);
            ar[j] = temp;
        }
    }


    export function lomutoQuickSort (array) {
        const animations = [], cnt = [];
        cnt[0] = 0;
        if (array.length <= 1) {
            return array;
        }
        lomutoQuickSortHelper(array.slice(), 0, array.length - 1 , animations, cnt);
        return [animations, cnt[0]];
     }

    function lomutoQuickSortHelper (ar, p, r, animations, cnt) {
        if (p < r) {
            let q = lomutoPartitionf(ar, p, r, animations, cnt);
            lomutoQuickSortHelper(ar, p, q - 1, animations, cnt);
            lomutoQuickSortHelper(ar, q + 1, r, animations, cnt);
        }
    }
    
    function lomutoPartitionf (ar, p, r, animations, cnt) {
        let x = ar[r];
        let i = p - 1, jp = 0;
        for (let j = p; j < r; ++j) {
            animations.push([j, r, 0]);
            animations.push([j, r, 1]);
            if (ar[j] <= x) {
                ++i; ++jp;
                animations.push([i, j, 0]);
                animations.push([i, j, 1]);
                let temp = ar[i];
                animations.push([i, ar[j], 2]);
                ar[i] = ar[j];
                animations.push([j, temp, 2]);
                ar[j] = temp;
            }
        }
        cnt[0] += jp;
        
        animations.push([i+1, r, 0]);
        animations.push([i+1, r, 1]);
        let temp = ar[i+1];
            animations.push([i+1, ar[r], 2]);
            ar[i+1] = ar[r];
            animations.push([r, temp, 2]);
            ar[r] = temp;
        return i+1;
    }



    export function randQsort (array) {
        const animations = [], cnt = [];
        cnt[0] = 0;
        if (array.length <= 1) {
            return array;
        }
        randomizedQuickSort(array.slice(), 0, array.length - 1 , animations, cnt);
        return [animations, cnt[0]];
     }

    function postRandomizedPartitionf (ar, p, r, animations, cnt) {
        let x = ar[p], nm = 0;
        let i = p - 1, j = r + 1;
        while (true) {
            do {
                --j; ++nm;
                animations.push([j, p, 0]);
                animations.push([j, p, 1]);
            } while (ar[j] > x);
            do {
                ++i; ++nm;
                animations.push([i, p, 0]);
                animations.push([i, p, 1]);
            } while (ar[i] < x);
            animations.push([i, j, 0]);
            animations.push([i, j, 1]);
            if (i >= j) {
                cnt[0] += nm;
                return j;
            }
            let temp = ar[i];
            animations.push([i, ar[j], 2]);
            ar[i] = ar[j];
            animations.push([j, temp, 2]);
            ar[j] = temp;
        }
    }
    
    function preRandomizedPartitionf (ar, p, r, animations, cnt) {
        let i = randomNumberGenerator(p, r);
        animations.push([i, p, 0]);
        animations.push([i, p, 1]);
        let temp = ar[i];
        animations.push([i, ar[p], 2]);
        ar[i] = ar[p];
        animations.push([p, temp, 2]);
        ar[p] = temp;
        return postRandomizedPartitionf(ar, p, r, animations, cnt);
    }
    
    function randomizedQuickSort (ar, p, r, animations, cnt) {
        if (p < r) {
            let q = preRandomizedPartitionf(ar, p, r, animations, cnt);
            randomizedQuickSort(ar, p, q, animations, cnt);
            randomizedQuickSort(ar, q+1, r, animations, cnt);
        }
    }

    function randomNumberGenerator (min, max) {
        return Math.floor(Math.random() * (max-min+1) + min);
    }


    export function medianQsort (array) {
        const animations = [], cnt = [];
        cnt[0] = 0;
        if (array.length <= 1) {
            return array;
        }
        medianOf3PartitionQuickSort(array.slice(), 0, array.length - 1 , animations, cnt);
        return [animations, cnt[0]];
     }

    function postMedianOf3Partition (ar, p, r, animations, cnt) {
        let x = ar[p], shiv = 0;
        let i = p - 1, j = r + 1;
        while (true) {
            do {
                --j; ++shiv;
                animations.push([j, p, 0]);
                animations.push([j, p, 1]);
            } while (ar[j] > x);
            do {
                ++i; ++shiv;
                animations.push([i, p, 0]);
                animations.push([i, p, 1]);
            } while (ar[i] < x);
            animations.push([i, j, 0]);
            animations.push([i, j, 1]);
            if (i >= j) {
                cnt[0] += shiv;
                return j;
            }
            let temp = ar[i];
            animations.push([i, ar[j], 2]);
            ar[i] = ar[j];
            animations.push([j, temp, 2]);
            ar[j] = temp;
        }
    }
    
    function preMedianOf3Partition (ar, p, r, animations, cnt) {
        let i, j, k, l;
        i = randomNumberGenerator(p, r);
        j = randomNumberGenerator(p, r);
        k = randomNumberGenerator(p, r);
        if ((ar[i] <= ar[j] && ar[j] <= ar[k])||(ar[k] <= ar[j] && ar[j] <= ar[i])) {
            l = j;
        } else if ((ar[j] <= ar[i] && ar[i] <= ar[k])||(ar[k] <= ar[i] && ar[i] <= ar[j])) {
            l = i;
        } else if ((ar[i] <= ar[k] && ar[k] <= ar[j])||(ar[j] <= ar[k] && ar[k] <= ar[i])) {
            l = k;
        }
        animations.push([l, r, 0]);
        animations.push([l, r, 1]);
        let temp = ar[l];
        animations.push([l, ar[r], 2]);
        ar[l] = ar[r];
        animations.push([r, temp, 2]);
        ar[r] = temp;
        ++cnt[0];
        return postMedianOf3Partition(ar, p, r, animations, cnt);
    }
    
    function medianOf3PartitionQuickSort (ar, p, r, animations, cnt) {
        if (p < r) {
            let q = preMedianOf3Partition(ar, p, r, animations, cnt);
            medianOf3PartitionQuickSort(ar, p, q, animations, cnt);
            medianOf3PartitionQuickSort(ar, q+1, r, animations, cnt);
        }
    }


    export function heapSorting (array) {
        const animations = [], cnt = [];
        cnt[0] = 0;
        if (array.length <= 1) {
            return array;
        }
        heapSort(array.slice(), array.length, animations, cnt);
        return [animations, cnt[0]];
     }


    function heapify (ar, n, i, animations, cnt) {
        let largest = i, l = 2*i+1, r = 2*i+2, pk = 0;
        if (l < n && ar[l] > ar[largest]) {
            ++pk;
            animations.push([l, largest, 0]);
            animations.push([l, largest, 1]);
            largest = l;
        }
        if (r < n && ar[r] > ar[largest]) {
            ++pk;
            animations.push([r, largest, 0]);
            animations.push([r, largest, 1]);
            largest = r;
        }
        if (largest !== i) {
            animations.push([i, largest, 0]);
            animations.push([i, largest, 1]);
            let temp = ar[i];
            animations.push([i, ar[largest], 2]);
            ar[i] = ar[largest];
            animations.push([largest, temp, 2]);
            ar[largest] = temp;
            heapify(ar, n, largest, animations, cnt);
        }
        cnt[0] += pk;
    }
    
    function heapSort (ar, n, animations, cnt) {
        for (let i = n/2+1; i >= 0; --i) {
            animations.push([i, i, 0]);
            animations.push([i, i, 1]);
            heapify(ar, n, i, animations, cnt);
        }
        for (let i = n-1; i >= 0; --i) {
            animations.push([i, i, 0]);
            animations.push([i, i, 1]);
            let temp = ar[0];
            animations.push([0, ar[i], 2]);
            ar[0] = ar[i];
            animations.push([i, temp, 2]);
            ar[i] = temp;
            heapify(ar, i, 0, animations, cnt);
        }
    }

    export function countSort (array) {
        const animations = [];
        if (array.length <= 1) {
            return array;
        }
        countSortHelper(array.slice(), animations);
        return animations;
    }
    
    function countSortHelper (arr, animations) {
        let i, z = 0, count = [];

        let min = arr[0], max = arr[0];
        for (i = 1; i < arr.length; ++i) {
            min = Math.min(min, arr[i]);
            max = Math.max(max, arr[i]);
        }
    
        for (i = min; i <= max; i++) {
            count[i] = 0;
        }
    
        for (i=0; i < arr.length; i++) {
            count[arr[i]]++;
        }
    
        for (i = min; i <= max; i++) {
            while (count[i]-- > 0) {
                animations.push([z, i, 2]);
                arr[z++] = i;
            }
        }
    }

    function countSortRad (arr, exp, animations) { 
        const n = arr.length;
        let output = []; 
        let i, count = []; 
        for (i = 0; i < 10; ++i) {
            count[i] = 0;
        }
    
        for (i = 0; i < n; i++) 
            count[((parseInt(arr[i] / exp)) % 10)]++; 
    
        for (i = 1; i < 10; i++) {
            count[i] += count[i - 1];
        } 
    
        for (i = n - 1; i >= 0; i--) { 
            output[count[((parseInt(arr[i] / exp)) % 10)] - 1] = arr[i]; 
            count[((parseInt(arr[i] / exp)) % 10)]--; 
        } 
    
        for (i = 0; i < n; i++) {
            animations.push([i, output[i], 2]);
            arr[i] = output[i]; 
        }
    } 
 
export function radixSort(array) { 
    const animations = [], arr = array.slice();
    const n = array.length;
    let m = array[0];
    for (let i = 1; i < n; ++i) {
        m = Math.max(m, array[i]);
    }
  
    for (let exp = 1; parseInt(m / exp) > 0; exp *= 10) {
        countSortRad(arr, exp, animations); 
    }
    return [animations, 0];
} 

export function hybridSort (array) { 
    const animations = [], cnt = [];
    cnt[0] = 0;
        if (array.length <= 1) {
            return array;
        }
        hybrid_quick_sort(array.slice(), 0, array.length-1, animations, cnt);
        return [animations, cnt[0]];
} 

function hybrid_quick_sort (arr, low, high, animations, cnt) { 
  while (low < high)  
    { 
  
    if ((high-low+1) < 10) { 
            const n = high;
            for(let i=low+1;i<n+1;i++) { 
                let val = arr[i] ; 
                let j = i ; 
                while (j>low && arr[j-1]>val) { 
                    animations.push([j-1, i, 0]);
                    animations.push([j-1, i, 1]);
                    animations.push([j, arr[j-1], 2]);
                    ++cnt[0];
                    arr[j]= arr[j-1] ; 
                    j-= 1; 
                } 
                animations.push([j, val, 2]);
                arr[j]= val ; 
            } 
            break; 
    } 
  
    else 
        
        { 
          let pivot = lomutoPartitionf(arr, low, high, animations, cnt) ; 
  
      if (pivot-low<high-pivot) 
        { 
          hybrid_quick_sort(arr, low, pivot - 1, animations, cnt);  
        low = pivot + 1; 
      } 
      else
        {   
            
        hybrid_quick_sort(arr, pivot + 1, high, animations, cnt); 
        high = pivot-1; 
        } 
  
     } 
  
   } 
}

export function cocktailSort (array) {
    const animations = [], cnt = [];
    cnt[0] = 0;
    if (array.length <= 1) {
        return array;
    }
    cocktailSortHelper(array.slice(), animations, array.length, cnt);
    return [animations, cnt[0]];
}

function cocktailSortHelper(a, animations, n, cnt) {
    let swapped = true;
    let start = 0;
    let end = n - 1;
 
    while (swapped) {
        swapped = false;
        
        for (let i = start; i < end; ++i) 
        {
            if (a[i] > a[i + 1]) {
                ++cnt[0];
                animations.push([i, i+1, 0]);
                animations.push([i, i+1, 1]);
                animations.push([i, a[i+1], 2]);
                let temp = a[i];
                a[i] = a[i+1];
                animations.push([i+1, temp, 2]);
                a[i+1] = temp;
                swapped = true;
            } else {               
                animations.push([i, a[i], 2]);
                animations.push([i+1, a[i+1], 2]);
            }
        }
        
        if (!swapped)
            break;
            
        swapped = false;
        
        --end;
        
        for (let i = end - 1; i >= start; --i) {
            if (a[i] > a[i + 1]) {
                ++cnt[0];
                animations.push([i, i+1, 0]);
                animations.push([i, i+1, 1]);
                animations.push([i, a[i+1], 2]);
                let temp = a[i];
                a[i] = a[i+1];
                animations.push([i+1, temp, 2]);
                a[i+1] = temp;
                swapped = true;
            } else {
                animations.push([i, a[i], 2]);
                animations.push([i+1, a[i+1], 2]);
            }
        }
        
        ++start;
    }
}

export function gnomeSort (array) {
    const animations = [], cnt = [];
    cnt[0] = 0;
    if (array.length <= 1) {
        return array;
    }
    gnomeSortHelper(array.slice(), animations, array.length, cnt);
    return [animations, cnt[0]];
}

function gnomeSortHelper(arr, animations, n, cnt) {
    let index = 0;
    while (index < n) { 
        if (index === 0) {
            index++; 
        }
        ++cnt[0];
        animations.push([index, index-1, 0]);
        animations.push([index, index-1, 1]);
        if (arr[index] >= arr[index - 1]) {
            index++; 
        }
        else {
            animations.push([index, arr[index-1], 2]);
            let temp = arr[index];
            arr[index] = arr[index-1];
            animations.push([index-1, temp, 2]);
            arr[index-1] = temp;
            index--; 
        } 
    } 
}

export function pancakeSort (array) {
    const animations = [], cnt = [];
    cnt[0] = 0;
    if (array.length <= 1) {
        return array;
    }
    pancakeSortHelper(array.slice(), animations, cnt);
    return [animations, cnt[0]];
}

function pancakeSortHelper(arr, animations, cnt) {
    const n = arr.length;
    for (let curr_size = n; curr_size > 1; --curr_size) { 
        
        let mi = 0, mv = arr[0];
        for (let i = 1; i < curr_size; ++i) {
            if (arr[i] > mv) {
                ++cnt[0];
                mi = i;
                mv = arr[i];
            }
        }
        
        if (mi !== curr_size-1) {
            let i;
            for (i = 0; i <= parseInt(mi/2); ++i) {
                animations.push([i, mi, 0]);
                animations.push([i, mi, 1]);
                animations.push([i, arr[mi-i], 2]);
                let temp = arr[i];
                arr[i] = arr[mi-i];
                animations.push([mi-i, temp, 2]);
                arr[mi-i] = temp;
            }
            mi = curr_size-1;
            //arr.reverse(arr, arr+mi); 
            for (i = 0; i <= parseInt(mi/2); ++i) {
                animations.push([i, mi, 0]);
                animations.push([i, mi, 1]);
                animations.push([i, arr[mi-i], 2]);
                let temp = arr[i];
                arr[i] = arr[mi-i];
                animations.push([mi-i, temp, 2]);
                arr[mi-i] = temp;
            }
            //arr.reverse(arr, arr+curr_size-1); 
        } 
    } 
} 

export function binaryInsertionSort (array) {
    const animations = [], cnt = [];
    cnt[0] = 0;
    if (array.length <= 1) {
        return array;
    }
    binaryInsertionSortHelper(array.slice(), animations, cnt);
    return [animations, cnt[0]];
}

function binarySearch(a, i, low, high, animations, cnt)
{
    let item = a[i];
    if (high <= low)
        return (item > a[low]) ? (low + 1) : low;

    let mid = parseInt((low + high) / 2);

    animations.push([i, mid, 0]);
    animations.push([i, mid, 1]);
    ++cnt[0];
    if (item === a[mid]) {
        return mid + 1;
    }

    if (item > a[mid])
        return binarySearch(a, i, mid + 1, high, animations, cnt);

    return binarySearch(a, i, low, mid - 1, animations, cnt);
}

function binaryInsertionSortHelper(a, animations, cnt) {
const n = a.length;
let i, loc, j, k, selected;

for (i = 1; i < n; ++i) {
    j = i - 1;
    selected = a[i];

    loc = binarySearch(a, i, 0, j, animations, cnt);

    while (j >= loc) {
        animations.push([j+1, j+1, 0]);
        animations.push([j+1, j+1, 1]);
        animations.push([j+1, a[j], 2]);
        a[j + 1] = a[j];
        j--;
    }
    
    animations.push([j+1, j+1, 0]);
    animations.push([j+1, j+1, 1]);
    animations.push([j+1, selected, 2]);
    a[j + 1] = selected;
}
}