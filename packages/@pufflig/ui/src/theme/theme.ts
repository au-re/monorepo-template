import "@fontsource/baloo-bhai-2/500.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/700.css";

import { extendTheme } from "@chakra-ui/react";

import { colors } from "./colors";
import { globalStyles } from "./global";
import { layerStyles } from "./layers";
import { fontSizes, fonts, textStyles } from "./text";
import { semanticTokens } from "./tokens";

export const pufflyTheme = extendTheme({
  colors,
  fonts,
  fontSizes,
  textStyles,
  layerStyles,
  semanticTokens,
  styles: globalStyles,
});
