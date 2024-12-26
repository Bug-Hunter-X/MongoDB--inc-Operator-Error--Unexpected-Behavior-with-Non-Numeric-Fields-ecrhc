# MongoDB $inc Operator Error: Unexpected Behavior with Non-Numeric Fields

This repository demonstrates a common error when using the `$inc` operator in MongoDB update operations.  The `$inc` operator is designed to increment a numeric field. However, if the field is not an integer or is not of the correct data type, unexpected behavior can occur. 

The `bug.js` file shows an example of this error, and `bugSolution.js` provides the correct solution.

## Problem
The `$inc` operator is used incorrectly on a field that is not an integer, which can lead to unexpected results or errors.

## Solution
Before using `$inc`, ensure the field exists and is a number.  You might want to use `$setOnInsert` to initialize the field if it does not exist or an alternative operation if you need a different handling approach for non-numeric fields.