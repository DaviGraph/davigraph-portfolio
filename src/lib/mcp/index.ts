import { defineMcp } from "@lovable.dev/mcp-js";
import listProjectsTool from "./tools/list-projects";
import getProjectTool from "./tools/get-project";
import getProfileTool from "./tools/get-profile";
import getContactTool from "./tools/get-contact";

export default defineMcp({
  name: "davi-s-studio-showcase",
  title: "Davi's Studio Showcase",
  version: "0.1.0",
  instructions:
    "Read-only tools for David Onyekachukwu's portfolio (Davi Graph). Use `list_projects` to browse his work, `get_project` for one project's details, `get_profile` for his background, process and stack, and `get_contact` for how to reach him.",
  tools: [listProjectsTool, getProjectTool, getProfileTool, getContactTool],
});
