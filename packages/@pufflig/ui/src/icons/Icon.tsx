import "./css/prompt-studio-icons.css";

import { chakra, ChakraProps } from "@chakra-ui/react";

interface IconProps extends ChakraProps {
  name: string;
  className?: string;
  size?: string;
}

export const Icon = ({ name, className = "", size = "md", ...props }: IconProps) => {
  return (
    <chakra.i
      fontSize={`icon-${size}`}
      fontFamily="prompt-studio-icons"
      fontStyle="normal"
      fontWeight="normal"
      display="inline-block"
      textDecoration="inherit"
      textAlign="center"
      textTransform="none"
      className={`icon-${name} ${className}`}
      {...props}
    ></chakra.i>
  );
};
