/**
 * @(#)tests.mjs    1.2.0   08/15/2023
 *
 * Copyright (c) Jonathan M. Parker
 * 324 Lantana Drive
 * Owings Mills, MD  21117 U.S.A
 * All Rights Reserved.
 */

import { adder } from "../src/index.mjs";
import { test } from "node:test";

import assert from "assert/strict";

test('synchronous passing adder', (t) => {
    // This test passes because it does not throw an exception.
    assert.strictEqual(adder(61, 24), 85);
});

test('asynchronous passing adder', async (t) => {
    // This test passes because the Promise returned by the async
    // function is not rejected.
    assert.strictEqual(adder(24, 61), 85);
});
