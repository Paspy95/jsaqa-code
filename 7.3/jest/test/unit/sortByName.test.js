const sorting = require("../../app");
const config = {
  collectCoverageFrom: [
    "**/*.{js,jsx}",
    "!**/node_modules/**",
    "!**/vendor/**",
  ],
};

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
      ])
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
  });
});

describe("there is no sorting", () => {
  it("Books are not sorted", () => {
    expect(sorting.sortByName(["Аарон", "Аарон"])).toEqual(["Аарон", "Аарон"]);
  });
});
