import React from 'react'
import PropTypes from 'prop-types'

// function TechItem(props) {  usando props
function TechItem({ tech,onDelete }) {  // usando desestruturacao
  return (
    <li>
        {/* props.tech */}
        { tech }
        <button onClick={onDelete} type="button">remover</button>
        </li>
  )
}

// --- propriedades padrao --
// 1 forma
// function TechItem({ tech='outros',onDelete }) {
  // 2 forma
TechItem.defaultProps = {
  tech: 'outros'
}
// ---- Prop types : serve para tipos e validacoes ----
TechItem.PropTypes ={
  tech: PropTypes.string,
  onDelete:PropTypes.func.isRequired // eh obrigatorio passar a funcao(onDelete) em techlist
}


export default TechItem;