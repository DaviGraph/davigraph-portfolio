import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { projects } from "../data";

export default defineTool({
  name: "list_projects",
  title: "List projects",
  description:
    "List the projects in David Omeh's portfolio, optionally filtered by status (LIVE, CLIENT PROJECT, IN PROGRESS).",
  inputSchema: {
    status: z
      .enum(["LIVE", "CLIENT PROJECT", "IN PROGRESS"])
      .optional()
      .describe("Only return projects with this status."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ status }) => {
    const items = status ? projects.filter((p) => p.status === status) : projects;
    return {
      content: [{ type: "text", text: JSON.stringify(items, null, 2) }],
      structuredContent: { projects: items },
    };
  },
});
