import { defineTool } from "@lovable.dev/mcp-js";
import { profile, process, stack } from "../data";

export default defineTool({
  name: "get_profile",
  title: "Get profile",
  description:
    "Get David Onyekachukwu's public profile: who he is, where he's based, his education, how he works and his technology stack.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const payload = { profile, process, stack };
    return {
      content: [{ type: "text", text: JSON.stringify(payload, null, 2) }],
      structuredContent: payload,
    };
  },
});
