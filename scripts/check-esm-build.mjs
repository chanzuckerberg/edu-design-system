/* eslint-env node */

/**
 * Smoke test for the built ESM output (lib/*.mjs), run in plain Node after `yarn build`.
 *
 * Unit tests import from src/, where the test runner's module interop can hide problems that only show up when
 * consumers load the published ESM build (e.g., a CJS dependency's default export resolving to `module.exports`).
 */
import assert from 'node:assert/strict';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { Avatar } from '@chanzuckerberg/eds';

const cases = [
  ['John Smith', 'JS'],
  ['Ãndrew 🙂', 'Ã🙂'],
  ['👦🏽🧶', '👦🏽'],
  ['🧙‍♂️', '🧙‍♂️'],
];

for (const [fullName, expectedInitials] of cases) {
  assert.ok(
    renderToStaticMarkup(
      createElement(Avatar, { user: { fullName } }),
    ).includes(`>${expectedInitials}</span>`),
    `Avatar for "${fullName}" should render initials "${expectedInitials}"`,
  );
}

console.log('ESM build check passed');
