// Mock data to fill up timeline
const allData = [
  {
    context: "CONTEXT_1",
    data: [
      {
        name: "Name1C1",
        context: "context1",
        date: "06/22/2021",
      },
      {
        name: "Name2C1",
        context: "context1",
        date: "06/23/2021",
      },
      {
        name: "Name3C1",
        context: "context1",
        date: "06/25/2021",
      },
      {
        name: "Name4C1",
        context: "context1",
        date: "06/27/2021",
      },
    ],
  },
  {
    context: "CONTEXT_2",
    data: [
      {
        name: "Name1C2",
        context: "context2",
        date: "06/22/2021",
      },
      {
        name: "Name2C2",
        context: "context2",
        date: "06/23/2021",
      },
      {
        name: "Name3C2",
        context: "context2",
        date: "06/24/2021",
      },
      {
        name: "Name4C2",
        context: "context2",
        date: "06/25/2021",
      },
      {
        name: "Name4C2",
        context: "context2",
        date: "06/29/2021",
      },
    ],
  },
  {
    context: "CONTEXT_3",
    data: [
      {
        name: "Name1C3",
        context: "context3",
        date: "06/22/2021",
      },
      {
        name: "Name2C3",
        context: "context3",
        date: "06/23/2021",
      },
      {
        name: "Name3C3",
        context: "context3",
        date: "06/24/2021",
      },
      {
        name: "Name4C3",
        context: "context3",
        date: "06/27/2021",
      },
      {
        name: "Name5C3",
        context: "context3",
        date: "07/01/2021",
      },
    ],
  },
  {
    context: "CONTEXT_4",
    data: [
      {
        name: "Name1C4",
        context: "context4",
        date: "06/22/2021",
      },
      {
        name: "Name2C4",
        context: "context4",
        date: "06/23/2021",
      },
      {
        name: "Name3C4",
        context: "context4",
        date: "06/25/2021",
      },
      {
        name: "Name4C4",
        context: "context4",
        date: "06/27/2021",
      },
    ],
  },
  {
    context: "CONTEXT_5",
    data: [
      {
        name: "Name1C5",
        context: "context5",
        date: "06/22/2021",
      },
      {
        name: "Name2C5",
        context: "context5",
        date: "06/23/2021",
      },
      {
        name: "Name3C5",
        context: "context5",
        date: "06/24/2021",
      },
      {
        name: "Name4C5",
        context: "context5",
        date: "06/25/2021",
      },
      {
        name: "Name4C5",
        context: "context5",
        date: "06/29/2021",
      },
    ],
  },
  {
    context: "CONTEXT_6",
    data: [
      {
        name: "Name1C6",
        context: "context6",
        date: "06/22/2021",
      },
      {
        name: "Name2C6",
        context: "context6",
        date: "06/23/2021",
      },
      {
        name: "Name3C6",
        context: "context6",
        date: "06/24/2021",
      },
      {
        name: "Name4C6",
        context: "context6",
        date: "06/27/2021",
      },
    ],
  },
];

for (let i = 0; i < allData.length; i++) {
  for (let j = 0; j < allData[i].data.length; j++) {
    allData[i].data[j].first = false;
    allData[i].data[j].last = false;
    if (j === 0) {
      allData[i].data[j].first = true;
    } else if (j === allData[i].data.length - 1) {
      allData[i].data[j].last = true;
    }
  }
}

console.log(allData);

export default allData;
