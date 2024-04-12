exports.loadSound = (() => {
    const cache = {};
    return (path) => {
        const c = cache[path];
        if (c === undefined) {
            return cache[path] = Vars.tree.loadSound(path);
        }
        return c;
    }
})();
exports.loadMusic = (() => {
    const cache = {};
    return (path) => {
        const c = cache[path];
        if (c === undefined) {
            return cache[path] = Vars.tree.loadMusic(path);
        }
        return c;
    }
})();