// primitives

export const spacePrimitives = {
  "space.0": "0rem", // 0px
  "space.50": "0.25rem", // 4px
  "space.100": "0.5rem", // 8px
  "space.150": "0.75rem", // 12px
  "space.200": "1rem", // 16px
  "space.250": "1.25rem", // 20px
  "space.300": "1.5rem", // 24px
  "space.400": "2rem", // 32px
  "space.500": "2.5rem", // 40px
  "space.600": "3rem", // 48px
  "space.800": "4rem", // 64px
  "space.1000": "5rem", // 80px
  "space.1200": "6rem", // 96px
  "space.2000": "10rem", // 160px
};

export const radiusPrimitives = {
  "0": "0",
  "0.25": "0.125rem",
  "0.5": "0.25rem",
  "1": "0.5rem",
  "1.5": "0.75rem",
  "2": "1rem",
  "3": "1.5rem",
  "4": "2rem",
};

// system

export const space = {
  // Chakra overrides - do not use directly
  "0.5": spacePrimitives["space.50"],
  "1": spacePrimitives["space.100"],
  "1.5": spacePrimitives["space.150"],
  "2": spacePrimitives["space.200"],
  "3": spacePrimitives["space.300"],
  "4": spacePrimitives["space.400"],
  "5": spacePrimitives["space.500"],
  "6": spacePrimitives["space.600"],
  "8": spacePrimitives["space.800"],
  "10": spacePrimitives["space.1000"],
  "12": spacePrimitives["space.1200"],
  "20": spacePrimitives["space.2000"],
  // ---
  "spacing-none": "0",
  "spacing-xxs": spacePrimitives["space.50"],
  "spacing-xs": spacePrimitives["space.100"],
  "spacing-sm": spacePrimitives["space.150"],
  "spacing-md": spacePrimitives["space.200"],
  "spacing-lg": spacePrimitives["space.300"],
  "spacing-xl": spacePrimitives["space.400"],
  "spacing-xxl": spacePrimitives["space.600"],
};

export const radii = {
  // Chakra overrides - do not use directly
  "0": radiusPrimitives["0"],
  "0.5": radiusPrimitives["0.5"],
  "1": radiusPrimitives["1"],
  "1.5": radiusPrimitives["1.5"],
  "2": radiusPrimitives["2"],
  // ---
  "radius-none": radiusPrimitives["0"],
  "radius-xxs": radiusPrimitives["0.25"],
  "radius-xs": radiusPrimitives["0.5"],
  "radius-sm": radiusPrimitives["1"],
  "radius-md": radiusPrimitives["1.5"],
  "radius-lg": radiusPrimitives["2"],
  "radius-xl": radiusPrimitives["4"],
};

export const border = {
  accents: {
    "blue-dark": {
      default: "blue.700",
      _dark: "blue.200",
    },
    "blue-light": {
      default: "blue.200",
      _dark: "blue.900",
    },
  },
  primary: {
    default: "black.400",
    _dark: "black.600",
  },
  secondary: {
    default: "black.300",
    _dark: "black.700",
  },
  inverse: {
    default: "black.400",
    _dark: "black.600",
  },
};

export const background = {
  primary: {
    default: "main.white",
    _dark: "black.900",
  },
  secondary: {
    default: "black.200",
    _dark: "black.800",
  },
  tertiary: {
    default: "black.300",
    _dark: "black.700",
  },
  inverse: {
    default: "black.800",
    _dark: "black.100",
  },
  dark: {
    default: "black.900",
    _dark: "black.900",
  },
  white: {
    default: "main.white",
    _dark: "main.white",
  },
  display: {
    "very-light": {
      default: "sand.50",
      _dark: "black.1000",
    },
  },
  highlight: {
    default: "blue.100",
    _dark: "blue.900",
  },
  "accent-primary": {
    "very-light": {
      default: "orange.50",
      _dark: "black.1000",
    },
    light: {
      default: "orange.100",
      _dark: "orange.100",
    },
    medium: {
      default: "orange.200",
      _dark: "orange.200",
    },
    dark: {
      default: "orange.300",
      _dark: "orange.300",
    },
  },
  "accent-secondary": {
    "grey-dark": {
      default: "blackAlpha.50",
      _dark: "black.1000",
    },
    "grey-light": {
      default: "black.100",
      _dark: "black.900",
    },
    "red-light": {
      default: "red.100",
      _dark: "red.100",
    },
    "pink-light": {
      default: "pink.50",
      _dark: "pink.700",
    },
    "pink-medium": {
      default: "pink.100",
      _dark: "pink.800",
    },
    "blue-very-light": {
      default: "sapphire.25",
      _dark: "sapphire.50",
    },
    "blue-light": {
      default: "sapphire.50",
      _dark: "sapphire.100",
    },
    "blue-medium": {
      default: "sapphire.100",
      _dark: "sapphire.100",
    },
    "blue-dark": {
      default: "sapphire.700",
      _dark: "sapphire.200",
    },
    "green-light": {
      default: "green.50",
      _dark: "sapphire.50",
    },
    "yellow-light": {
      default: "yellow.50",
      _dark: "black.1000",
    },
  },
};

