import { describe, expect, it } from "@jest/globals";
import { closestToZeroString } from "./closest-to-zero-string";

describe ('closestToZeroString', () => {
    it('should return an empty string', () => {
        expect(closestToZeroString([])).toEqual("");
    });
    it('should return the one string in the array', () => {
        expect(closestToZeroString(['Zero'])).toBe('Zero');
        expect(closestToZeroString(['One'])).toBe('One');
    });
});
