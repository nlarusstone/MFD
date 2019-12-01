function generateButton(width, height) {
  return {
    shape: "rectangle",
    width: width / 22,
    height: height / 22,
    prefill: "red"
  };
}

const LEFT_BUTTONS = (width, height) => [
  {
    id: "L1",
    ...generateButton(width, height),
    x1: width / 19,
    y1: height / 4.5
  },
  {
    id: "L2",
    ...generateButton(width, height),
    x1: width / 19,
    y1: height / 4.5 + height / 12
  },
  {
    id: "L3",
    shape: "rectangle",
    width: 30,
    height: 40,
    x1: 80,
    y1: 500
  },
  {
    id: "L4",
    shape: "rectangle",
    width: 30,
    height: 40,
    x1: 80,
    y1: 500
  },
  {
    id: "L5",
    shape: "rectangle",
    width: 30,
    height: 40,
    x1: 80,
    y1: 500
  },
  {
    id: "L6",
    shape: "rectangle",
    width: 30,
    height: 40,
    x1: 80,
    y1: 500
  },
  {
    id: "L7",
    shape: "rectangle",
    width: 30,
    height: 40,
    x1: 80,
    y1: 500
  }
];

const RIGHT_BUTTONS = [
  {
    id: "R1",
    shape: "rectangle",
    width: 30,
    height: 40,
    x1: 80,
    y1: 500
  },
  {
    id: "R2",
    shape: "rectangle",
    width: 30,
    height: 40,
    x1: 80,
    y1: 500
  },
  {
    id: "R3",
    shape: "rectangle",
    width: 30,
    height: 40,
    x1: 80,
    y1: 500
  },
  {
    id: "R4",
    shape: "rectangle",
    width: 30,
    height: 40,
    x1: 80,
    y1: 500
  },
  {
    id: "R5",
    shape: "rectangle",
    width: 30,
    height: 40,
    x1: 80,
    y1: 500
  },
  {
    id: "R6",
    shape: "rectangle",
    width: 30,
    height: 40,
    x1: 80,
    y1: 500
  },
  {
    id: "R7",
    shape: "rectangle",
    width: 30,
    height: 40,
    x1: 80,
    y1: 500
  }
];

const TOP_BUTTONS = [
  {
    id: "T1",
    shape: "rectangle",
    width: 30,
    height: 40,
    x1: 80,
    y1: 500
  },
  {
    id: "T2",
    shape: "rectangle",
    width: 30,
    height: 40,
    x1: 80,
    y1: 500
  },
  {
    id: "T3",
    shape: "rectangle",
    width: 30,
    height: 40,
    x1: 80,
    y1: 500
  },
  {
    id: "T4",
    shape: "rectangle",
    width: 30,
    height: 40,
    x1: 80,
    y1: 500
  },
  {
    id: "T5",
    shape: "rectangle",
    width: 30,
    height: 40,
    x1: 80,
    y1: 500
  }
];

export const MAPPING = (width, height) => [
  ...LEFT_BUTTONS(width, height),
  TOP_BUTTONS,
  RIGHT_BUTTONS
];