export const foreground = {
  primary: {
    default: "black.800",
    _dark: "black.200",
  },
  secondary: {
    default: "black.500",
    _dark: "black.500",
  },
  tertiary: {
    default: "black.400",
    _dark: "black.600",
  },
  inverse: {
    default: "main.white",
    _dark: "black.800",
  },
  feedback: {
    success: {
      default: "green.400",
      _dark: "green.400",
    },
    alert: {
      default: "red.400",
      _dark: "red.400",
    },
  },
  accent: {
    "pink-dark": {
      default: "pink.700",
      _dark: "pink.50",
    },
    "green-dark": {
      default: "green.700",
      _dark: "green.50",
    },
    "blue-dark": {
      default: "sapphire.700",
      _dark: "sapphire.100",
    },
    "blue-very-dark": {
      default: "sapphire.900",
      _dark: "sapphire.800",
    },
  },
};

export const visualization = {
  text: {
    primary: {
      default: "black.800",
      _dark: "black.200",
    },
    secondary: {
      default: "black.600",
      _dark: "black.500",
    },
  },
  grid: {
    default: "black.300",
    _dark: "black.800",
  },
  axis: {
    default: "black.700",
    _dark: "black.300",
  },
  categorical: {
    1: {
      default: "blue.300",
      _dark: "blue.300",
    },
    2: {
      default: "orange.500",
      _dark: "orange.500",
    },
    3: {
      default: "purple.700",
      _dark: "purple.700",
    },
    4: {
      default: "red.500",
      _dark: "red.600",
    },
    5: {
      default: "pink.500",
      _dark: "pink.500",
    },
    6: {
      default: "cyan.800",
      _dark: "green.500",
    },
    7: {
      default: "red.200",
      _dark: "cyan.700",
    },
  },
  sequential: {
    blue: {
      "low-3": {
        default: "blue.200",
        _dark: "blue.800",
      },
      "low-2": {
        default: "blue.300",
        _dark: "blue.700",
      },
      "low-1": {
        default: "blue.400",
        _dark: "blue.600",
      },
      default: {
        default: "blue.500",
        _dark: "blue.500",
      },
      "high-1": {
        default: "blue.600",
        _dark: "blue.400",
      },
      "high-2": {
        default: "blue.700",
        _dark: "blue.300",
      },
      "high-3": {
        default: "blue.800",
        _dark: "blue.200",
      },
    },
    red: {
      "low-3": {
        default: "red.200",
        _dark: "red.800",
      },
      "low-2": {
        default: "red.300",
        _dark: "red.700",
      },
      "low-1": {
        default: "red.400",
        _dark: "red.600",
      },
      default: {
        default: "red.500",
        _dark: "red.500",
      },
      "high-1": {
        default: "red.600",
        _dark: "red.400",
      },
      "high-2": {
        default: "red.700",
        _dark: "red.300",
      },
      "high-3": {
        default: "red.800",
        _dark: "red.200",
      },
    },
  },
};

const text = {
  primary: "foreground.primary",
  secondary: "foreground.secondary",
  placeholder: "foreground.tertiary",
  disabled: "foreground.tertiary",
  inverse: "foreground.inverse",
  success: "foreground.feedback.success",
  alert: "foreground.feedback.alert",
  "selectable-primary": {
    default: "black.800",
    _dark: "black.800",
  },
};

export const semanticTokens = {
  space,
  radii,
  colors: {
    border,
    background,
    foreground,
    text,
    visualization,
    overlay: {
      default: "rgba(0, 0, 0, 0.64)",
      _dark: "rgba(0, 0, 0, 0.64)",
    },
  },
};
