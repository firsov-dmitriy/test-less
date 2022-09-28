export interface IItems {
  id: number;
  name: string;
  status: IColor;
  type: string;
  conditions: string;
  volume: number;
  roi: number;
  free: number;
  hedge: number;
}
enum IColor {
  green = "green",
  yellow = "yellow",
  red = "red",
}
