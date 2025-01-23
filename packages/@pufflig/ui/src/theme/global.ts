export const globalStyles = {
  global: () => ({
    ":root": {
      "--focus-border": "#007fd4",
      "--separator-border": "transparent",
    },
    "::selection": {
      background: "background.highlight",
    },
    html: {
      height: "100%",
      overflow: "hidden",
    },
    body: {
      height: "100%",
      fontFamily: "body",
      fontWeight: "400",
      fontSize: "md",
      background: "background.primary",
      borderColor: "border.primary",
      color: "foreground.primary",
    },
    "#root": {
      height: "100%",
    },
    ".sash": {
      zIndex: "docked",
      borderLeft: "1px solid",
      borderColor: "border.secondary",
    },
    ".chakra-button__icon": {
      marginInlineEnd: "spacing-xs",
    },
  }),
};
