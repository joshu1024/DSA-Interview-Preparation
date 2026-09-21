/*
Problem: Search a 2D Matrix
Pattern: Binary Search
Difficulty: Medium

Brute Force:
Use two loops to examine every element in the matrix.

The outer loop goes through each row, while the inner
loop goes through each element in that row.

For every element:

* Compare the element with the target.
* If they are equal, return true.
* Continue searching if they are different.

If all elements are checked and the target is not found,
return false.

If the matrix has m rows and n columns, there can be
m * n elements to examine.

Time: O(m * n)
Space: O(1)

Optimized:
Treat the entire 2D matrix as one sorted 1D array.

Because:

* Each row is sorted.
* The first element of each row is greater than the
  last element of the previous row.

The entire matrix is therefore sorted when viewed as
one continuous sequence.

Use Binary Search over the virtual 1D array.

The search range is:

left = 0
right = rows * columns - 1

For every iteration:

* Calculate mid.
* Convert the 1D index into a row and column.

row = Math.floor(mid / columns)
column = mid % columns

Then access:

matrix[row][column]

If the value equals the target, return true.

If the value is smaller than the target, search the
right half.

If the value is greater than the target, search the
left half.

If the target is not found, return false.

Time: O(log(m * n))
Space: O(1)

Time Complexity:
The brute-force solution may examine every element in
the matrix.

With m rows and n columns:

m * n elements

Therefore:

Time = O(m * n)

The optimized solution treats those m * n elements as
one sorted sequence and uses Binary Search.

The search space is repeatedly divided by 2:

m*n → m*n/2 → m*n/4 → m*n/8 → ...

Therefore:

Time = O(log(m * n))

Space Complexity:
O(1) because the algorithm only uses a fixed number of
variables and does not create another matrix or array.

Where:
m = number of rows
n = number of columns
matrix = sorted 2D matrix
target = value being searched for
left = left boundary of the virtual 1D search space
right = right boundary of the virtual 1D search space
mid = middle index in the virtual 1D array
row = row corresponding to mid
column = column corresponding to mid
value = matrix[row][column]
*/
function searchMatrix(matrix, target) {
  const rows = matrix.length;
  const columns = matrix[0].length;

  let left = 0;
  let right = rows * columns - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    const row = Math.floor(mid / columns);
    const column = mid % columns;

    const value = matrix[row][column];

    if (value === target) {
      return true;
    }

    if (value < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
}
const matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
const target = 3;
