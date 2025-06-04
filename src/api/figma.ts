// Lógica de integração com a API do Figma
import { FigmaImageResponse } from "../types/figma.js";

const figmaApiUrl = "https://api.figma.com/v1/images";

export async function fetchFigmaImage(projectId: string, nodeId: string, figmaAccessToken: string): Promise<FigmaImageResponse> {
  const response = await fetch(`${figmaApiUrl}/${projectId}?ids=${nodeId}`, {
    headers: {
      "X-Figma-Token": figmaAccessToken
    }
  });
  return response.json();
}
