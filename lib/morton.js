// Morton lookup tables.
// Based on http://graphics.stanford.edu/~seander/bithacks.html#InterleaveTableLookup
var X = [ 0, 1 ], Y = [ 0, 2 ];
for (var i = 4; i < 0xFFFF; i <<= 2) {
    for (var j = 0, l = X.length; j < l; j++) {
        X.push((X[j] | i));
        Y.push((X[j] | i) << 1);
    }
}

// Only works for 24 bit input numbers (up to 16777215).
module.exports = function morton(x, y) {
    return (Y[y         & 0xFF] | X[x         & 0xFF]) +
           (Y[(y >> 8)  & 0xFF] | X[(x >> 8)  & 0xFF]) * 0x10000 +
           (Y[(y >> 16) & 0xFF] | X[(x >> 16) & 0xFF]) * 0x100000000;
};
