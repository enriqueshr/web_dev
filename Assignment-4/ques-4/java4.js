function printTriangle(n) {
    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += '*';
        }
        console.log(row);
    }
}

// Example usage:
// printTriangle(5);
printTriangle(10);
/*
Output:
*
**
***
****
*****
*/