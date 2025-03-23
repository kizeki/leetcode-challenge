// https://leetcode.com/problems/longest-substring-without-repeating-characters/

function lengthOfLongestSubstring(s: string): number {
    let maxLength = 0;
    let isChecking = true;

    if (!s) return 0;
    
    let leftIndex = 0;
    let rightIndex = 1;
    while (isChecking) {
        const char = s[rightIndex - 1];
        const tmpStr = s.slice(leftIndex, rightIndex - 1);
        const windowStr = s.slice(leftIndex, rightIndex);
        
        if (tmpStr.indexOf(char) >= 0) {
            leftIndex++;
            continue;
        }

        if (windowStr.length > maxLength) {
            maxLength = windowStr.length;
        }

        rightIndex++;

        if (rightIndex == s.length + 1) {
            isChecking = false;
        }
    }    

    return maxLength;
};