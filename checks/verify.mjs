import assert from 'node:assert/strict';
import { setTimeout as sleep } from 'node:timers/promises';
import { multiply } from '../src/math.mjs';
// Gives the owned SDK crash/cancellation proof a bounded real in-container command window.
console.log('FF042_VERIFY_RUNNING');
await sleep(60_000);
assert.equal(multiply(3, 4), 12);
assert.equal(multiply(-3, 4), -12);
assert.equal(multiply(-3, -4), 12);
assert.equal(multiply(0, 9), 0);
console.log('FF042_POSITIVE_NEGATIVE_CHECKS_PASSED');
