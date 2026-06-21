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
    bagColor: string;
    bagImage: string | null;
  };
  setCustomization: (key: string, value: any) => void;

  appState: 'story' | 'builder' | 'order';
  setAppState: (appState: 'story' | 'builder' | 'order') => void;

  aiRecommendations: any;
  setAIRecommendations: (recommendations: any) => void;
}

export const useStore = create<AppState>((set) => ({
  progress: 0,
  setProgress: (progress) => set({ progress }),

  appState: 'story',
  setAppState: (appState) => set({ appState }),

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
    bagColor: '#34c759',
    bagImage: null,
  },
  setCustomization: (key, value) => set((state) => ({
    customization: { ...state.customization, [key]: value }
  })),

  aiRecommendations: null,
  setAIRecommendations: (aiRecommendations) => set({ aiRecommendations }),
}));
