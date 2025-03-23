// https://leetcode.com/problems/longest-uncommon-subsequence-ii/

function getRegex(str: string): string {
    const result = [ str[0] ];

    for (let i=1; i<str.length; i++) {
        result.push(`[^${str[i]}]*`);
        result.push(str[i]);
    }

    return result.join('');
}

function findLUSlength(strs: string[]): number {
    const dict = {};
    const duplicateStrs: string[] = [];
    const singleStrs: string[] = [];
    let longestLUS = '';

    // 1. Check duplicate string
    strs.forEach(str => {
        if (!dict[str]) {
            dict[str] = 0;
        }

        dict[str] += 1;
    });

    // 2. Create group type of string    
    for (const [str, count] of Object.entries(dict)) {
        if (count == 1) {
            singleStrs.push(str);
        } else {
            duplicateStrs.push(str);
        }
    }

    // 3. Find logest non-duplicate string
    singleStrs.forEach(str => {
        let result: string = str;

        duplicateStrs.forEach(dupStr => {
            const regex = new RegExp(getRegex(str));
            const isMatch = regex.test(dupStr);
            if (isMatch) {
                result = '';
            }
        });

        if (result.length >= longestLUS.length) {
            longestLUS = result;
        }
    });
   
    return longestLUS.length || -1;
};