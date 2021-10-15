#!/usr/bin/env node
/* eslint-disable no-undef */
/* This script automates adding of the 'tw-' prefix to tailwind classes
  used in CSS files by detection of starting with '@apply' and ending with semicolon.
  
  Some caveats:
    - If there is a colon in the class, will skip to avoid breaking with variants and screens
*/

const fs = require("fs");
const path = require("path");

//copy pasta'd from StackOverflow... didn't want to import an entire package for this
const fromDir = (startPath, filter, callback) => {
  if (!fs.existsSync(startPath)) {
    console.log("no dir ", startPath);
    return;
  }

  const files = fs.readdirSync(startPath);
  for (let i = 0; i < files.length; i++) {
    const filename = path.join(startPath, files[i]);
    const stat = fs.lstatSync(filename);
    if (stat.isDirectory()) {
      fromDir(filename, filter, callback); //recurse
    } else if (filter.test(filename)) callback(filename);
  }
};

//Again, didn't use yargs here to avoid importing packages
const paths = process.argv.slice(2);

const twAdder = (str) => {
  const twStr = str.replace(/(?<=@apply\s)(.*)(?=;)/g, (match) => {
    const matches = match.split(/\s/);
    matches.forEach((match, i, arr) => {
      if (match.includes(":") || match.startsWith("tw-")) return;
      arr[i] = "tw-" + match;
    });
    return matches.join(" ");
  });
  return twStr;
};

const files = [];
paths.forEach((p) => {
  if (fs.lstatSync(p).isFile()) files.push(p);
  if (fs.lstatSync(p).isDirectory()) {
    fromDir(p, /\.css$/, (f) => {
      files.push(f);
    });
  }
});

files.forEach((f) => {
  if (!fs.lstatSync(f).isFile()) return;
  const fileStr = fs.readFileSync(f, "utf-8");
  const newFileStr = twAdder(fileStr);
  fs.writeFileSync(f, newFileStr);
});
