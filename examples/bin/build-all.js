#!/usr/bin/env node

const path = require('path');
const { execSync } = require('child_process');
const { readdirSync } = require('fs');

const projectsDir = path.resolve(__dirname, '../projects');

const projects = readdirSync(projectsDir, { withFileTypes: true })
    .filter(entry => entry.isDirectory())
    .map(entry => entry.name);

projects.forEach(name => {
  console.log(`Building ${name}`);

  const dir = path.join(projectsDir, name);
  const cmd = `node --max_old_space_size=8192 ../../node_modules/@angular/cli/bin/ng build --no-progress ${name}`;
  execSync(cmd, { stdio: 'inherit', windowsHide: true, cwd: dir });

  console.log('Success.\n');
});
