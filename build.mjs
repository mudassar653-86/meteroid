import { mkdir, copyFile, readFile } from 'node:fs/promises';

const source = 'index.html';
const output = 'dist/index.html';
const html = await readFile(source, 'utf8');

if (!html.includes('<!DOCTYPE html>')) throw new Error('index.html is missing a valid doctype.');
if (!html.includes('Meteor Dodge Duel')) throw new Error('Game title not found.');
if (!html.includes('localStorage')) throw new Error('Expected localStorage persistence is missing.');

await mkdir('dist', { recursive: true });
await copyFile(source, output);
console.log(`Built ${output}`);
