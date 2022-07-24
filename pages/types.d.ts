declare module "html-to-react" {
  import * as React from "react";

  interface ProcessingInstruction {
    shouldProcessNode: (node: JSX.Element) => boolean;
    processNode: (
      node: JSX.Element,
      childrenNodes: JSX.Element[]
    ) => JSX.Element;
  }

  export class Parser {
    constructor();

    parse(html: string): JSX.Element;
    parseWithInstructions(
      html: string,
      isValidNode: (node: JSX.Element) => boolean,
      processingInstructions: ProcessingInstruction[]
    ): JSX.Element;
  }

  export class ProcessNodeDefinitions {
    processDefaultNode(
      node: JSX.Element,
      childrenNodes: JSX.Element[],
      index?: React.Key
    ): JSX.Element;
  }
}
