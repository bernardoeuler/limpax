import { extendTheme } from "native-base"

const theme = extendTheme({
  colors: {
    primary: {
      100: "#96edb6",
      200: "#74e79f",
      300: "#51e186",
      400: "#2edb6d",
      500: "#21bf5b",
      600: "#1b9d4b",
      700: "#157a3b",
      800: "#0f572a",
      900: "#093419"
    },

    success: {
      100: "#96edb6",
      200: "#74e79f",
      300: "#51e186",
      400: "#2edb6d",
      500: "#21bf5b",
      600: "#1b9d4b",
      700: "#157a3b",
      800: "#0f572a",
      900: "#093419"
    },

    warning: {
      100: "#fdd5b9",
      200: "#fcba8d",
      300: "#fba265",
      400: "#fa8a3d",
      500: "#f97316",
      600: "#e05f06",
      700: "#b84e05",
      800: "#903d04",
      900: "#682c03"
    },

    danger: {
      100: "#f4a4ae",
      200: "#f07f8e",
      300: "#ec5a6e",
      400: "#e8354d",
      500: "#dc1933",
      600: "#b7152b",
      700: "#921122",
      800: "#6e0d1a",
      900: "#490911"
    },

    info: {
      100: "#9ed3fa",
      200: "#77c2f8",
      300: "#50b0f6",
      400: "#2a9ff4",
      500: "#0c8ce9",
      600: "#0a75c2",
      700: "#085d9b",
      800: "#064674",
      900: "#042f4e"
    },

    neutral: {
      50:  "#ebebeb",
      100: "#c2c2c2",
      200: "#adadad",
      300: "#999999",
      400: "#858585",
      500: "#707070",
      600: "#5c5c5c",
      700: "#474747",
      800: "#333333",
      900: "#1f1f1f",
      translucent: "#fafafaaa"
    },

    black: "#000000",

    white: "#ffffff",

    lightBg: "#e9e9e9"
  },

  fontConfig: {
    Inter: {
      100: "inter_thin",
      200: "inter_extralight",
      300: "inter_light",
      400: "inter_regular",
      500: "inter_medium",
      600: "inter_semibold",
      700: "inter_bold",
    },

    JosefinSans: {
      400: "josefinsans_regular"
    }
  },

  fonts: {
    brand: "JosefinSans",
    heading: "Inter",
    body: "Inter"
  },

  // lineHeights: {
  //   heading: "125%",
  //   body: "150%"
  // },

  fontWeights: {
    thin: 100,
    extralight: 200,
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  components: {
    Heading: {
      defaultProps: {
        color: "neutral.900",
        size: "h1",
        fontWeight: "bold"
      },

      sizes: {
        h1: {
          fontSize: 48,
          lineHeight: 60
        },
        h2: {
          fontSize: 40,
          lineHeight: 50
        },
        h3: {
          fontSize: 32,
          lineHeight: 40
        },
        h4: {
          fontSize: 28,
          lineHeight: 35
        },
        h5: {
          fontSize: 24,
          lineHeight: 30
        },
        h6: {
          fontSize: 20,
          lineHeight: 25
        },
      },
    },

    Text: {
      defaultProps: {
        color: "neutral.900",
        size: "normal",
        fontWeight: "regular"
      },

      sizes: {
        small: {
          fontSize: 14
        },
        normal: {
          fontSize: 16
        },
        large: {
          fontSize: 18
        }
      }
    },

    Button: {
      baseStyle: {
        _text: {
          color: "white",
          fontWeight: "bold",
        },
      },

      defaultProps: {
        bg: "primary.500",
        borderColor: "primary.500",
        borderRadius: 8,
        size: "large",

        _text: {
          color: "white",
          fontWeight: "bold",
        },
        
        _pressed: {
          bg: "primary.600",
          _text: {
            color: "neutral.50",
          },
        },
      },

      variants: {
        outline: {
          bg: "white",
        }
      },

      sizes: {
        large: {
          w: "100%",
          py: "20px",
          _text: {
            fontSize: 18
          },
          _spinner: {
            size: 27,
          }
        },

        medium: {
          w: "100%",
          py: "12px",
          _text: {
            fontSize: 16
          },
          _spinner: {
            size: 24,
          }
        },

        small: {
          py: "8px",
          _text: {
            fontSize: 14
          },
          _spinner: {
            size: 21,
          }
        }
      }
    },

    FormControlLabel: {
      defaultProps: {
        fontSize: 14,

        _light: {
          _text: {
            color: "neutral.600",
            fontWeight: "semibold"
          }
        },

        _dark: {
          _text: {
            color: "neutral.300",
          }
        },
      },
    },

    FormControlErrorMessage: {
      defaultProps: {
        fontSize: 14,

        _text: {
          color: "danger.500",
        }
      },
    },

    Input: {
      defaultProps: {
        size: "normal",

        borderWidth: 0,

        rounded: 4,

        _light: {
          bg: "neutral.50",
          color: "neutral.900",
          placeholderTextColor: "neutral.500",
          _focus: {
            bg: "neutral.50"
          }
        },

        _dark: {
          bg: "neutral.800",
          color: "white",
          placeholderTextColor: "neutral.400",
          _focus: {
            bg: "neutral.800"
          }
        },
      },

      sizes: {
        normal: {
          fontSize: 16,
          py: 3,
          px: 4,
        }
      }
    },

    TextArea: {
      defaultProps: {
        size: "normal",
        borderWidth: 0,
        rounded: 4,

        _light: {
          bg: "neutral.50",
          color: "neutral.900",
          placeholderTextColor: "neutral.500",
          _focus: {
            bg: "neutral.50"
          }
        },

        _dark: {
          bg: "neutral.800",
          color: "white",
          placeholderTextColor: "neutral.400",
          _focus: {
            bg: "neutral.800"
          }
        },

        sizes: {
          normal: {
            fontSize: 16,
            py: 3,
            px: 4,
          }
        }
      }
    },

    Spinner: {
      defaultProps: {
        color: "neutral.50"
      }
    }
  }
})

export default theme