function insertion_sort(arr: number[]) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = key;
  }
}

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

  let collection_2_and_3_pos: number[] = [];
  let collection_2_and_3_neg: number[] = [];

  while (j < collection_2.length || k < collection_3.length) {
    console.log(collection_2_and_3_neg, collection_2_and_3_pos);
    if (collection_2[j] < 0 && collection_2[j] !== undefined) {
      collection_2_and_3_neg.push(collection_2[j]);

      j++;
    } else if (collection_3[k] < 0 && collection_3[k] !== undefined) {
      collection_2_and_3_neg.push(collection_3[k]);

      k++;
    } else if (
      (collection_2[j] < collection_3[k] || collection_3[k] === undefined) &&
      collection_2[j] !== undefined
    ) {
      collection_2_and_3_pos.push(collection_2[j]);

      j++;
    } else if (
      (collection_2[j] >= collection_3[k] || collection_2[j] === undefined) &&
      collection_3[k] !== undefined
    ) {
      collection_2_and_3_pos.push(collection_3[k]);

      k++;
    }
  }

  insertion_sort(collection_2_and_3_neg);

  j = 0;
  k = 0;

  let res: number[] = [];

  while (i >= 0 || j < collection_2_and_3_pos.length || k < collection_2_and_3_neg.length) {
    const cur_min = Math.min(
      ...[collection_1[i], collection_2_and_3_pos[j], collection_2_and_3_neg[k]].filter(
        (v) => v !== undefined
      )
    );

    if (cur_min == collection_1[i]) {
      res.push(collection_1[i]);

      if (i >= 0) {
        i--;
      }
    } else if (cur_min == collection_2_and_3_pos[j]) {
      res.push(collection_2_and_3_pos[j]);

      if (j < collection_2_and_3_pos.length) {
        j++;
      }
    } else {
      res.push(collection_2_and_3_neg[k]);

      if (k < collection_2_and_3_neg.length) {
        k++;
      }
    }
  }

  return res;
}
