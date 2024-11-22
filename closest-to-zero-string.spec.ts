import { describe, expect, it } from "@jest/globals";
import { closestToZeroString } from "./closest-to-zero-string";

describe ('closestToZeroString', () => {
    it('should return an empty string', () => {
        expect(closestToZeroString(' ')).toEqual(' ');
    });

});
