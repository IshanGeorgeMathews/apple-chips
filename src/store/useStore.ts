import { create } from 'zustand';

export const FLAVOR_PROFILES = {
  'Onyx Sea Salt': { productivity: 40, taste: 60, calories: 30, color: '#1a1a1a', sprinkleColor: '#ffffff' },
  'Crimson Chili': { productivity: 80, taste: 95, calories: 45, color: '#4a0e0e', sprinkleColor: '#ff9500' },
  'Obsidian Truffle': { productivity: 95, taste: 70, calories: 50, color: '#050505', sprinkleColor: '#444444' },
  'Champagne Honey': { productivity: 30, taste: 85, calories: 70, color: '#d4af37', sprinkleColor: '#ffffff' }
};

interface AppState {
  progress: number;
  setProgress: (progress: number) => void;

  customization: {
    productivity: number;
    taste: number;
    calories: number;
    flavor: keyof typeof FLAVOR_PROFILES;
    method: string;
    oil: string;
    thickness: string;
    theme: string;
    target: string;
    bagColor: string;
    bagImage: string | null;
    finish: 'Matte' | 'Satin' | 'Glossy';
  };
  setFlavor: (flavor: keyof typeof FLAVOR_PROFILES) => void;
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
    productivity: FLAVOR_PROFILES['Onyx Sea Salt'].productivity,
    taste: FLAVOR_PROFILES['Onyx Sea Salt'].taste,
    calories: FLAVOR_PROFILES['Onyx Sea Salt'].calories,
    flavor: 'Onyx Sea Salt',
    method: 'Air Fried',
    oil: 'Avocado Oil',
    thickness: 'Thin',
    theme: 'Exclusive Edition',
    target: 'Developer',
    bagColor: '#1a1a1a',
    bagImage: null,
    finish: 'Satin',
  },

  setFlavor: (flavor) => set((state) => {
      const profile = FLAVOR_PROFILES[flavor];
      return {
          customization: {
              ...state.customization,
              flavor,
              productivity: profile.productivity,
              taste: profile.taste,
              calories: profile.calories,
              bagColor: profile.color
          }
      };
  }),

  setCustomization: (key, value) => set((state) => ({
    customization: { ...state.customization, [key]: value }
  })),

  aiRecommendations: null,
  setAIRecommendations: (aiRecommendations) => set({ aiRecommendations }),
}));
