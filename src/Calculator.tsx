import { BrowserRouter } from 'react-router-dom';
import RoutesControl from './Routes';
import { ThemeProvider } from './context/context/Theme';

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <RoutesControl />
      </BrowserRouter>
    </ThemeProvider>
  );
}
