#!/usr/bin/env node

import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';
import chalk from 'chalk';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function validateProjectName(name) {
  if (!name || !name.trim()) {
    throw new Error('Project name is required');
  }
  
  const trimmedName = name.trim();
  
  // Allow '.' for current directory
  if (trimmedName === '.') {
    return trimmedName;
  }
  
  if (!/^[a-zA-Z0-9-_]+$/.test(trimmedName)) {
    throw new Error('Project name can only contain letters, numbers, hyphens, and underscores');
  }
  return trimmedName;
}

async function main() {
  console.log(chalk.cyan.bold('\n🚀 Create Tailwind Vite'));
  console.log(chalk.gray('Modern React + Vite + Tailwind CSS scaffolding\n'));

  const projectName = process.argv[2];
  
  if (!projectName) {
    console.error(chalk.red('❌ Project name is required'));
    console.log(chalk.yellow('Usage: npx create-tailvite@latest <project-name>'));
    console.log(chalk.yellow('Examples:'));
    console.log(chalk.yellow('  npx create-tailvite@latest my-app'));
    console.log(chalk.yellow('  npx create-tailvite@latest .  # Create in current directory'));
    process.exit(1);
  }

  try {
    const validatedName = validateProjectName(projectName);
    const isCurrentDir = validatedName === '.';
    const targetDir = isCurrentDir ? process.cwd() : validatedName;
    const displayName = isCurrentDir ? 'current directory' : validatedName;
    
    // Check if target directory exists and is not empty (except for current dir)
    if (!isCurrentDir && fs.existsSync(validatedName)) {
      console.error(chalk.red(`❌ Directory "${validatedName}" already exists`));
      process.exit(1);
    }
    
    // For current directory, check if it's empty
    if (isCurrentDir) {
      const files = fs.readdirSync(targetDir).filter(file => !file.startsWith('.'));
      if (files.length > 0) {
        console.error(chalk.red('❌ Current directory is not empty'));
        console.log(chalk.yellow('Please run this command in an empty directory or specify a new folder name'));
        process.exit(1);
      }
    }

    const templatePath = path.join(__dirname, 'templates', 'react-js-tailwind');
    
    if (!fs.existsSync(templatePath)) {
      console.error(chalk.red('❌ Template not found'));
      process.exit(1);
    }

    console.log(chalk.cyan(`🚀 Creating project in ${displayName}...\n`));

    // Create directory if it doesn't exist
    if (!isCurrentDir) {
      await fs.ensureDir(validatedName);
    }
    
    await fs.copy(templatePath, targetDir);
    console.log(chalk.green('✅ Files copied'));
    console.log(chalk.blue('📦 Installing dependencies...'));

    const installProcess = spawn('npm', ['install'], {
      cwd: targetDir,
      stdio: 'inherit',
      shell: true
    });

    installProcess.on('close', (code) => {
      if (code === 0) {
        console.log(chalk.green('\n🎉 Project ready!'));
        console.log(chalk.cyan('\nNext steps:'));
        if (!isCurrentDir) {
          console.log(chalk.white(`  cd ${validatedName}`));
        }
        console.log(chalk.white('  npm run dev'));
      } else {
        console.error(chalk.red('❌ Installation failed'));
        console.log(chalk.yellow('Run "npm install" manually in the project directory'));
        process.exit(1);
      }
    });

  } catch (error) {
    console.error(chalk.red('❌ Error:'), error.message);
    process.exit(1);
  }
}

main().catch(console.error);