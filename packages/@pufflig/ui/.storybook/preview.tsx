import "./preview.css";

import { useDarkMode } from "storybook-dark-mode";
import { ChakraProvider, useColorMode } from "@chakra-ui/react";
import type { Preview } from "@storybook/react";
import * as React from "react";
import { pufflyTheme } from "../src/theme/theme";

const Wrapper = ({ children }: any) => {
  const { setColorMode } = useColorMode();
  const isDark = useDarkMode();

  React.useEffect(() => {
    if (isDark) {
      setColorMode("dark");
    } else {
      setColorMode("light");
    }
  }, [isDark]);

  return children;
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [
    (renderStory) => {
      return (
        <ChakraProvider theme={pufflyTheme}>
          <Wrapper>{renderStory()}</Wrapper>
        </ChakraProvider>
      );
    },
  ],

  tags: ["autodocs"],
};

export default preview;
