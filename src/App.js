import Testimonio from './components/Testimonio'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre FreeCodeCamp</h1>
        <Testimonio
        nombre='German Soto'
        pais='Argentina'
        imagen=''
        cargo='Software Engenieer'
        empresa='NTTDATA'
        testimonio='Lorem Ipsum es un texto de marcador de posición comúnmente utilizado en las industrias gráficas, gráficas y editoriales para previsualizar diseños y maquetas visuales.
                    Lorem Ipsum es un texto de marcador de posición comúnmente utilizado en las industrias gráficas, gráficas y editoriales para previsualizar diseños y maquetas visuales.'/>
      </div>
    </div>
  );
}

export default App;
