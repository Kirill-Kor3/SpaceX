import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { List } from './modules/List';

function App() {
  return (
    <MantineProvider>
      <List />
    </MantineProvider>
  )
}

export default App
