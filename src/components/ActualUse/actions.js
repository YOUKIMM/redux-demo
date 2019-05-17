import { MINUS_ONE, PLUS_ONE } from "./constants";

export function minusOne() {
  return {
    type: MINUS_ONE
  };
}

export function plusOne() {
  return {
    type: PLUS_ONE
  };
}
