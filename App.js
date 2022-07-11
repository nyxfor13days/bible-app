import { StatusBar } from 'expo-status-bar';
import { Provider as PaperProvider } from 'react-native-paper';
import Screens from './screens';

const App = () => {
	return (
		<PaperProvider>
			<Screens />
			<StatusBar style='auto' />
		</PaperProvider>
	);
};

export default App;

