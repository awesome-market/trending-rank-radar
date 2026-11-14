> [!CAUTION]
> **This repository has been retired.** Claude is already a reasoning model with strong built-in thinking capabilities, making this project no longer necessary. Thank you to everyone who contributed and supported Thinking Claude!

# Thinking Claude

Let Claude think comprehensively before responding!

> **A super quick reminder:**
> Thinking claude **is not aimed for benchmarks or huge leaps in math or something**, since those are pre-determined by the base model (new Claude-3.5 Sonnet).
> I only want to explore how further we could reach with Claude's "deep mindset". That said, when using it in your daily tasks, you will find Claude's inner monolog (thinking process) very very fun and interesting.

## Demo

> It is supposed to work on both `Free` and `Pro` versions of [Claude Web App](https://claude.ai/) with `Claude 3.5 Sonnet` model.

Here is a demo of using the latest [Thinking Cluade Chrome extension](https://github.com/richards199999/Thinking-Claude/releases/download/chrome-extension-v3.2.3/thinking-claude-chrome-extension-v3.2.3.zip) (click to download v3.2.3 ) installed in Chrome with the chat of Claude (check [Browser Extension](https://github.com/richards199999/Thinking-Claude?tab=readme-ov-file#browser-extension) for more) featured with an instruction selector:

https://github.com/user-attachments/assets/afa0f64f-53e5-45bc-9ad8-0641b29d2b77

use in project with legacy extension:

https://github.com/user-attachments/assets/88ff0c75-c51b-42b9-a042-00d47053795a

## Overview

This project consists of two main components:

1. **Thinking Protocol**: A comprehensive set of instructions that guides Claude to think deeply and systematically before responding
2. **Browser Extension**: A tool that makes Claude's thinking process more readable and manageable in the browser interface

## Project Structure

```bash
thinking-claude/
├── extensions/
│   ├── chrome/          # Current version of Chrome extension
│   ├── chrome_v0/       # Legacy Chrome extension (deprecated)
│   ├── firefox/         # Firefox extension (in development)
│   └── changelog.md
├── model_instructions/
│   ├── changelog.md
│   ├── v5.1-extensive-20241201.md
│   ├── v5.1-20241125.md
│   ├── v5-lite-20241124.md
│   ├── v4-20241118.md
│   ├── v4-lite-20241118.md
│   └── v3.5-20241113.md
├── .github/             # GitHub configurations and workflows
├── .husky/             # Git hooks for development
├── LICENSE
└── README.md
```

The project is organized into two main components:

- `extensions/`: Browser extension implementations

  - `chrome/`: Current version with modern architecture and features
  - `chrome_v0/`: Legacy version (deprecated)
  - `firefox/`: Firefox version (in development)

- `model_instructions/`: Thinking protocols for different versions
  - Contains versioned instruction sets
  - Each version brings improvements to Claude's thinking process

## Thinking Protocol

The thinking protocol instructs Claude to follow a natural, thorough thought process before providing responses.

## Browser Extension

The browser extension makes Claude's thinking process easier to read and use! It automatically organizes Claude's thoughts into neat, collapsible sections.

### Features

- 🎯 Makes Claude's thinking process easy to read
- 🔄 Fold and unfold different parts of Claude's thoughts
- 📋 Copy any part with just one click
- ⚡ Works automatically with new messages
- 🎨 Clean, modern design that's easy on the eyes

### 🚀 Quick Install Guide

1. **Chrome Users (May be Outdated)**

   - Install directly from the [Chrome Web Store](https://chromewebstore.google.com/detail/thinking-claude/ncjafpbbndpggfhfgjngkcimeaciahpo)

2. **Manual Installation（Recommended - latest v3.2.3）**
   - Download the latest version from our [Releases Page](https://github.com/richards199999/Thinking-Claude/releases)
   - Unzip the file
   - Open Chrome and go to `chrome://extensions/`
   - Turn on "Developer mode" (top right corner)
   - Click "Load unpacked" and select the unzipped folder `dist`

👉 Want more details? Check out our [Extension Guide](extensions/chrome/README.md) for:

- Step-by-step installation instructions
- Development setup
- Advanced features and usage
- Troubleshooting tips

### 🎉 Getting Started

Once installed, just:

1. Visit [Claude.ai](https://claude.ai)
2. Click on the `Choose style` selector in the bottom of input box -> click on `Create & Edit Styles` -> click on `Create Custom Style` -> click on `Describe style manually` -> click on `Start from scratch` -> click on `Use custom instructions (advanced)` -> paste the content of the desired instruction set from `model_instructions/` folder
3. Start chatting with Claude
4. That's it! The extension will automatically make Claude's thinking process more readable

## Why Use Thinking Claude?

- **Better Reasoning**: Get more thorough and well-thought-out responses
- **Transparency**: See how Claude arrives at its conclusions
- **Improved Organization**: Manage long conversations more effectively
- **Quality Control**: Benefit from built-in verification steps

## Contributing

Contributions are welcome! Feel free to:

- Submit bug reports
- Propose new features
- Create pull requests

## License

MIT License - feel free to use and modify as needed.

## Acknowledgments

Special thanks to [@lumpinif](https://github.com/lumpinif) and Claude for the extension!
