# CQRS

[[TOC]]

## Descrição do Padrão

O padrão será apresentado em duas etapas: **O Problema** no qual seu uso faz sentido, e **A Solução** que o padrão propõe para o resolver.

### O Problema

Em um sistema distribuído, em particular com a gestão de dados descentralizada, existe uma dificuldade em consultar dados provenientes de diversas partes. Paralelamente a isso, as taxas de leitura e escrita de um tipo de dado podem demandar soluções distintas, em termos de performance e estruturas de dados.

### A Solução

Crie um serviço dedicado à operação de consulta. Este serviço deve acompanhar as alterações feitas em outras partes do sistema para a manutenção da consistência.

## Análise de Trade-offs

:heavy_plus_sign: é possível adotar estruturas de dados diferentes otimizadas para as operações de inserção e consulta de dados

:heavy_minus_sign: é necessário fazer replicação de dados

:heavy_plus_sign: permite independência de escalabilidade entre inserção e consulta

:heavy_minus_sign: implica em consistência eventual de dados para aqueles subconjunto do domínio

:heavy_plus_sign: melhora a performance de consultas que envolvem diferentes partes do sistema
