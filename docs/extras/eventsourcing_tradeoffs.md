# Event Sourcing

[[TOC]]

## Descrição do Padrão

O padrão será apresentado em duas etapas: **O Problema** no qual seu uso faz sentido, e **A Solução** que o padrão propõe para o resolver.

### O Problema

Em uma arquitetura de microsserviços orientada a eventos com gestão de dados descentralizada, existe a dificuldade em garantir atomicidade para a combinação de tarefas: persistência e notificação.

### A Solução

Implemente uma estrutura que permita que serviços publiquem eventos em tópicos e que também permita que serviços se inscrevam em tópicos para receber eventos. Faça com que esta estrutura persista os eventos em seus tópicos como uma lista cronológica.

## Análise de Trade-offs

:heavy_plus_sign: garante atomicidade para persistência e notificação

:heavy_minus_sign: implementa uma solução não-trivial para lidar com dados

:heavy_plus_sign: torna possível reconstruir estados históricos da aplicação
