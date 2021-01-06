import './App.css';
import 'primereact/resources/themes/arya-green/theme.css'
import "primereact/resources/primereact.min.css";
import 'primeicons/primeicons.css'
import Layout from './components/Layout/Layout'
import PetView from './containers/pages/PetView/PetView';

function App() {
  return (
    <Layout>
      <PetView />
    </Layout>
  );
}

export default App;
