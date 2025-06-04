// Ponto de entrada do projeto
import { startServer } from "./server/mcpServer.js";

startServer().catch((error: unknown) => {
  console.error("Fatal error in main():", error);
  process.exit(1);
});