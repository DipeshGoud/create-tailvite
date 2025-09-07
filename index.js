#!/usr/bin/env node

import inquirer from 'inquirer';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';
import chalk from 'chalk';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TEMPLATE_NAME = 'React + JavaScript + Tailwind CSS v4.1';
const TEMPLATE_FOLDER = 'react-js-tailwind';

function validateProjectName(name) {
  if (!name || !name.trim()) {
    throw new Error('Project name is required');
  }
  if (!/^[a-zA-Z0-9-_]+$/.test(name.trim())) {
    throw new Error('Project name can only contain letters, numbers, hyphens, and underscores');
  }
  return name.trim();
}

async function getProjectName(args) {
  let projectName = args[0];
  
  if (!projectName) {
    const { name } = await inquirer.prompt([{
      type: 'input',
      name: 'name',
      message: 'Project name:',
      validate: input => {
        try {
          validateProjectName(input);
          return true;
        } catch (error) {
          return error.message;
        }
      }
    }]);
    projectName = name;
  }
  
  return validateProjectName(projectName);
}

async function main() {
   console.log(chalk.cyan.bold('\n🚀 Create Tailwind Vite'));
   console.log(chalk.gray(`Modern ${TEMPLATE_NAME} scaffolding\n`));

  try {
    const projectName = await getProjectName(process.argv.slice(2));
    
    if (fs.existsSync(projectName)) {
      console.error(chalk.red(`❌ Directory "${projectName}" already exists`));
      process.exit(1);
    }

    const templatePath = path.join(__dirname, 'templates', TEMPLATE_FOLDER);
    
    if (!fs.existsSync(templatePath)) {
      console.error(chalk.red('❌ Template not found'));
      process.exit(1);
    }

    console.log(chalk.cyan(`\n🚀 Creating ${projectName}...\n`));

    await fs.copy(templatePath, projectName);
    console.log(chalk.green('✅ Files copied'));
    console.log(chalk.blue('📦 Installing dependencies...'));

    const installProcess = spawn('npm', ['install'], {
      cwd: projectName,
      stdio: 'inherit',
      shell: true
    });

    installProcess.on('close', (code) => {
      if (code === 0) {
        console.log(chalk.green('\n🎉 Project ready!'));
        console.log(chalk.cyan('\nNext steps:'));
        console.log(chalk.white(`  cd ${projectName}`));
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