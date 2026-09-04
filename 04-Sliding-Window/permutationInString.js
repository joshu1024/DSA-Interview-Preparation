function checkInclusion(s1, s2) {
  if (s1.length > s2.length) {
    return false;
  }

  let need = {};
  let window = {};

  for (let char of s1) {
    need[char] = (need[char] || 0) + 1;
  }

  let left = 0;

  for (let right = 0; right < s2.length; right++) {
    let char = s2[right];

    window[char] = (window[char] || 0) + 1;

    // keep window size equal to s1 length
    if (right - left + 1 > s1.length) {
      window[s2[left]]--;

      if (window[s2[left]] === 0) {
        delete window[s2[left]];
      }

      left++;
    }

    if (sameFrequency(need, window)) {
      return true;
    }
  }

  return false;
}

function sameFrequency(a, b) {
  if (Object.keys(a).length !== Object.keys(b).length) {
    return false;
  }

  for (let key in a) {
    if (a[key] !== b[key]) {
      return false;
    }
  }

  return true;
}
const s1 = "ab";
const s2 = "eidbaooo";
