const COLORS = {
  primary: "#070D59",
  secondary: "#1F3C88",
  tertiary: "#EE6F57",
  tertiary2: "#c15a47",

  gray: "#F6F5F5",
  gray2: "#bebebe",

  white: "#ffffff",
  gray3: "#393636",
};

const FONT = {
  font: "sans-serif",
};

const SIZES = {
  xxSmall: 6,
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "red",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
  elevation: {
    shadowColor: COLORS.primary,
    elevation: 10,
  },
};

export { COLORS, FONT, SIZES, SHADOWS };
