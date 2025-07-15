export default function merge(
  collection_1: number[], // dsc sorted
  collection_2: number[], // asc sorted
  collection_3: number[] // asc sorted
): number[] {
  // asc sort

  let i, j, k: number;

  i = collection_1.length - 1; // last index
  j = 0;
  k = 0;

  let res: number[] = [];

  while (i >= 0 || j < collection_2.length || k < collection_3.length) {
    // console.log(collection_1[i], collection_2[j], collection_3[k]);

    const cur_min = Math.min(
      ...[collection_1[i], collection_2[j], collection_3[k]].filter((v) => v !== undefined)
    );

    if (cur_min == collection_1[i]) {
      res.push(collection_1[i]);

      if (i >= 0) {
        i--;
      }
    } else if (cur_min == collection_2[j]) {
      res.push(collection_2[j]);

      if (j < collection_2.length) {
        j++;
      }
    } else {
      res.push(collection_3[k]);

      if (k < collection_3.length) {
        k++;
      }
    }
  }

  return res;
}
