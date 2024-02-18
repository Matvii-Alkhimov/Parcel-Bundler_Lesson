import { add } from './js/add';
import { subtract } from './js/substract';
import { multiply } from './js/multiply';
import { divide } from './js/divide';
import { printResult } from './js/print-result';


let a = 10;
let b = 5;
let sum = add(a, b);
let difference = subtract(a, b);
let product = multiply(a, b);
let quotient = divide(a, b);
printResult(sum);
printResult(difference);
printResult(product);
printResult(quotient);