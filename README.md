# Bem vindo ao Safe door [front-end]

## Objetivo do projeto

> Criar uma estrutura de projeto baseada em permissões e para controle de acesso ao qual usuário será atribuído, podendo
> ser personalizada com facilidade.

## Estrutura do projeto

> Nessa sessão sera definida a estrutura do projeto, todas as pastas abaixo estão contidas dentro de `./src`:

- `/assets` Arquivos auxiliares que serão utilizadas por plugins de terceiros, imagens…
- `/config` Arquivos de configurações, sejam eles necessários para utilização de plugins ou quaisquer que sejam sua
  necessidade.
- `/controllers` Pasta onde todas as ações referentes a **configurações, plugins, conexões com *APIs*** serão
  realizadas.
    - `/services` Pasta contendo todas as conexões possíveis com as ***APIs***.
- `/models` Pasta contendo todas as **entidades, DTOs e Regras de implementação** da aplicação.
    - `/entities` Pasta contendo os modelos representativos das tabelas do banco.
    - `/dtos` Pasta contendo os modelos de regra de negócio que devem ter como extensão os arquivos da sua
      respectiva entidade.
- `/views` Pasta contem todos os **componentes e arquivos de estilo** da aplicação.
    - `/data` Pasta funciona como o "design-pattern proxy" comunicando os componentes com sua respectiva service,
      todos os arquivos aqui devem conter no nome `[component].data`.
    - `/pages` Pasta contem todos os componentes que recebem rotas de acesso.
    - `/components` Pasta contem todos os componentes que não recebem rotas de acesso e serão reutilizadas eu vários
      locais.
    - `/styles` Pasta contendo arquivos de estilo.
- `**/shared` `Opcional` Todas as regras serão definidas que devem ser obrigatoriamente implementas em seus
  respectivos arquivos.
- `**/utils` `Opcional` Todos os arquivos que provem auxilio no desenvolvimento, porém não são obrigatórios.