class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
         const window = new Map<string, number>();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    const char = s[right];

    // 1. PRIMERO agregas el carácter actual al Map (esto te faltaba)
    window.set(char, (window.get(char) ?? 0) + 1);

    // 2. calculas cuál es la letra más frecuente DENTRO de la ventana actual
    const maxFreq = Math.max(...window.values());

    // 3. el while corre CUANDO la ventana es INVÁLIDA (al revés de lo que escribiste)
    while ((right - left + 1) - maxFreq > k) {
      const leftChar = s[left];
      window.set(leftChar, window.get(leftChar)! - 1);
      left++;
    }

    // 4. recién aquí, con la ventana ya válida, actualizas la respuesta
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;

    }
}

