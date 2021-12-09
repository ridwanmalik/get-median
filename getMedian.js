function getMedian(nums1, nums2) {
  const m = nums1.length;
  const n = nums2.length;
  let i = 0, j = 0, count = 0, m1 = -1, m2 = -1, result = 0;

  if ((m + n) % 2 === 1) {
    for (count = 0; count <= ((m + n) / 2); count++) {
      if (i != m && j != n) {
        m1 = (nums1[i] > nums2[j]) ? nums2[j++] : nums1[i++];
      } else if (i < m) {
        m1 = nums1[i++];
      } else {
        m1 = nums2[j++];
      }
    }
    result = m1;
  } else {
    for (count = 0; count <= ((m + n) / 2); count++) {
      m2 = m1;
      if (i != m && j != n) {
        m1 = (nums1[i] > nums2[j]) ? nums2[j++] : nums1[i++];
      } else if (i < m) {
        m1 = nums1[i++];
      } else {
        m1 = nums2[j++];
      }
    }
    result = (m1 + m2) / 2;
  }
  return result.toFixed(5);
}

// Example 1
let ar1 = [1, 3];
let ar2 = [2];
console.log("Example 1: ", getMedian(ar1, ar2));

// Example 2
ar1 = [1, 2];
ar2 = [3, 4];
console.log("Example 2: ", getMedian(ar1, ar2));

// Example 3
ar1 = [0, 0];
ar2 = [0, 0];
console.log("Example 3: ", getMedian(ar1, ar2));

// Example 4
ar1 = [];
ar2 = [1];
console.log("Example 4: ", getMedian(ar1, ar2));

// Example 5
ar1 = [2];
ar2 = [];
console.log("Example 5: ", getMedian(ar1, ar2));
