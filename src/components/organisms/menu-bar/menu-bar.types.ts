export interface IMenuBar {
  hotTake: string;
  isLoading: boolean;
  refreshHotTake: () => Promise<void>;
}
