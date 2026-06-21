import { create } from 'zustand';

export const FLAVOR_PROFILES = {
  'Sea Salt & Lime': { productivity: 40, taste: 60, calories: 30, color: '#34c759', sprinkleColor: '#ffffff' },
  'Spicy Chili': { productivity: 80, taste: 95, calories: 45, color: '#ff3b30', sprinkleColor: '#ff9500' },
  'Wild Honey': { productivity: 30, taste: 85, calories: 70, color: '#ffcc00', sprinkleColor: '#f5d142' },
  'Truffle Black': { productivity: 95, taste: 70, calories: 50, color: '#1c1c1e', sprinkleColor: '#444444' }
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
    productivity: FLAVOR_PROFILES['Sea Salt & Lime'].productivity,
    taste: FLAVOR_PROFILES['Sea Salt & Lime'].taste,
    calories: FLAVOR_PROFILES['Sea Salt & Lime'].calories,
    flavor: 'Sea Salt & Lime',
    method: 'Air Fried',
    oil: 'Avocado Oil',
    thickness: 'Thin',
    theme: 'Eco Edition',
    target: 'Developer',
    bagColor: '#34c759',
    bagImage: null,
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
