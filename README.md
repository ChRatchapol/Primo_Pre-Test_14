# Primo Pre-Test #14

---

name: Ratchapol Chantarachote

## What is this?

This project implements a function that merges three integer arrays (`collection_1`, `collection_2`, `collection_3`) into a single array, sorted in ascending order.

The input arrays have the following properties:

* `collection_1` is sorted in **descending** order.
* `collection_2` and `collection_3` are sorted in **ascending** order.

## Description

There was a potential ambiguity in the problem description, which stated: `collection_2, collection_3 already sorted from min(0) to max`. This was interpreted in two ways, leading to two different solutions:

1. **Solution 1 (`sol1.ts`):** This solution assumes the `(0)` was a typo or example, and that `collection_2` and `collection_3` are fully sorted in ascending order, including any negative numbers.
2. **Solution 2 (`sol2.ts`):** This solution addresses the more complex interpretation where only the positive numbers in `collection_2` and `collection_3` are sorted ascending, while negative numbers are unsorted and interspersed. Although the requirements forbid using a built-in sort function, this solution contains a custom Insertion Sort implementation to handle only the unsorted negative values before the final merge.

## Core Concept

The general algorithm is a **three-way merge**. It simultaneously iterates through all three source arrays using pointers. In each step, it identifies the smallest element among the current items pointed to, adds that element to the result array, and advances the corresponding pointer. This continues until all source arrays are exhausted.

## Run

1. Clone the repository to your local machine.
2. Run `npm install` to install dependencies.
3. To run the first solution, add your data and function call to `sol1.ts`, then execute `npm run sol1`.
4. To run the second solution, add your data and function call to `sol2.ts`, then execute `npm run sol2`.
5. To run the test suite, use `npm test`.
