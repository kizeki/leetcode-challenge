// https://leetcode.com/problems/longest-uncommon-subsequence-i/

function findLUSlength(a: string, b: string): number {
    const aLength = a.replace(b, '').length;
    const bLength = b.replace(a, '').length;
    let max =  -1;
    if (aLength > 0 && aLength >= bLength) {
        max = a.length;
    } else if (bLength > 0 && bLength >= aLength) {
        max = b.length;
    }

    return max;
};
