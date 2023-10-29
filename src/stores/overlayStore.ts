import { create } from 'zustand';

interface OverlayState {
  priority: number;
  setOverlayPriority: (priority: number) => void;
}
export const useOverlayStore = create<OverlayState>()((set) => ({
  priority: 0,
  setOverlayPriority: (num: number) => set((state) => ({ priority: state.priority + num })),
}));
