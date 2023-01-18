import { useState, useEffect } from 'react';

const atividadeInicial = {
  id: 0,
  titulo: '',
  prioridade: 0,
  descricao: '',
};

export default function AtividadeForm(props) {
    const [atividade, setAtividade] = useState(atividadeAtual());
   
    useEffect(()=> {
      if(props.atividadeSelecionada.id !== 0)setAtividade(props.atividadeSelecionada);
    },[props.atividadeSelecionada]);

    const inputTextHandler = (e) => {
       const { name, value } = e.target;
       
       setAtividade({...atividade, [name]: value});
    };

    const handleSubmit = (e) => {
      e.preventDefault();
        
      if (props.atividadeSelecionada.id !== 0 ) 
        props.atualizarAtividade(atividade);
      else 
        props.addAtividade(atividade);
        
      setAtividade(atividadeInicial);
    };

    const handleCancelar = (e) => {
      e.preventDefault();

      props.cancelarAtividade();

      setAtividade(atividadeInicial);
    };
    
function atividadeAtual(){
  if (props.atividadeSelecionada.id !== 0){
    return props.atividadeSelecionada;
  }else{
    return atividadeInicial;
  }
}

  return (
    <>
    <h1>Atividade{atividade.id !== 0 ? atividade.id : ''}</h1>
    <form className='row g-3' onSubmit={handleSubmit}>
         <div className='col-md-6'>
          <label className='form-label'>Título</label>
          <input 
            name='titulo'
            value={atividade.titulo}
            onChange={inputTextHandler}
            id='titulo' 
            type='text' 
            className='form-control'
          />
      </div>
      <div className='col-md-6'>
          <label className='form-label'>Prioridade</label>
          <select 
            name="prioridade"
            value={atividade.prioridade}
            onChange={inputTextHandler}
            id='prioridade' 
            className='form-select'
          >
            <option defaultValue='0'>Selecine...</option>
            <option value='1'>Baixo</option>
            <option value='2'>Normal</option>
            <option value='3'>Alto</option>
          </select>
      </div>
      <div className='col-md-12'>
          <label className='form-label'>Descrição</label>
          <textarea 
            name="descricao"
            value={atividade.descricao}
            onChange={inputTextHandler}
            id='descricao' 
            type='text' 
            className='form-control' 
          />
      </div>
      <hr/>
      <div className='col-12'>
        {atividade.id === 0 ? (
          <button 
            className='btn btn-primary' 
            type='submit'
          > 
            <i className='fas fa-plus me-2'></i>
            ATIVIDADE 
          </button>
        ): (
          <>
           <button 
            className='btn btn-primary'
            type='submit' >
            <i className='fas fa-plus me-2'></i>
            Salvar 
          </button>
          <button 
            className='btn btn-primary'
            type='submit'  
            onClick={handleCancelar} > 
            Cancelar 
          </button>
          </>)
      }
      </div>
    </form>
    </>
  );
}
