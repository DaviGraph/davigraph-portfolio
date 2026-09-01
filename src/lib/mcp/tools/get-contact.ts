import { defineTool } from "@lovable.dev/mcp-js";
import { contact, profile } from "../data";

export default defineTool({
  name: "get_contact",
  title: "Get contact info",
  description:
    "Get the public ways to reach David Onyekachukwu (email, GitHub, LinkedIn, WhatsApp) and his current availability.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const payload = { availability: profile.availability, contact };
    return {
      content: [{ type: "text", text: JSON.stringify(payload, null, 2) }],
      structuredContent: payload,
    };
  },
});
