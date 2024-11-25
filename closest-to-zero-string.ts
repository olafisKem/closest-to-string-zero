export const closestToZeroString = (xs: string[]) => {
    if (xs.length === 0 || xs[0] === "") {
        return "";
    }
    if (xs.length === 1) {
        return xs[0];
    }
};
