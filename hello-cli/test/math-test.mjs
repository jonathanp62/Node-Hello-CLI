/**
 * (#)tests.mjs 1.2.0   08/15/2023
 *
 * Copyright (c) Jonathan M. Parker
 * 324 Lantana Drive
 * Owings Mills, MD  21117 U.S.A
 * All Rights Reserved.
 */

import { add, multiply, subtract } from "../src/utils/math.mjs";
import { test } from "node:test";

import assert from "assert/strict";

test('synchronous passing add', (t) => {
    // This test passes because it does not throw an exception.
    assert.strictEqual(add(61, 24), 85);
});

test('asynchronous passing add', async (t) => {
    // This test passes because the Promise returned by the async
    // function is not rejected.
    assert.strictEqual(add(24, 61), 85);
});

test('synchronous passing subtract', (t) => {
    // This test passes because it does not throw an exception.
    assert.strictEqual(subtract(61, 24), 37);
});

test('asynchronous passing subtract', async (t) => {
    // This test passes because the Promise returned by the async
    // function is not rejected.
    assert.strictEqual(subtract(24, 61), -37);
});

test('synchronous passing multiply', (t) => {
    // This test passes because it does not throw an exception.
    assert.strictEqual(multiply(61, 24), 1464);
});

test('asynchronous passing multiply', async (t) => {
    // This test passes because the Promise returned by the async
    // function is not rejected.
    assert.strictEqual(multiply(24, 61), 1464);
});
