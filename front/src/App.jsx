import { MantineProvider, Text, Modal } from '@mantine/core';
import { useState } from 'react';
import Game from './components/Game';
import { GameProvider } from './providers/GameProvider';
import { Home } from './components/Home';

export default function App() {
  const [isHome, setIsHome] = useState(true);
  return (
    <MantineProvider
      theme={{
        fontFamily: 'Open Sans, sans serif',
        spacing: { xs: 15, sm: 20, md: 25, lg: 30, xl: 40 },
      }} 
      withGlobalStyles 
      withNormalizeCSS>
        {isHome 
          ? 
            <Home startGame={() => {setIsHome(false)}} />
          :
            <GameProvider>
              <Game />
            </GameProvider>
        }
    </MantineProvider>
  );
}