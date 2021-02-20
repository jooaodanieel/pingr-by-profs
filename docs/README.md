# Pingr

[[TOC]]

> O **Pingr** é um sistema hipotético inspirado no [Twitter][twitter]. Foi criado como projeto para o curso **Arquitetura Ágil de Software**, ministrado durante o [Programa de Verão - IME-USP - 2021][veraoimeusp].

O Pingr é uma rede social no formato de microblog, caracterizada pelo fato de que os usuários podem postar atualizações limitadas a 140 caracteres. Cada atualização, chamada de ping, pode ser respondida em um novo ping, pode receber uma curtida ou então pode receber pongs -- um compartilhamento por outros usuários.

Depois de um sucesso estrondoso nos primeiros dois anos e do constante crescimento da base de usuários, a empresa Pingr recebeu um grande aporte financeiro na virada de 2020 para 2021. Esse aporte possibilitou a mudança de escritório para um novo lugar onde poderão fazer as rodadas de contratação que planejavam. O planejamento é multiplicar a equipe de desenvolvimento -- indo de 15 para 250 membros ao longo dos próximos 12 meses.

Consulte os requisitos do sistema [aqui][requisitospingr].

## Proposta de Arquitetura

### Panorama

> Esta proposta é de autoria dos professores do curso. Não é um gabarito, serve como referência do processo de criação, da adoção de padrões e da condução do raciocínio durante a documentaçãõ. **Não é a única arquitetura correta**.

A arquitetura proposta segue o _estilo arquitetural de microsserviços_, por alguns fatores:
- escalabilidade da organização e das equipes de desenvolvimento
- valores ágeis guiando o processo de engenharia de software, em particular interdisciplinariedade dos times e facilidade para entrega contínua
- projeção de aumento da -- já grande -- demanda dos usuários

Abaixo, uma visão de microsserviços panorâmica. Mais detalhes estarão presentes em outras visões subsequentes.

![visão de microsserviços base][msviewbase]

As resposnsabilidades e funcionalidades de cada microsserviço são as seguintes:

  - **Autenticação**: realiza a autenticação das requisições HTTP(S) que entram no sistema, atuando como único ponto de entrada para o mundo externo (padrão: API Gateway). A _autorização_ deve ser realizada por cada um dos demais microsserviços;

  - **Usuário**: gerencia a entidade Usuário, permitindo criação, atualização e remoção de conta, além de gerenciar a visibilidade de cada usuário (público ou privado);

  - **Ping**: permite a criação e a remoção de pings, bem como a edição de visibilidade de um ping (público, privado ou restrito aos amigos especiais);

  - **Seguir + Amigos**: gerencia a relação entre usuários, permitindo a solicitação e resolução de solicitação de amizade, além de visualizar e gerenciar a lista de amigos especiais. Também permite um usuário seguir uma _hashtag_;

  - **Curtir + Pongar**: gerencia a interação em pings, permitindo curtir e _pongar_ (compartilhar);

  - **Conteúdo**: gerencia o conteúdo exibido a um usuário em suas mesas, e também permite a criação de mesas secundárias;

  - **Busca**: faz a indexação de todo o conteúdo de pings para gerar as listas de _TagNow_ (_Here_ e _World_), e dispara buscas por _hashtags_;

  - **Bate Papo**: gerencia o conteúdo privativo, ou _Direct Pings (DPs)_, permitindo criação de novas conversas e leitura e envio de novas mensagens;

  - **Notificação**: gerencia a lista de atualizações de um usuário que merecem ser notificadas. Também é responsável por acessar um serviço externo de _push notification_.

> obs: todos os serviços fazem uso de bancos de dados para persistência e busca de informações, porém neste documento não serão abordadas questões relacionadas aos modelos de dados (relacional, documentos, chave-valor, etc).

### Demais visões

Outras visões foram criadas para explicitar a arquitetura. São elas:

  1. [Busca - Visão de Microsserviços][msviewbusca]
  2. [Seguir - Visão de Microsserviços][msviewseguir]
  3. [Conteúdo Privativo - Visão de Microsserviços][msviewdps]
  4. [Conteúdo Público - Visão de Microsserviços][msviewpings]
  5. [Conteúdo Público - Diagrama de Sequência][dseqpings]


### Análises de Trade-Offs dos Padrões adotados

  - [CQRS][cqrs_tradeoffs]
  - [API Gateway][apigateway_tradeoffs]
  - [Event Sourcing][eventsourcing_tradeoffs]
  - [Asynchronous Messaging][asyncmsg_tradeoffs]

[twitter]: https://twitter.com
[veraoimeusp]: https://www.ime.usp.br/~verao/index.php
[requisitospingr]: ./extras/requisitos.md
[msviewbase]: ./msview-base.png

[msviewbusca]: ./views/msview-busca.md
[msviewseguir]: ./views/msview-seguir.md
[msviewdps]: ./views/msview-dps.md
[msviewpings]: ./views/msview-pings.md
[dseqpings]: ./views/dseqview-pings.md

[cqrs_tradeoffs]: ./extras/cqrs_tradeoffs.md
[apigateway_tradeoffs]: ./extras/apigateway_tradeoffs.md
[eventsourcing_tradeoffs]: ./extras/eventsourcing_tradeoffs.md
[asyncmsg_tradeoffs]: ./extras/asyncmsg_tradeoffs.md
