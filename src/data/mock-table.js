import React from "react"
import { Cell } from "@blueprintjs/table";

const getRandomArbitrary = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
}

const mockTable = [
  {
    group: 'Total',
    yes: getRandomArbitrary(50000,100000),
    no: getRandomArbitrary(50000,100000)
  },
  {
    group: 'Americans',
    yes: getRandomArbitrary(5000,10000),
    no: getRandomArbitrary(500,10000)
  },
  {
    group: 'International',
    yes: getRandomArbitrary(5000,10000),
    no: getRandomArbitrary(5000,10000)
  },
  {
    group: 'Men',
    yes: getRandomArbitrary(5000,10000),
    no: getRandomArbitrary(5000,10000)
  },
  {
    group: 'Women',
    yes: getRandomArbitrary(5000,10000),
    no: getRandomArbitrary(5000,10000)
  },
  {
    group: 'Healthy',
    yes: getRandomArbitrary(500,1000),
    no: getRandomArbitrary(500,1000)
  },
  {
    group: 'Overweight',
    yes: getRandomArbitrary(500,1000),
    no: getRandomArbitrary(500,1000)
  },
  {
    group: 'Smoker',
    yes: getRandomArbitrary(5000,1000),
    no: getRandomArbitrary(500,1000)
  },
  {
    group: 'Young Adult',
    yes: getRandomArbitrary(500,1000),
    no: getRandomArbitrary(500,1000)
  },
]

export const getMockNames = rowIndex => {
    return <Cell>{mockTable[rowIndex].group}</Cell>
};

export const getMockYes = rowIndex => {
    return <Cell>{mockTable[rowIndex].yes}</Cell>
};

export const getMockNo = rowIndex => {
    return <Cell>{mockTable[rowIndex].no}</Cell>
};

