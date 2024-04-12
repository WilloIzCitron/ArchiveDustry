exports.loadSound = (() => {
    const cache = {};
    return (path) => {
        const c = cache[path];
        if (c === undefined) {
            return cache[path] = loadSound(path);
        }
        return c;
    }
})();
exports.loadMusic = (() => {
    const cache = {};
    return (path) => {
        const c = cache[path];
        if (c === undefined) {
            return cache[path] = loadMusic(path);
        }
        return c;
    }
})();