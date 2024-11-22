import { describe, expect, it } from "@jest/globals";
import { closestToZeroString } from "./closest-to-zero-string";

describe ('closestToZeroString', () => {
    it('should return null if no value is given', () => {
        expect(closestToZeroString(' ')).toEqual("Hello, World!");
    });

});
