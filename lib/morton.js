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
var morton = module.exports = function morton(x, y) {
    return (Y[y         & 0xFF] | X[x         & 0xFF]) +
           (Y[(y >> 8)  & 0xFF] | X[(x >> 8)  & 0xFF]) * 0x10000 +
           (Y[(y >> 16) & 0xFF] | X[(x >> 16) & 0xFF]) * 0x100000000;
};

var code = module.exports.code = function code(z, x, y) {
    if (z > 24) throw 'Morton codes are only supported up to Z=24';
    var Z = 1 << (24 - z);
    return morton(x * Z, y * Z);
};

var range = module.exports.range = function range(z, x, y) {
    if (z > 24) throw 'Morton ranges are only supported up to Z=24';
    var Z = 1 << (24 - z);
    var lower = morton(x * Z, y * Z);
    return [ lower, lower + Z * Z - 1 ];
};
