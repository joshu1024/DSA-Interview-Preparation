/*
Problem: Product of Array Except Self
Pattern: Prefix & Suffix Products
Difficulty: Medium

Brute Force:
For each element, iterate through the array and
multiply every other element except itself.

Time: O(n²)
Space: O(1)

Optimized:
Use the output array to store prefix products.
In the first pass, store the product of all elements
to the left of each index.

In the second pass, maintain a running suffix product
and multiply it with the corresponding prefix product.

This eliminates the need for division and computes
the result in linear time.

Time: O(n)
Space: O(1) (excluding the output array)
*/

function productExceptSelf(nums) {
  let n = nums.length;
  const result = new Array(n).fill(1);
  let leftProduct = 1;
  for (let i = 0; i < n; i++) {
    result[i] = leftProduct;
    leftProduct *= nums[i];
  }

  let rightProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= rightProduct;
    rightProduct *= nums[i];
  }
  return result;
}
const nums = [1, 2, 3, 4];
productExceptSelf(nums);
