import React, {Component} from 'react';
import * as sortAlgos from '../sortAlgos/sortAlgos';
import CountUp from 'react-countup';
import './pfv.css';

class SortVis extends Component {
    constructor (props) {
        super(props);
        this.state = {
            array : [],
            count : 0,
            limit : 0,
            r : 1,
            str : ""
        };
    }

    componentDidMount () {
        this.resetArray ();
    }

    resetArray () {
        const array = [];
        for (let i = 0; i < 350; ++i) {
            array.push(randomIntfromInterval(5, 530));
        }
        this.setState({array: array, count: 0, limit: 0, r : 1, str : ""});
    }
    
    mergeSort() {
        const [animations, cntMerge, k] = sortAlgos.mergeSort(this.state.array);
        const arrayBars = document.getElementsByClassName('arrayBar');
        for (let i = 0; i < animations.length; i++) {
          const isColorChange = i % 3 !== 2;
          if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = (i % 3 === 0) ? 'red' : 'cyan';
            setTimeout(() => {
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
            }, i * 1.89);
          } else {
            setTimeout(() => {
              const [barOneIdx, newHeight] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              barOneStyle.height = `${newHeight}px`;
            }, i * 1.89);
          }
        }
        this.setState({count: cntMerge});
        this.setState({limit: 17});
        this.setState({str : "Best: Ω(n*log(n)) | Average: θ(n*log(n)) | Worst: O(n*log(n))"});
      }

      selectionSort () {
        const [animations, k] = sortAlgos.selectionSort(this.state.array);
        const arrayBars = document.getElementsByClassName('arrayBar');
        for (let i = 0; i < animations.length; i++) {
            const [barOneIdx, barTwoIdx, k] = animations[i];
            if (k === 0 || k === 1) {
                setTimeout(() => {
                    const color = k === 0 ? 'red' : 'cyan';
                    arrayBars[barOneIdx].style.backgroundColor = color;
                    arrayBars[barTwoIdx].style.backgroundColor = color;
                  }, i * .1);
            } else {
                setTimeout(() => {
                    arrayBars[barOneIdx].style.height = `${barTwoIdx}px`;
                }, i * .1);
            }
        }
        this.setState({count: k});
        this.setState({limit: 14});
        this.setState({str : "Best: Ω(n^2) | Average: θ(n^2) | Worst: O(n^2)"});
      }

      bubbleSort () {
        const [animations, k] = sortAlgos.bubbleSort(this.state.array);
        const arrayBars = document.getElementsByClassName('arrayBar');
        for (let i = 0; i < animations.length; i++) {
            const [barOneIdx, barTwoIdx, k] = animations[i];
            if (k === 0 || k === 1) {
                setTimeout(() => {
                    const color = k === 0 ? 'red' : 'cyan';
                    arrayBars[barOneIdx].style.backgroundColor = color;
                    arrayBars[barTwoIdx].style.backgroundColor = color;
                  }, i * .05);
            } else {
                setTimeout(() => {
                    arrayBars[barOneIdx].style.height = `${barTwoIdx}px`;
                }, i * .05);
            }
        }
        this.setState({count: k});
        this.setState({limit: 13.8});
        this.setState({str : "Best: Ω(n) | Average: θ(n^2) | Worst: O(n^2)"});
      }

      cockTail () {
        const [animations, k] = sortAlgos.cocktailSort(this.state.array);
        const arrayBars = document.getElementsByClassName('arrayBar');
        for (let i = 0; i < animations.length; i++) {
            const [barOneIdx, barTwoIdx, k] = animations[i];
            if (k === 0 || k === 1) {
                setTimeout(() => {
                    const color = k === 0 ? 'red' : 'cyan';
                    arrayBars[barOneIdx].style.backgroundColor = color;
                    arrayBars[barTwoIdx].style.backgroundColor = color;
                  }, i * .1);
            } else {
                setTimeout(() => {
                    arrayBars[barOneIdx].style.height = `${barTwoIdx}px`;
                }, i * .1);
            }
        }
        this.setState({count: k});
        this.setState({limit: 17});
        this.setState({str : "Best: Ω(n) | Average: θ(n^2) | Worst: O(n^2)"});
      }

      insertionSort () {          
        const [animations, k] = sortAlgos.insertionSort(this.state.array);
        const arrayBars = document.getElementsByClassName('arrayBar');
        for (let i = 0; i < animations.length; i++) {
            const [barOneIdx, barTwoIdx, k] = animations[i];
            if (k === 0 || k === 1) {
                setTimeout(() => {
                    const color = k === 0 ? 'red' : 'cyan';
                    arrayBars[barOneIdx].style.backgroundColor = color;
                  }, i * .3);
            } else {
                setTimeout(() => {
                    arrayBars[barOneIdx].style.height = `${barTwoIdx}px`;
                }, i * .3);
            }
        }
        this.setState({count: k});
        this.setState({limit: 29});
        this.setState({str : "Best: Ω(n) | Average: θ(n^2) | Worst: O(n^2)"});
      }

    shellSorting () {          
        const [animations, k] = sortAlgos.shellSort(this.state.array);
        const arrayBars = document.getElementsByClassName('arrayBar');
        for (let i = 0; i < animations.length; i++) {
            const [barOneIdx, barTwoIdx, k] = animations[i];
            if (k === 0 || k === 1) {
                setTimeout(() => {
                    const color = k === 0 ? 'red' : 'cyan';
                    arrayBars[barOneIdx].style.backgroundColor = color;
                    arrayBars[barTwoIdx].style.backgroundColor = color;
                  }, i * 1);
            } else {
                setTimeout(() => {
                    arrayBars[barOneIdx].style.height = `${barTwoIdx}px`;
                }, i * 1);
            }
        }
        this.setState({count: k});
        this.setState({limit: 9.5});
        this.setState({str : "Best: Ω(n*log(n)) | Average: θ((n*log(n))^2) | Worst: O((n*log(n))^2)"});
      }
    
    hoareQuickSort () {          
        const [animations, k] = sortAlgos.hoareQuickSort(this.state.array);
        const arrayBars = document.getElementsByClassName('arrayBar');
        for (let i = 0; i < animations.length; i++) {
            const [barOneIdx, barTwoIdx, k] = animations[i];
            if (k === 0 || k === 1) {
                setTimeout(() => {
                    const color = k === 0 ? 'red' : 'cyan';
                    arrayBars[barOneIdx].style.backgroundColor = color;
                    arrayBars[barTwoIdx].style.backgroundColor = color;
                  }, i * 1);
            } else {
                setTimeout(() => {
                    arrayBars[barOneIdx].style.height = `${barTwoIdx}px`;
                }, i * 1);
            }
        }
        this.setState({count: k});
        this.setState({limit: 14});
        this.setState({str : "Best: Ω(n*log(n)) | Average: θ(n*log(n)) | Worst: O(n^2)"});
      }

      lomutoQuickSort () {          
        const [animations, k] = sortAlgos.lomutoQuickSort(this.state.array);
        const arrayBars = document.getElementsByClassName('arrayBar');
        for (let i = 0; i < animations.length; i++) {
            const [barOneIdx, barTwoIdx, k] = animations[i];
            if (k === 0 || k === 1) {
                setTimeout(() => {
                    const color = k === 0 ? 'red' : 'cyan';
                    arrayBars[barOneIdx].style.backgroundColor = color;
                    arrayBars[barTwoIdx].style.backgroundColor = color;
                  }, i * 1);
            } else {
                setTimeout(() => {
                    arrayBars[barOneIdx].style.height = `${barTwoIdx}px`;
                }, i * 1);
            }
        }
        this.setState({count: k});
        this.setState({limit: 15});
        this.setState({str : "Best: Ω(n*log(n)) | Average: θ(n*log(n)) | Worst: O(n^2)"});
      }

      randQsort () {          
        const [animations, k] = sortAlgos.randQsort(this.state.array);
        const arrayBars = document.getElementsByClassName('arrayBar');
        for (let i = 0; i < animations.length; i++) {
            const [barOneIdx, barTwoIdx, k] = animations[i];
            if (k === 0 || k === 1) {
                setTimeout(() => {
                    const color = k === 0 ? 'red' : 'cyan';
                    arrayBars[barOneIdx].style.backgroundColor = color;
                    arrayBars[barTwoIdx].style.backgroundColor = color;
                  }, i * 1);
            } else {
                setTimeout(() => {
                    arrayBars[barOneIdx].style.height = `${barTwoIdx}px`;
                }, i * 1);
            }
        }
        this.setState({count: k});
        this.setState({limit: 15});
        this.setState({str : "Best: Ω(n*log(n)) | Average: θ(n*log(n)) | Worst: O(n*log(n))"});
      }

      medianQsort () {
        const [animations, k] = sortAlgos.medianQsort(this.state.array);
        const arrayBars = document.getElementsByClassName('arrayBar');
        for (let i = 0; i < animations.length; i++) {
            const [barOneIdx, barTwoIdx, k] = animations[i];
            if (k === 0 || k === 1) {
                setTimeout(() => {
                    const color = k === 0 ? 'red' : 'cyan';
                    arrayBars[barOneIdx].style.backgroundColor = color;
                    arrayBars[barTwoIdx].style.backgroundColor = color;
                  }, i * 1);
            } else {
                setTimeout(() => {
                    arrayBars[barOneIdx].style.height = `${barTwoIdx}px`;
                }, i * 1);
            }
        }
        this.setState({count: k});
        this.setState({limit: 15});
        this.setState({str : "Best: Ω(n*log(n)) | Average: θ(n*log(n)) | Worst: O(n*log(n))"});
      }

      heapingSort () {
        const [animations, k] = sortAlgos.heapSorting(this.state.array);
        const arrayBars = document.getElementsByClassName('arrayBar');
        for (let i = 0; i < animations.length; i++) {
            const [barOneIdx, barTwoIdx, k] = animations[i];
            if (k === 0 || k === 1) {
                setTimeout(() => {
                    const color = k === 0 ? 'red' : 'cyan';
                    arrayBars[barOneIdx].style.backgroundColor = color;
                  }, i * 1);
            } else {
                setTimeout(() => {
                    arrayBars[barOneIdx].style.height = `${barTwoIdx}px`;
                }, i * 1);
            }
        }
        this.setState({count: k});
        this.setState({limit: 19});
        this.setState({str : "Best: Ω(n*log(n)) | Average: θ(n*log(n)) | Worst: O(n*log(n))"});
      }

      radixSorting () {
        const [animations, k] = sortAlgos.radixSort(this.state.array);
        const arrayBars = document.getElementsByClassName('arrayBar');
        for (let i = 0; i < animations.length; i++) {
            const [barOneIdx, barTwoIdx, k] = animations[i];
            if (k === 0 || k === 1) {
                setTimeout(() => {
                    const color = k === 0 ? 'red' : 'cyan';
                    arrayBars[barOneIdx].style.backgroundColor = color;
                  }, i * 5);
            } else {
                setTimeout(() => {
                    arrayBars[barOneIdx].style.height = `${barTwoIdx}px`;
                }, i * 5);
            }
        }
        // this.setState({count: k});
        // this.setState({limit: 20});
        this.setState({str : "Best: Ω(n*k) | Average: θ(n*k) | Worst: O(n*k)"});
      }

    countSort () {
        const animations = sortAlgos.countSort(this.state.array);
        const arrayBars = document.getElementsByClassName('arrayBar');
        for (let i = 0; i < animations.length; i++) {
            const [barOneIdx, barTwoIdx, k] = animations[i];
            if (k === 0 || k === 1) {
                setTimeout(() => {
                    const color = k === 0 ? 'red' : 'cyan';
                    arrayBars[barOneIdx].style.backgroundColor = color;
                    arrayBars[barTwoIdx].style.backgroundColor = color;
                  }, i * 15);
            } else {
                setTimeout(() => {
                    arrayBars[barOneIdx].style.height = `${barTwoIdx}px`;
                }, i * 15);
            }
        }
        this.setState({str : "Best: Ω(n+k) | Average: θ(n+k) | Worst: O(n+k)"});
      }

      hybridSorting () {
        const [animations, k] = sortAlgos.hybridSort(this.state.array);
        const arrayBars = document.getElementsByClassName('arrayBar');
        for (let i = 0; i < animations.length; i++) {
            const [barOneIdx, barTwoIdx, k] = animations[i];
            if (k === 0 || k === 1) {
                setTimeout(() => {
                    const color = k === 0 ? 'red' : 'cyan';
                    arrayBars[barOneIdx].style.backgroundColor = color;
                    arrayBars[barTwoIdx].style.backgroundColor = color;
                  }, i * 1);
            } else {
                setTimeout(() => {
                    arrayBars[barOneIdx].style.height = `${barTwoIdx}px`;
                }, i * 1);
            }
        }
        this.setState({count: k});
        this.setState({limit: 12.5});
      }

      gnomeSort () {
        const [animations, k] = sortAlgos.gnomeSort(this.state.array);
        const arrayBars = document.getElementsByClassName('arrayBar');
        for (let i = 0; i < animations.length; i++) {
            const [barOneIdx, barTwoIdx, k] = animations[i];
            if (k === 0 || k === 1) {
                setTimeout(() => {
                    const color = k === 0 ? 'red' : 'cyan';
                    arrayBars[barOneIdx].style.backgroundColor = color;
                    arrayBars[barTwoIdx].style.backgroundColor = color;
                  }, i * .15);
            } else {
                setTimeout(() => {
                    arrayBars[barOneIdx].style.height = `${barTwoIdx}px`;
                }, i * .15);
            }
        }
        this.setState({count: k});
        this.setState({limit: 29});
        this.setState({str : "Best: Ω(n) | Average: θ(n^2) | Worst: O(n^2)"});
      }

      pancake () {
        const [animations, k] = sortAlgos.pancakeSort(this.state.array);
        const arrayBars = document.getElementsByClassName('arrayBar');
        for (let i = 0; i < animations.length; i++) {
            const [barOneIdx, barTwoIdx, k] = animations[i];
            if (k === 0 || k === 1) {
                setTimeout(() => {
                    const color = k === 0 ? 'red' : 'cyan';
                    arrayBars[barOneIdx].style.backgroundColor = color;
                    arrayBars[barTwoIdx].style.backgroundColor = color;
                  }, i * .08);
            } else {
                setTimeout(() => {
                    arrayBars[barOneIdx].style.height = `${barTwoIdx}px`;
                }, i * .08);
            }
        }
        this.setState({count: k});
        this.setState({limit: 18});
        this.setState({str : "Best: Ω(n^2) | Average: θ(n^2) | Worst: O(n^2)"});
      }

      binaryInsertion () {
        const [animations, k] = sortAlgos.binaryInsertionSort(this.state.array);
        const arrayBars = document.getElementsByClassName('arrayBar');
        for (let i = 0; i < animations.length; i++) {
            const [barOneIdx, barTwoIdx, k] = animations[i];
            if (k === 0 || k === 1) {
                setTimeout(() => {
                    const color = k === 0 ? 'red' : 'cyan';
                    arrayBars[barOneIdx].style.backgroundColor = color;
                    arrayBars[barTwoIdx].style.backgroundColor = color;
                  }, i * .3);
            } else {
                setTimeout(() => {
                    arrayBars[barOneIdx].style.height = `${barTwoIdx}px`;
                }, i * .3);
            }
        }
        this.setState({count: k});
        this.setState({limit: 43.7});
        this.setState({str : "Best: Ω(n) | Average: θ(n*log(n)) | Worst: O(n*log(n))"});
      }

      render () {
        const {array} = this.state;

        return (
            <div className = "arrayContainer" >
                {
                    array.map((value, idx) => (
                        <div className = "arrayBar" 
                        key = {idx}
                        style = {{height : `${value}px`}}
                        >
                            
                        </div>
                    ))
                }
                <hr/>
                <button onClick = {() => this.resetArray()} style = {{height : `$50px`}} className = "newArrayButton">Generate New Array</button>
                <p className = "numberOfComparisons">Number Of Comparisons : </p>
                <p className = "tcb">Time Complexity - </p><span className = "strclass">{this.state.str}</span>
                <br/>       
                <hr/>
                <div className = "sortButtons"> 
                <button className = "b1" onClick = {() => this.bubbleSort()}>Bubble Sort</button>
                <button className = "b1" onClick = {() => this.cockTail()}>Cocktail Sort</button>
                <button className = "b2" onClick = {() => this.selectionSort()}>Selection Sort</button>
                <button className = "b2" onClick = {() => this.pancake()}>Pancake Sort</button>
                <button className = "b3" onClick = {() => this.insertionSort()}>Insertion Sort</button>
                <button className = "b3" onClick = {() => this.gnomeSort()}>Gnome Sort</button>
                <button className = "b4" onClick = {() => this.shellSorting()}>Shell Sort</button>
                <button className = "b5" onClick = {() => this.binaryInsertion()}>Binary Insertion Sort</button>
                <button className = "b5" onClick = {() => this.mergeSort()}>Merge Sort</button><br/> <br/>
                <button className = "b6" onClick = {() => this.heapingSort()}>Heap Sort</button>
                <button className = "b7" onClick = {() => this.lomutoQuickSort()}>Lomuto Quick Sort</button>
                <button className = "b7" onClick = {() => this.hoareQuickSort()}>Hoare's Quick Sort</button>
                <button className = "b7" onClick = {() => this.randQsort()}>Randomized Quick Sort</button>
                <button className = "b7" onClick = {() => this.medianQsort()}>Median of 3-Partition Quick Sort</button>
                <button className = "b7" onClick = {() => this.hybridSorting()}>Hybrid Sort</button>
                <button className = "b8" onClick = {() => this.countSort()}>Counting Sort</button>
                <button className = "b8" onClick = {() => this.radixSorting()}>Radix Sort</button><hr/>
                </div>
                <p className = "countValue">
                {<CountUp duration={this.state.limit} start = {0} end={this.state.count}/>}
                </p>
                <p className = "footer">
                    <b>/*</b> priyanshuKansal . push_back ( sortingAlgorithmVisualiser ) <b>*/</b> 
                </p>
            </div>
            
        )
    };
}

export default SortVis;

function randomIntfromInterval (min, max) {
    return Math.floor(Math.random() * (max-min+1) + min);
}

// function areArraysEqual (a1, a2) {
//     if (a1.length !== a2.length) {
//         return false;
//     }
//     for (let i = 0; i < a1.length; ++i) {
//         if (a1[i] !== a1[i]) {
//             return false;
//         }
//     }
//     return true;
// }