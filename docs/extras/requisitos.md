# Pingr - Requisitos do Sistema

[[TOC]]

## Requisitos Funcionais

O sistema da Pingr é uma rede social no formato de microblog, caracterizada pelo fato de que os usuários podem postar atualizações limitadas a 140 caracteres. Cada atualização, chamada de ping, pode ser respondida em um novo ping, pode receber uma curtida ou então pode receber pongs -- um compartilhamento por outros usuários.

Para poder pingar (postar pings), as pessoas precisam criar uma conta com e-mail, senha e um nome de usuário. Um ping pode conter textos limitados a 140 caracteres e/ou imagens, e ainda pode ser classificado com até 10 palavras-chave (via hashtags que não são contabilizadas nos 140 caracteres). Depois de postado, não pode mais ser editado -- o dono do ping pode apenas apagá-lo do histórico. Um ping pode ser respondido com um novo ping por qualquer usuário do Pingr, inclusive o próprio autor. Porém, apenas outros usuários podem curtir ou dar pong (compartilhar aquele ping). Interações em pings geram notificações ao autor.

Um usuário pode seguir outros usuários. Essa relação não é espelhada, isto é, quando um usuário A começa a seguir um usuário B, isto não significa que B começa a seguir A. Quando um usuário começa a seguir outro, uma notificação é gerada para o seguido. Além de seguir usuários, também é possível seguir hashtags. O conjunto histórico de pings dos usuários seguidos por um usuário é exibido em sua mesa principal (a linha do tempo).

Um usuário pode fazer menções a outros usuários em um ping, adicionando seus nomes de usuários (no formato @nomeDeUsuário) no texto do ping. Menções dessa forma geram notificações aos referidos usuários.

Por padrão, o conjunto de pings de um usuário é público. Isso significa que qualquer pessoa -- mesmo sem ter um perfil no Pingr -- pode acessá-lo. Um usuário pode gerenciar a visibilidade de seus pings de algumas formas:
  - Redefinir o padrão para privado e, nesse caso, outros usuários precisam solicitar permissão para segui-lo e assim poder ver e interagir com seus pings, ou
  - Marcar um ping como restrito aos amigos especiais, uma lista de usuários que seguem o usuário em questão e é pré-definida pelo mesmo (apenas no caso do padrão estar como público), ou
  - Marcar um ping como público (apenas no caso em que o padrão está como privado).

Quando um usuário A solicita seguir um usuário privado B, uma notificação é gerada para B. Quando B decide a solicitação (seja aceitando ou recusando), uma notificação é gerada para A informando o ocorrido.

A cada 10 minutos, são geradas a TagNow World (TgNW) e a TagNow Here (TgNH), duas listas de palavras-chave mais utilizadas: uma global e outra configurável por usuário. As opções selecionáveis da TgNH são nacional, estadual e municipal, de acordo com a localização do sensor de GPS. No caso de o usuário não ter acesso a um sensor GPS ou o usuário não ter dado permissão para acessar o mesmo, então a segunda lista de hashtags não fica disponível. Aos usuários que acessam o Pingr pelo cliente web, a TgNH não está disponível -- ela é exclusiva de clientes mobile. Ao selecionar uma hashtag de alguma TgN, uma busca é disparada por pings marcados com aquela palavra-chave.

Outra forma de interagir pelo Pingr é através de Direct Ping (DP). Enviar um DP é a forma de trocar mensagens com um outro usuário de forma privada. Ao receber um DP, uma notificação é gerada para o usuário. Um DP não pode ser curtido nem receber pongs; apenas pode ser respondido. As demais restrições de um ping normal se aplicam a um DP. Um DP passa internamente por alguns estágios:
  1. Enviado: quando a mensagem sai com sucesso do emissor;
  2. Não-recebido: quando a mensagem é enviada, porém ocorreu alguma falha no caminho. Nesse caso, ela pode ser reenviada;
  3. Recebido: quando a mensagem é enviada e recebida com sucesso;
  4. Visualizado: quando a mensagem é recebida e o usuário a abre.

Um usuário pode criar mesas secundárias personalizadas com filtros -- por grupo de usuários e/ou hashtags. O número máximo de mesas é 4: a mesa principal padronizada e 3 outras mesas personalizadas. A visualização de mesas personalizadas é restrita apenas a usuários acessando por clientes web. Para clientes mobile, apenas a mesa principal é disponibilizada.

As notificações têm comportamentos diferentes dependendo do cliente:
  - Clientes mobile têm suporte a notificações PUSH que são enviadas assim que a ação ocorre (interação com pings, DPs, etc);
  - Tanto web quanto mobile têm um menu específico para listar as notificações, ordenadas da mais recente para a mais antiga. As notificações são diferenciadas entre “lidas” e “não lidas”.


## Requisitos Não-Funcionais

Depois de um sucesso estrondoso nos primeiros dois anos e do constante crescimento da base de usuários, a empresa Pingr recebeu um grande aporte financeiro na virada de 2020 para 2021. Esse aporte possibilitou a mudança de escritório para um novo lugar onde poderão fazer as rodadas de contratação que planejavam. O planejamento é multiplicar a equipe de desenvolvimento -- indo de 15 para 250 membros ao longo dos próximos 12 meses.

O Pingr é acessado maciçamente por seu público ao longo das 24 horas do dia. Apesar disso, as pesquisas de aceitação demonstraram que os usuários toleram alguns delays nas atualizações. Alguns exemplos de tolerâncias do público:
  - Pings de outros podem demorar até 3 minutos para aparecer na(s) sua(s) mesa(s);
  - DPs podem levar até 1 minuto para serem recebidos;
  - Pings próprios podem levar até 15s para aparecerem para si.

Até 4 meses atrás, a empresa Pingr investiu apenas no público latino-americano. Desde então, a rede social está expandindo para outras regiões do planeta. Até julho de 2022, o plano é de ter presença em países de todos os continentes.

Durante sua criação e crescimento inicial, o Pingr passou pela aprovação em uma consultoria sobre LGPD. O novo sistema deve manter o mesmo patamar em conformidade com as novas diretrizes de segurança de dados pessoais.

Mesmo com uma equipe de desenvolvimento pequena, o Pingr sempre foi desenvolvido sob as práticas de Engenharia de Software Ágil e assim deverá se manter durante a expansão da equipe. Os times serão autogerenciáveis e multidisciplinares (o quanto for possível).

Para a cultura da engenharia de software da empresa, é importante que o sistema seja testável, desde suas unidades até a integração das partes. Além disso, deve ser possível fazer testes A/B com usuários para o lançamento de novas funcionalidades, implantação canária (canary deployment) e demais técnicas semelhantes.
