@'
const { Storage } = require('@google-cloud/storage');
const fs = require('fs');

async function testConnection() {
  const credentialPath = process.env.GOOGLE_APPLICATION_CREDENTIALS;
  
  console.log('--- DIAGNOSTIC CHECK ---');
  console.log(`1. Environment Variable Path: ${credentialPath}`);

  if (!credentialPath) {
    console.error('❌ Error: GOOGLE_APPLICATION_CREDENTIALS environment variable is empty in this terminal tab.');
    return;
  }

  if (!fs.existsSync(credentialPath)) {
    console.error(`❌ Error: The file does not exist at that path. Check your folder or file name!`);
    return;
  }
  console.log('✅ Credential file located successfully.');

  // Explicitly mapping your project ID from the console
  const storage = new Storage({
    projectId: 'project-7ee9ba0e-6038-467d-83a'
  });
  const bucketName = 'topmoneytools-knowledge-base';

  try {
    console.log(`2. Connecting to bucket: "${bucketName}"...`);
    const [files] = await storage.bucket(bucketName).getFiles({ maxResults: 5 });
    
    console.log('✅ Connection successful! Localhost is officially paired.');
    if (files.length === 0) {
      console.log('The bucket is currently empty. Ready for your data!');
    } else {
      console.log('Found existing documents:');
      files.forEach(file => console.log(` - ${file.name}`));
    }
  } catch (error) {
    console.error('❌ Connection failed.');
    console.error(`Error details: ${error.message}`);
  }
}

testConnection();
'@ | Out-File -FilePath test-storage.js -Encoding utf8
