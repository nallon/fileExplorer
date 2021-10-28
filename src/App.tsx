import "./styles.css";
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor
} from "@codesandbox/sandpack-react";

import "@codesandbox/sandpack-react/dist/index.css";

import { FileExplorer } from "./FileExplorer";

export default function App() {
  return (
    <SandpackProvider
      template="vanilla"
      customSetup={{
        entry: "/index.tsx"
      }}
    >
      <SandpackLayout>
        <FileExplorer />
        <SandpackCodeEditor closableTabs />
      </SandpackLayout>
    </SandpackProvider>
  );
}
