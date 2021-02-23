[[TOC]]

## Descrição do Padrão

O padrão será apresentado em duas etapas: **O Problema** no qual seu uso faz sentido, e **A Solução** que o padrão propõe para o resolver.

### O Problema

Em um sistema de microsserviços, o compartilhamento de fontes de dados aumenta o acoplamento entre serviços. Além disso, quando há diversos serviços consultando uma mesma base, há a preocupação da manutenção de consistência e de acessos concorrentes.

### A Solução

Crie fontes de dados distribuídas de modo que cada qual seja acessada exclusivamente por um único serviço. A divisão entre as fontes pode ser física -- ou seja, cada serviço usa uma instância de banco diferente -- ou lógica -- cada serviço usa um _namespace_ diferente em uma mesma instância de banco.

## Análise de Trade-offs

  - [+] localmente, facilita a gestão de dados de cada serviço
  - [-] globalmente, aumenta a complexidade da gestão de dados, pela replicação e manutenção em ambiente heterogêneo 
  - [+] diminui o acoplamento entre serviços que antes compartilhavam uma mesma fonte
