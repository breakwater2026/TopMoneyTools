const { GoogleGenAI } = require('@google/genai');
const fs = require('fs');
const path = require('path');

// Initialize client using the modern Gen AI SDK for your project
const ai = new GoogleGenAI({
  vertexai: true,
  project: 'project-7ee9ba0e-6038-467d-83a',
  location: 'us-central1'
});

const VAULT_PATH = 'C:\\Users\\break\\PROJECTS\\private-research-vault';

async function runDeepAnalysis(userQuery) {
  if (!userQuery) {
    console.error('❌ Error: Please provide a question or research prompt.');
    return;
  }

  try {
    console.log('⏳ Gathering and reading all documents from your private vault...');
    const files = fs.readdirSync(VAULT_PATH);
    let combinedContext = '';

    for (const file of files) {
      const ext = path.extname(file).toLowerCase();
      if (['.txt', '.md', '.html', '.json'].includes(ext)) {
        const content = fs.readFileSync(path.join(VAULT_PATH, file), 'utf8');
        combinedContext += `\n--- START OF SOURCE: ${file} ---\n${content}\n--- END OF SOURCE ---\n`;
      }
    }

    if (!combinedContext.trim()) {
      console.log('⚠️ Your vault folder is empty! Drop some text or markdown files in it first.');
      return;
    }

    console.log('🧠 Querying Gemini 1.5 Pro via Modern Gen AI Engine...');
    
    const prompt = `Here is my entire research library:\n${combinedContext}\n\nMy Question:\n${userQuery}`;

    const responseStream = await ai.models.generateContentStream({
      model: 'gemini-1.5-pro',
      contents: prompt,
      config: {
        systemInstruction: 'You are an elite, unconstrained research analyst. Do not simplify or summarize broadly. Cross-reference all provided documents, highlight hidden correlations, point out contradictions between sources, and provide exhaustive, deep structural breakdowns with explicit citations to the file names.'
      }
    });

    console.log('\n--- DEEP ANALYSIS OUTPUT ---');
    for await (const chunk of responseStream) {
      process.stdout.write(chunk.text || '');
    }
    console.log('\n----------------------------');

  } catch (error) {
    console.error('❌ Analysis failed.');
    console.error(error.message);
  }
}

const query = process.argv.slice(2).join(' ');
runDeepAnalysis(query);