import React from 'react'

export default function Atividades(props) {
  function prioridadeLabel(parametro){
    switch(parametro){
      case '1':
        return 'Baixa';
      case '2':
        return 'Normal';
      case '3':
        return 'Alta';
      default:
        return 'Não definido';
    }
  }
  function prioridadeStyle(parametro, icone){
    switch(parametro){
      case '1':
        return icone ? 'smile' : 'success';
      case '2':
        return icone ? 'meh' : 'dark';
      case '3':
        return icone ? 'frown' : 'warning';
      default:
        return 'Não definido';
    }
  }

  return (<div className={'card mb-2 shadow-sm border-' + prioridadeStyle(props.ativi.prioridade)}>
    <div className='card-body'>
      <div className='d-flex justify-content-between'>
        <h5 className='card-title'>
        <span className="badge bg-primary text-dark -m1">{props.ativi.id}</span>
            - {props.ativi.titulo}
        </h5>
        <h6>
          Prioridade:
            <span className={'ms-1 text-' + prioridadeStyle(props.ativi.prioridade)}>
            <i className={'me-1 far fa-' + prioridadeStyle(props.ativi.prioridade, true)}></i>
            {prioridadeLabel(props.ativi.prioridade)}
            </span>
        </h6>
      </div>
        <p className="card-text">{props.ativi.descricao}</p>
      <div className="d-flex justify-content-end pt-2 m-0 border-top">
          <button 
          className="btn btn-outline-primary me-2 btn-sm"
          onClick={() => props.pegarAtividade(props.ativi.id)}>
            <i className="fas fa-pen me-2"></i>
            EDITAR
          </button>
          <button className='btn btn-sm btn-outline-danger' 
          onClick={() => props.deletarAtividades(props.ativi.id)}>
            <i className="fas fa-trash me-2"></i>
            DELETAR
          </button>
      </div>
    </div>
    </div>
  );
}
