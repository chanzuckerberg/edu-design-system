import "twin.macro";
import "@types/styled-components";
import styledImport, { css as cssImport } from "styled-components";

declare module "twin.macro" {
  // The styled and css imports
  const styled: typeof styledImport;
  const css: typeof cssImport;
}
