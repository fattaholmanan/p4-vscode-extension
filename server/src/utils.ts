import { P4ExtensionSettings } from "./Settings";
import { p4ExtensionServer } from "./server";

export function getDocumentSettings(
  resource: string
): Thenable<P4ExtensionSettings> {
  const result = p4ExtensionServer.connection.workspace.getConfiguration({
    scopeUri: resource,
    section: "p4Extension",
  });
  return result;
}
