/*
Problem: Median of Two Sorted Arrays
Pattern: Binary Search / Partitioning
Difficulty: Hard

Brute Force:
Combine both sorted arrays into one array.

Then:

* Sort the combined array.
* Find the middle element if the total length is odd.
* If the total length is even, average the two middle
  elements.

If nums1 has m elements and nums2 has n elements,
the combined array contains m + n elements.

Sorting the combined array takes:

O((m + n) log(m + n))

Time: O((m + n) log(m + n))
Space: O(m + n)

Optimized:
Use Binary Search on the smaller array to find the
correct partition between the two arrays.

The goal is to divide both arrays into a left half and
a right half such that:

* The left half contains half of all elements.
* Every element on the left is <= every element on
  the right.

Let:

m = nums1.length
n = nums2.length

Always binary search the smaller array.

Choose a partition in nums1:

partition1

The partition in nums2 is determined automatically:

partition2 =
Math.floor((m + n + 1) / 2) - partition1

For each partition, identify four boundary values:

left1  = largest value on the left of nums1
right1 = smallest value on the right of nums1

left2  = largest value on the left of nums2
right2 = smallest value on the right of nums2

The partition is correct when:

left1 <= right2
AND
left2 <= right1

If:

left1 > right2

the partition in nums1 is too far to the right.
Move the partition left.

right = partition1 - 1

If:

left2 > right1

the partition in nums1 is too far to the left.
Move the partition right.

left = partition1 + 1

Once the correct partition is found:

For an odd total number of elements:

median = max(left1, left2)

For an even total number of elements:

median =
(max(left1, left2) + min(right1, right2)) / 2

Time: O(log(min(m, n)))
Space: O(1)

Time Complexity:
The brute-force approach creates a combined array and
sorts it.

For m + n total elements:

Sorting = O((m + n) log(m + n))

The optimized solution performs Binary Search only on
the smaller array.

There are at most min(m, n) possible partition positions.

Binary Search reduces these possibilities by half:

min(m,n)
→ min(m,n)/2
→ min(m,n)/4
→ min(m,n)/8
→ ...

Therefore:

Time = O(log(min(m, n)))

Space Complexity:
O(1) because no merged array is created and only a fixed
number of variables are used.

Where:
m = number of elements in nums1
n = number of elements in nums2
nums1 = first sorted array
nums2 = second sorted array
left = left boundary of Binary Search
right = right boundary of Binary Search
partition1 = partition position in nums1
partition2 = partition position in nums2
left1 = largest value on the left side of nums1
right1 = smallest value on the right side of nums1
left2 = largest value on the left side of nums2
right2 = smallest value on the right side of nums2
*/

function findMedianSortedArrays(nums1, nums2) {
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  const m = nums1.length;
  const n = nums2.length;

  let left = 0;
  let right = m;

  const leftSize = Math.floor((m + n + 1) / 2);

  while (left <= right) {
    const partition1 = Math.floor((left + right) / 2);
    const partition2 = leftSize - partition1;

    const left1 = partition1 === 0 ? -Infinity : nums1[partition1 - 1];

    const right1 = partition1 === m ? Infinity : nums1[partition1];

    const left2 = partition2 === 0 ? -Infinity : nums2[partition2 - 1];

    const right2 = partition2 === n ? Infinity : nums2[partition2];

    if (left1 > right2) {
      right = partition1 - 1;
    } else if (left2 > right1) {
      left = partition1 + 1;
    } else {
      if ((m + n) % 2 === 1) {
        return Math.max(left1, left2);
      }

      return (Math.max(left1, left2) + Math.min(right1, right2)) / 2;
    }
  }
}
const nums1 = [1, 3];
const nums2 = [2];
