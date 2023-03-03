import { useSelector } from 'react-redux';
import { MainPanel } from './components/MainPanel';
import { WelcomePage } from './components/WelcomePage.tsx';
import { StateType } from './store';
import { Header } from './libs/components/Header';
import { Navbar } from './libs/components/Navbar';
import { ContentContainer } from '@UG/libs/components';

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
      <Header />
      <ContentContainer>
        <MainPanel />
      </ContentContainer>
      <Navbar />
    </>
  );
};

export default App;
