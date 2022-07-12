const Divider = 144 / 7

export const ClockPositions = [
  // 12
  {
    x: 0,
    y: 0,
  },
  // 1
  {
    x: Divider * 1 + 11,
    y: Divider * 1 - 11,
  },
  // 2
  {
    x: Divider * 2 + 14,
    y: Divider * 2 - 8,
  },
  // 3
  {
    x: Divider * 3 + 1,
    y: Divider * 3 + 2,
  },
  // 4
  {
    x: Divider * 2 + 13,
    y: Divider * 4 + 14,
  },
  // 5
  {
    x: Divider * 1 + 11,
    y: Divider * 5 + 16,
  },
  // 6
  {
    x: Divider * 0,
    y: Divider * 6 + 4,
  },
  // 7
  {
    x: Divider * -1 - 11,
    y: Divider * 5 + 16,
  },
  // 8
  {
    x: Divider * -2 - 13,
    y: Divider * 4 + 14,
  },
  // 9
  {
    x: Divider * -3 - 1,
    y: Divider * 3 + 2,
  },
  // 10
  {
    x: Divider * -2 - 13,
    y: Divider * 2 - 9,
  },
  // 11
  {
    x: Divider * -1 - 11,
    y: Divider * 1 - 11,
  },
]
