import * as React from "react";

import { useSandpack } from "@codesandbox/sandpack-react";

import { ModuleList } from "./ModuleList";

// WIP
export const FileExplorer: React.FC = () => {
  const { sandpack } = useSandpack();

  return (
    <div>
      <ModuleList
        activePath={sandpack.activePath}
        files={sandpack.files}
        prefixedPath="/"
        selectFile={sandpack.openFile}
      />
    </div>
  );
};
