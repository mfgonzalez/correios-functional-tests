# correios-functional-tests
Trabalho final da disciplina de Qualidade de Software pós Unirriter

Cenários:

Teste 1 - Busca CEP ou Endereço sem nenhuma informação
Acessar o http://www.buscacep.correios.com.br/sistemas/buscacep/buscaCepEndereco.cfm, não preencher nenhuma informação e selecionar o botão buscar.
Será mostrada a seguinte mensagem: "Informe o endereço !"

Teste 2 - Busca CEP ou Endereço com logradouro inválido
Acessar o http://www.buscacep.correios.com.br/sistemas/buscacep/buscaCepEndereco.cfm, informar logradouro inválido e selecionar o botão buscar.
Será mostrada a seguinte mensagem: "DADOS NAO ENCONTRADOS"

Teste 3 - Busca CEP ou Endereço com logradouro válido e opção "todos" selecionada
Acessar o http://www.buscacep.correios.com.br/sistemas/buscacep/buscaCepEndereco.cfm, informar logradouro válido ("Avenida Saturnino de Brito, Porto Alegre"), selecionar a opção "Todos" na combobox CEP e selecionar o botão buscar.
Será mostrado 3 resultados na tabela.

Teste 4 - Busca CEP ou Endereço com logradouro válido e opção "Unidade Operacional" selecionada
Acessar o http://www.buscacep.correios.com.br/sistemas/buscacep/buscaCepEndereco.cfm, informar logradouro válido ("Avenida Saturnino de Brito, Porto Alegre"), selecionar a opção "Unidade Operacional" na combobox CEP e selecionar o botão buscar.
Será mostrado 1 resultado na tabela.

Teste 5 - Busca CEP por localidade e Logradouro sem nenhuma opção selecionada/preenchida
Acessar o http://www.buscacep.correios.com.br/sistemas/buscacep/buscaCep.cfm e não informar nenhuma opção e selecionar o botão buscar
Será mostrada a seguinte mensagem: "Selecione a UF !"

Teste 6 - Busca CEP por localidade e Logradouro e somente RS selecionada em UF
Acessar o http://www.buscacep.correios.com.br/sistemas/buscacep/buscaCep.cfm, selecionar "RS" em UF e selecionar o botão buscar
Será mostrada a seguinte mensagem: "Informe o nome da cidade, município, distrito ou povoado !"

Teste 7 - Busca CEP por localidade e Logradouro com todas as informações válidas
Acessar o http://www.buscacep.correios.com.br/sistemas/buscacep/buscaCep.cfm, selecionar "RS" em UF, em localidade informar "Porto Alegre", em tipo selecionar "Avenida", em logradouro informar "Saturnino de Brito", em número informar "120" e selecionar o botão buscar
Será mostrado 1 resultado



Teste 8 - Busca Endereço por CEP válido
Acessar o http://www.buscacep.correios.com.br/sistemas/buscacep/buscaEndereco.cfm, e informar o CEP "91320000" e selecionar o botão buscar
Será mostrado 1 resultado.



Teste 9 - Rastreador sem informações válidas
Acessar o https://www2.correios.com.br/sistemas/rastreamento/, não informar nenhum valor e selecionar o botão buscar
Será mostrada a seguinte mensagem: "Por favor, digite de um a 50 códigos de objetos, ou um CPF/CNPJ válido"

Teste 10 - Rastreador com código de rastreamento inválido
Acessar o https://www2.correios.com.br/sistemas/rastreamento/, e informar código de rastreamento inválido ("AA100833276BR") e selecionar o botão buscar.
Será mostrada a seguinte mensagem: "O nosso sistema não possui dados sobre o objeto informado."

Teste 11 - Rastreador com código de rastreamento válido
Acessar o https://www2.correios.com.br/sistemas/rastreamento/, e informar código de rastreamento válido ("RS245086917DE") e selecionar o botão buscar.
Será mostrada a seguinte mensagem: "Objeto entregue ao destinatário"
