import { StyleFunctionProps, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    Drawer: {
      // Customize the styles of the drawer here
      baseStyle: {
        fontWeight: "bold", // Normally, it is "semibold"
      },
      variants: {
        solid: (props: StyleFunctionProps) => ({
          bg: props.colorMode === "dark" ? "red.300" : "red.500",
        }),
      },
    },
  },
});

export default theme;
