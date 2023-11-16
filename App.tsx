import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { ContainerSafeAreaView } from './src/assets/styles/global';
import { ThemeModeProvider } from './src/context/ThemeContext';
import { BooksContextProvider } from './src/context/BooksContext';

import { StatusBar } from 'react-native';
import RouteNavigation from './src/router';

export default function App() {
  const queryClient = new QueryClient();

  return (
    <ContainerSafeAreaView>
      <StatusBar backgroundColor="transparent" translucent />

      <QueryClientProvider client={queryClient}>
        <ThemeModeProvider>
          <BooksContextProvider>
            <RouteNavigation />
          </BooksContextProvider>
        </ThemeModeProvider>
      </QueryClientProvider>
    </ContainerSafeAreaView>
  );
}
