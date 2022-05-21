// At the time of writing, https://github.com/newyork-anthonyng/rubiks-cross-trainer doesn't support TypeScript.
// That is, `npm -i --save-dev @types/rubiks-cross-trainer` doesn't work.
//
// This files bridges the gap. Hat tip to https://bobbyhadz.com/blog/typescript-could-not-find-a-declaration-file-for-module-react
declare module "rubiks-cross-trainer";
