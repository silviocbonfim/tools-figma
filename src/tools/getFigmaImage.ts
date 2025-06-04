// Implementação da ferramenta get-figma-image
import { z } from "zod";
import { fetchFigmaImage } from "../api/figma.js";
import { FigmaImageResponse } from "../types/figma.js";

const figmaAccessToken = process.env.FIGMA_ACCESS_TOKEN;

export const getFigmaImageParams = {
  nodeId: z.string().describe(
    `The node ID found in a Figma URL after the \"node-id=\" parameter.\nExample: In \"https://www.figma.com/file/abcXYZ/MyDesign?node-id=123-456&...\", the node ID is \"123:456\"`
  ),
  projectId: z.string().describe(
    `The project ID found in a Figma URL after \"/file/\" and before the next "/".\nExample: In \"https://www.figma.com/file/abcXYZ/MyDesign?node-id=123-456&...\", the project ID is \"abcXYZ\"`
  ),
};

export async function getFigmaImage({ projectId, nodeId }: { projectId: string; nodeId: string }) {
  if (!figmaAccessToken) {
    return {
      content: [
        {
          type: "text" as const,
          text: "Figma access token is not set. Please set the FIGMA_ACCESS_TOKEN environment variable.",
        },
      ],
      _meta: {},
    };
  }
  const data: FigmaImageResponse = await fetchFigmaImage(projectId, nodeId, figmaAccessToken);
  if (data.err) {
    return {
      content: [
        {
          type: "text" as const,
          text: `Error fetching Figma image: ${data.err}`,
        },
      ],
      _meta: {},
    };
  }
  const imageUrl = data.images[`${nodeId}`];
  if (!imageUrl) {
    return {
      content: [
        {
          type: "text" as const,
          text: "No image found for the specified node ID.",
        },
      ],
      _meta: {},
    };
  }
  return {
    content: [
      {
        type: "text" as const,
        text: `Image URL: ${imageUrl}`,
      },
    ],
    _meta: {},
  };
}
