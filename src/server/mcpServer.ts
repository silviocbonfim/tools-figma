// Inicialização e configuração do MCP Server
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { getFigmaImage, getFigmaImageParams } from "../tools/getFigmaImage.js";

export function createMcpServer() {
  const server = new McpServer({
    name: "@tools/figma",
    version: "1.0.0",
    description: "A tool to fetch images from Figma using the Figma API.",
    capabilities: {
      resources: {},
      tools: {
        "get-figma-image": {
          description: `Fetches an image from a specified Figma URL using the Figma API.\nRequires a valid Figma access token set in the FIGMA_ACCESS_TOKEN environment variable.`,
          parameters: getFigmaImageParams,
        },
      },
    },
  });

  server.tool(
    "get-figma-image",
    `This tool fetches an image from a specified Figma url. It calls the Figma API to generate a URL for the image, allowing easy access and retrieval.`,
    getFigmaImageParams,
    (args, _extra) => getFigmaImage(args)
  );

  return server;
}

export async function startServer() {
  const server = createMcpServer();
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error(`@tools/figma MCP Server running on stdio`);
}
