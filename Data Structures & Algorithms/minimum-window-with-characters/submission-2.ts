class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s: string, t: string): string {
       if (t.length > s.length) return "";

  const need = new Map<string, number>();
  for (const c of t) need.set(c, (need.get(c) ?? 0) + 1);

  const window = new Map<string, number>();
  let have = 0;
  const needCount = need.size;

  let left = 0;
  let result = "";
  let resultLen = Infinity;

  for (let right = 0; right < s.length; right++) {
    const c = s[right];
    window.set(c, (window.get(c) ?? 0) + 1);

    if (need.has(c) && window.get(c) === need.get(c)) {
      have++;
    }

    while (have === needCount) {
      if (right - left + 1 < resultLen) {
        resultLen = right - left + 1;
        result = s.substring(left, right + 1);
      }

      const leftChar = s[left];
      window.set(leftChar, window.get(leftChar)! - 1);
      if (need.has(leftChar) && window.get(leftChar)! < need.get(leftChar)!) {
        have--;
      }
      left++;
    }
  }

  return result;
    }
}
