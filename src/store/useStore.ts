import { create } from 'zustand';

interface AppState {
  progress: number;
  setProgress: (progress: number) => void;

  customization: {
    productivity: number;
    taste: number;
    calories: number;
    flavor: string;
    method: string;
    oil: string;
    thickness: string;
    theme: string;
    target: string;
  };
  setCustomization: (key: string, value: any) => void;

  aiRecommendations: any;
  setAIRecommendations: (recommendations: any) => void;
}

export const useStore = create<AppState>((set) => ({
  progress: 0,
  setProgress: (progress) => set({ progress }),

  customization: {
    productivity: 50,
    taste: 50,
    calories: 50,
    flavor: 'Sea Salt & Lime',
    method: 'Air Fried',
    oil: 'Avocado Oil',
    thickness: 'Thin',
    theme: 'Eco Edition',
    target: 'Developer',
  },
  setCustomization: (key, value) => set((state) => ({
    customization: { ...state.customization, [key]: value }
  })),

  aiRecommendations: null,
  setAIRecommendations: (aiRecommendations) => set({ aiRecommendations }),
}));
