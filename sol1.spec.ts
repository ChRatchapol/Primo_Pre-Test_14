import merge from "./sol1";

describe("merge sol1", () => {
  it("should return an empty array when all collections are empty", () => {
    const collection_1 = [];
    const collection_2 = [];
    const collection_3 = [];
    const expected = [];

    const result = merge(collection_1, collection_2, collection_3);

    expect(result).toEqual(expected);
  });

  it("should correctly merge when one collection is empty", () => {
    const collection_1 = [10, 5];
    const collection_2 = [];
    const collection_3 = [-5, 1, 20];
    const expected = [-5, 1, 5, 10, 20];

    const result = merge(collection_1, collection_2, collection_3);

    expect(result).toEqual(expected);
  });

  it("should handle duplicate numbers across all collections", () => {
    const collection_1 = [20, 10, 5];
    const collection_2 = [-1, 5, 8, 20];
    const collection_3 = [-1, 10];
    const expected = [-1, -1, 5, 5, 8, 10, 10, 20, 20];

    const result = merge(collection_1, collection_2, collection_3);

    expect(result).toEqual(expected);
  });

  it("should work correctly with only positive numbers", () => {
    const collection_1 = [100, 50];
    const collection_2 = [1, 10, 60];
    const collection_3 = [2, 70];
    const expected = [1, 2, 10, 50, 60, 70, 100];

    const result = merge(collection_1, collection_2, collection_3);

    expect(result).toEqual(expected);
  });
});
