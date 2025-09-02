#!/usr/bin/env node

/**
 * Simple demo script for Palletizr Astro Components
 */

import http from 'http';

console.log('🚀 Palletizr Astro Components Demo');
console.log('=====================================\n');

// Check if dev server is running
function checkServer() {
  return new Promise((resolve) => {
    const req = http.request({
      hostname: 'localhost',
      port: 4321,
      path: '/',
      method: 'GET',
      timeout: 2000
    }, (res) => {
      resolve(true);
    });
    
    req.on('error', () => resolve(false));
    req.on('timeout', () => resolve(false));
    req.end();
  });
}

async function main() {
  console.log('Checking if development server is running...');
  
  const isRunning = await checkServer();
  
  if (isRunning) {
    console.log('✅ Development server is running!');
    console.log('\n📱 You can now:');
    console.log('   • View the demo at: http://localhost:4321/');
    console.log('   • Test the component at: http://localhost:4321/test');
    console.log('\n🔄 To stop the server, press Ctrl+C in the terminal running "npm run dev"');
  } else {
    console.log('❌ Development server is not running');
    console.log('\n🚀 To start the server:');
    console.log('   npm run dev');
    console.log('\n📖 For more information, see README.md');
  }
}

main().catch(console.error);
