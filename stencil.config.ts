import type { Config } from "@stencil/core";

export const config: Config = {
  namespace: "gucci-common-web-components",
  outputTargets: [
    {
      type: "dist-custom-elements",
      customElementsExportBehavior: "bundle",
      externalRuntime: false,
    },
  ],
  extras: {
    experimentalSlotFixes: true,
    experimentalScopedSlotChanges: true,
  },
};
