import { Size } from 'src/styles/theme'

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

export function getClockPositions(size: Size) {
  const divider = (size === 'sm' ? 100 : 144) / 7
  return [
    // 12
    {
      x: 0,
      y: 0,
    },
    // 1
    {
      x: divider * 1 + 11,
      y: divider * 1 - 11,
    },
    // 2
    {
      x: divider * 2 + 14,
      y: divider * 2 - 8,
    },
    // 3
    {
      x: divider * 3 + 1,
      y: divider * 3 + 2,
    },
    // 4
    {
      x: divider * 2 + 13,
      y: divider * 4 + 14,
    },
    // 5
    {
      x: divider * 1 + 11,
      y: divider * 5 + 16,
    },
    // 6
    {
      x: divider * 0,
      y: divider * 6 + 4,
    },
    // 7
    {
      x: divider * -1 - 11,
      y: divider * 5 + 16,
    },
    // 8
    {
      x: divider * -2 - 13,
      y: divider * 4 + 14,
    },
    // 9
    {
      x: divider * -3 - 1,
      y: divider * 3 + 2,
    },
    // 10
    {
      x: divider * -2 - 13,
      y: divider * 2 - 9,
    },
    // 11
    {
      x: divider * -1 - 11,
      y: divider * 1 - 11,
    },
  ]
}
