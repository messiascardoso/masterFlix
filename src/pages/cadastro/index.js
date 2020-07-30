import React, { useState } from "react";
import PageDefault from "../../components/PageDefault";
import { Link } from "react-router-dom";
import FormField from "../../components/FormField";

function CadastroCategoria() {
	const valoresIniciais = {
		nome:'',
		descricao:'',
		cor:''
	}
  //Destructuring  array
	const [categorias, setCategorias] = useState([]);
	const [categoria, setCategoria] = useState(valoresIniciais);

	function setValuesCategoria( event ){
		const key = event.target.getAttribute('name');
		const value = event.target.value;	
		setCategoria({
			...categoria,
			[key]:value
		});
		
	}
  
  return (
    <PageDefault>
      <h1>Cadastro de Categoria </h1>
      <form
        onSubmit={(event)=> {
					event.preventDefault(); 
					setCategorias([
						...categorias,categoria
					])
					setCategoria(valoresIniciais);
        }}
      >
			<FormField
			  label="Nome da Categoria" 
				name="nome"
				type="text" 
				value={ categoria.nome }
				onChange={setValuesCategoria}
			/>
				<div>	
					<label>
						Descrição
						<textarea

							type="text"
							name="descricao"
							value={ categoria.descricao }
							onChange={setValuesCategoria}
						/>
					</label>
				</div>
				<FormField 
					label="Cor"
					name="nome"
					type="color" 
					value={ categoria.cor }
					onChange={setValuesCategoria}
				/>
        <ul>
          {categorias.map((value, index) => {
            return <li key={index}>{value.nome}</li>;
          })}
        </ul>
        <button>Cadastrar</button>
      </form>

      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
