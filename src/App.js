import {useEffect, useState} from 'react';
import './App.css';
import AtividadeForm from './components/AtividadeForm';
import AtividadeLista from './components/AtividadeList';
import RoutesApp from './routes';
import GlobalStyle from './styles/global';
import { AuthProvider } from "./contexts/auth";

function App() {
    const [index, setIndex] = useState(0);
    const [atividades, setAtividades] = useState([])
    const [atividade, setAtividade] = useState({id:0})
  
useEffect(()=>{
  atividades.length <= 0 ? setIndex(1) :
  setIndex(Math.max.apply(Math, atividades.map((item) => item.id))+1,)
  
},[atividades])

  function addAtividade(ativ){
    setAtividades([...atividades,
      {...ativ, id:index}]);
  }
  function cancelarAtividade(){
    setAtividade({id:0})
  }
  function atualizarAtividade(ativ){
    setAtividades(atividades.map(item => item.id === ativ.id ? ativ : item));
    setAtividade({id:0})
  }

  function deletarAtividades(id){
    const atividadesFiltradas = atividades.filter((atividade) => atividade.id !== id);
    setAtividades([...atividadesFiltradas]);
  }
function pegarAtividade(id){
  const atividade = atividades.filter((atividade) => atividade.id === id);
  setAtividade(atividade[0])

}

  return (
    <>
    <AuthProvider>
    <RoutesApp/>
    <GlobalStyle/>
      <AtividadeForm
      addAtividade={addAtividade}
      cancelarAtividade={cancelarAtividade}
      atualizarAtividade={atualizarAtividade}
      atividadeSelecionada={atividade}
      atividades={atividades}
      
      />
      <AtividadeLista
        atividades={atividades}
        deletarAtividades={deletarAtividades}
        pegarAtividade={pegarAtividade}
      />
      </AuthProvider>
    </>
);
  
}

export default App;
