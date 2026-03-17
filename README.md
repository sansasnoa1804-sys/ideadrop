# IdeaDrop 💡

AI-powered business idea validation tool.

## Setup in 3 steps

### 1. Get your Anthropic API key
- Go to https://console.anthropic.com
- Create an account and generate an API key
- It costs ~$2-5/month depending on usage

### 2. Add your API key
Open these 2 files and replace `YOUR_ANTHROPIC_API_KEY_HERE` with your real key:
- `js/main.js` (line 5)
- `js/analysis.js` (line 5)

### 3. Deploy for free on Vercel
1. Go to https://vercel.com and create a free account
2. Click "Add New Project"
3. Drag and drop your `ideadrop` folder
4. Click Deploy — you're live in 30 seconds!

## Project Structure

```
ideadrop/
├── index.html        → Landing page
├── analysis.html     → Analysis result page
├── auth.html         → Login / Sign up
├── history.html      → Past analyses
├── css/
│   └── style.css     → All styles
└── js/
    ├── main.js       → Landing page logic
    ├── analysis.js   → AI analysis (Claude API)
    ├── auth.js       → Authentication
    └── history.js    → History page
```

## Features
- ✅ AI-powered business idea analysis
- ✅ Viability score with animated gauge
- ✅ Market analysis, personas, revenue model
- ✅ Risks, competitors, 5 launch steps
- ✅ Analysis history
- ✅ Free/Premium tier system
- ✅ Share score feature
- ✅ Fully responsive mobile design

## Notes
- Auth uses localStorage (simple, works offline). For production, replace with Supabase.
- PDF export uses browser print. For a real PDF, add a library like jsPDF.
