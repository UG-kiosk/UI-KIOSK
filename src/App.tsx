import { useSelector } from 'react-redux';
import { MainPanel } from './components/MainPanel';
import { WelcomePage } from './components/WelcomePage.tsx';
import { StateType } from './store';

interface StateProps {
  isWelcomed: boolean;
}

const App = () => {
  const { isWelcomed } = useSelector<StateType, StateProps>(state => state.isWelcomed);

  if (!isWelcomed) {
    return <WelcomePage />;
  }

  return (
    <>
      <p data-cy="hello-world-p">Hello World</p>
      <MainPanel />
    </>
  );
};

export default App;
