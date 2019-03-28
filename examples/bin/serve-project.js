#!/usr/bin/env node

const path = require('path');
const { execSync } = require('child_process');

const cwd = process.env.INIT_CWD;
let projectName = path.relative('projects', cwd);

if (projectName === '..') {
  projectName = '';
}

const args = `serve ${projectName}`;
execSync(`npm run ng ${args}`, { stdio: 'inherit', windowsHide: true });
