import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';
import FormField from '../../components/FormField';
import Button from '../../components/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };
  // Destructuring  array
  const [categorias, setCategorias] = useState([]);
  const [categoria, setCategoria] = useState(valoresIniciais);

  function setValuesCategoria(event) {
    const key = event.target.getAttribute('name');
    const { value } = event.target;
    setCategoria({
      ...categoria,
      [key]: value,
    });
  }
  //hooks
  // Similar ao componentDidMount e componentDidUpdate:
  useEffect(() => {
    console.log('alo alo w brasil');
    const url = 'http://localhost:8080/categorias';
    fetch(url)
      .then(async (resultEndPoint) => {
        const dados = await resultEndPoint.json();
        console.log('dados', dados);
        setCategorias([
          ...dados,
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Categoria </h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setCategorias([
            ...categorias, categoria,
          ]);
          //setCategoria(valoresIniciais);
        }}
      >
        <FormField
          label="Nome da Categoria"
          name="nome"
          type="text"
          value={categoria.nome}
          onChange={setValuesCategoria}
        />
        <FormField
          label="Descrição"
          name="descricao"
          type="textarea"
          value={categoria.descricao}
          onChange={setValuesCategoria}
        />
        <FormField
          label="Cor"
          name="nome"
          type="color"
          value={categoria.cor}
          onChange={setValuesCategoria}
        />
        <Button>Cadastrar</Button>
      </form>

      { !categorias.length
        && (<div>...Loading </div>)}
      <ul>
        {categorias.map((value, index) => <li key={index}>{value.titulo}</li>)}
      </ul>
      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
