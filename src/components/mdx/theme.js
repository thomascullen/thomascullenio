var theme = {
  plain: {
    color: "#ebdbb2",
    backgroundColor: "#1d2021",
  },
  styles: [
    {
      types: ["prolog"],
      style: {
        color: "rgb(69, 133, 136)",
      },
    },
    {
      types: ["comment", "punctuation"],
      style: {
        color: "rgb(146, 131, 116)",
        fontStyle: "italic",
      },
    },
    {
      types: ["constant", "variable"],
      style: {
        color: "rgb(211, 134, 155)",
      },
    },
    {
      types: ["attr-name", "class-name", "function"],
      style: {
        color: "rgb(250, 189, 47)",
      },
    },
    {
      types: ["tag", "selector", "operator"],
      style: {
        color: "rgb(142, 192, 124)",
        background: "transparent",
      },
    },
    {
      types: ["string", "inserted"],
      style: {
        color: "rgb(184, 187, 38)",
      },
    },
    {
      types: ["builtin"],
      style: {
        color: "rgb(104, 157, 106)",
      },
    },
    {
      types: ["keyword"],
      style: {
        color: "rgb(251, 73, 52)",
      },
    },
    {
      types: ["deleted"],
      style: {
        color: "rgb(214, 93, 14)",
      },
    },
    {
      types: ["changed"],
      style: {
        color: "rgb(254, 128, 25)",
      },
    },
  ],
};

module.exports = theme;
