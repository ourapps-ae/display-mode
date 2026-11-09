import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createMode, displayCapabilities } from '../implementation/web/mode.ts';

test('display denies every private capability',async()=>{
  const cases=JSON.parse(await readFile(new URL('./fixtures/modes.json',import.meta.url)));
  for (const {display,...expected} of cases) assert.deepEqual(displayCapabilities(display),expected);
});
test('publication updates state before dispatch and keeps instances independent',()=>{
  globalThis.document={documentElement:{dataset:{}}};
  globalThis.window=new EventTarget();
  const mode=createMode('player','example:mode');
  const other=createMode('board','other:mode');
  const events=[];
  window.addEventListener('example:mode',event=>events.push([event.detail.mode,mode.current(),document.documentElement.dataset.mode]));
  mode.publish('board'); mode.publish('player');
  assert.deepEqual(events,[['board','board','board'],['player','player','player']]);
  assert.equal(other.current(),'board');
});
