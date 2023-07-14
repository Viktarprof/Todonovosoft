import './App.css';
import TodoContainer from './components/TodoContainer/TodoContainer';
import FormContainer from './components/FormContainer/FormContainer';

function App() {
  return (
    <section className='container'>
      <FormContainer />
      <TodoContainer />
    </section>
  );
}

export default App;