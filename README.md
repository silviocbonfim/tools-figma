# @tools/figma MCP Server

This project implements an MCP (Model Context Protocol) server for integration with the Figma API, allowing you to programmatically fetch images from Figma projects.

## Project Structure

```
src/
  api/        # Integration with external APIs (Figma)
  server/     # MCP server initialization and configuration
  tools/      # Implementation of tools exposed by MCP
  types/      # TypeScript types and interfaces
  index.ts    # Entry point
```

## How to Use

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set the environment variable:**
   Set the `FIGMA_ACCESS_TOKEN` variable with your Figma access token.
   
   On Windows (cmd):
   ```cmd
   set FIGMA_ACCESS_TOKEN=your_token_here
   ```
   On Linux/macOS (bash):
   ```bash
   export FIGMA_ACCESS_TOKEN=your_token_here
   ```

3. **Run the server:**
   ```bash
   npm start
   ```

## Functionality

- Exposes the `get-figma-image` tool via MCP, which receives a `projectId` and a `nodeId` and returns the corresponding image URL from Figma.

## Notes
- The project uses TypeScript and follows a modular architecture for easier maintenance and extensibility.
- The Figma token is required for operation.

## License
This project is the intellectual property of the company and its use, distribution, or modification are restricted according to corporate policy. All rights reserved.