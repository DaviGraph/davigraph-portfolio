import { defineTool, ToolError } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { projects } from "../data";

export default defineTool({
  name: "get_project",
  title: "Get project",
  description: "Get full details for one portfolio project by name (case-insensitive).",
  inputSchema: {
    name: z.string().describe("Project name, e.g. CrossDrop, ElonVest, StudyPadi or ARIA."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ name }) => {
    const project = projects.find((p) => p.name.toLowerCase() === name.trim().toLowerCase());
    if (!project) {
      throw new ToolError(
        `No project named "${name}". Available: ${projects.map((p) => p.name).join(", ")}.`,
      );
    }
    return {
      content: [{ type: "text", text: JSON.stringify(project, null, 2) }],
      structuredContent: { project },
    };
  },
});
