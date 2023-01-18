import React from 'react'
import Atividade from './Atividade';
export default function AtividadeList(props) {
  return (
    <div className="mt-3">
    {props.atividades.map((ativi) => (
      <Atividade 
        key={ativi.id}
        ativi={ativi}
        deletarAtividades={props.deletarAtividades}
        pegarAtividade={props.pegarAtividade}
        />
  ))}
</div>
  )
}
