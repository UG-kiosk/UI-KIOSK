import { MainPanel } from './components/MainPanel';
import { Header } from './components/Header';

const App = () => (
  <>
    <Header />
    <p data-cy="hello-world-p">Hello World</p>
    <MainPanel />
  </>
);

export default App;
