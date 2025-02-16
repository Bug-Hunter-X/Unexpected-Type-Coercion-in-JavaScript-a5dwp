# Unexpected Type Coercion in JavaScript
This repository demonstrates a common JavaScript error caused by the language's loose typing system.  Specifically, the example shows how the + operator handles type coercion when adding numbers and strings.

## Bug
The `foo` function is intended to add two numbers. However, when a string or array is passed as an argument, the + operator performs string concatenation instead of numerical addition.  This leads to unexpected results. 

## Solution
The solution involves using strict comparison (`===`) and type checking before performing the addition to ensure both operands are numbers. If they are not numbers, error handling can be implemented. 