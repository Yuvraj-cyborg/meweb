import { create } from 'zustand';

type Theme = 'light' | 'dark';

interface ThemeState {
  theme: Theme;
  isInitialized: boolean;
  initializeTheme: () => void;
  toggleTheme: () => void;
}

const applyThemeToDOM = (theme: Theme) => {
  if (typeof document !== 'undefined') {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    root.classList.toggle('dark', theme === 'dark');
  }
};

export const useThemeStore = create<ThemeState>((set, get) => ({
  theme: 'dark', // Default theme before initialization
  isInitialized: false,

  initializeTheme: () => {
    if (typeof window !== 'undefined' && !get().isInitialized) {
      const savedTheme = localStorage.getItem('theme') as Theme | null;
      // Default to 'dark' if no theme is saved
      const initialTheme = savedTheme || 'dark';

      set({ theme: initialTheme, isInitialized: true });
      applyThemeToDOM(initialTheme);
    }
  },

  toggleTheme: () => {
    if (typeof window !== 'undefined') {
      const newTheme = get().theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      set({ theme: newTheme });
      applyThemeToDOM(newTheme);
    }
  },
}));
