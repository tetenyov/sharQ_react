export type TAction = {
  type: string;
  payload: {
    position: number;
    score: number;
  };
};

export type TInitialState = {
  position: number;
  score: number;
  isStart: boolean;
};