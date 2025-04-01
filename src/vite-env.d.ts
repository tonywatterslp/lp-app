/// <reference types="vite/client" />

declare module "*.svg" {
  import * as React from "react";
  const Component: React.ForwardRefExoticComponent<
    React.SVGProps<SVGSVGElement>
  >;
  export default Component;
}
