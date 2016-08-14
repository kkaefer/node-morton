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
    if (z > 24) throw new Error('Morton codes are only supported up to Z=24');
    var Z = 1 << (24 - z);
    return morton(x * Z, y * Z);
};

var range = module.exports.range = function range(z, x, y) {
    if (z > 24) throw new Error('Morton ranges are only supported up to Z=24');
    var Z = 1 << (24 - z);
    var lower = morton(x * Z, y * Z);
    return [ lower, lower + Z * Z - 1 ];
};

var rX, rY;
var reverse = module.exports.reverse = function reverse(c) {
    if (c > 0xFFFFFFFFFFFF) throw new Error('Only morton codes up to 48 bits are supported.');
    if (!rX) {
        // Create reverse lookup tables.
        rX = {}; rY = {};
        for (var i = 0; i < 256; i++) {
            rX[morton(i, 0)] = i;
            rY[morton(0, i)] = i;
        }
    }

    var x = rX[c & 0x5555];
    var y = rY[c & 0xAAAA];
    if (c > 0xFFFF) {
        c /= 0x10000;
        x |= rX[c & 0x5555] << 8;
        y |= rY[c & 0xAAAA] << 8;
        if (c > 0xFFFF) {
            c /= 0x10000;
            x |= rX[c & 0x5555] << 16;
            y |= rY[c & 0xAAAA] << 16;
        }
    }

    return [ x, y ];
};

var decode = module.exports.decode = function decode(z, c) {
    var output = reverse(c);
    var Z = 1 << (24 - z);
    return [ output[0] / Z, output[1] / Z ];
};
