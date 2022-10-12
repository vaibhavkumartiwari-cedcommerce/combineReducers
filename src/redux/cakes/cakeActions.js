export const BUY_CAKE = "BYU_CAKE";
export const RESET = "RESET";



export const buyCake = (qty) => {
  return {
    type: BUY_CAKE,
    info: "It reduces no of cakes in shop",
    payload:qty
  };
};

export const reset = () => {
  return {
    type: RESET,
    info: "It resets the conditions",
  };
};
