import { describe, expect, it } from "@jest/globals";
import { closestToZeroString } from "./closest-to-zero-string";

describe ('closestToZeroString', () => {
    it('should return an empty string', () => {
        expect(closestToZeroString([])).toEqual([]);
    });
    it('should return the string if the array has one string', () => {
        expect(closestToZeroString([0])).toEqual([0]);
    });
});
