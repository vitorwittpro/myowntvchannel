# Fases de Entrega - Criando um Canal de TV em um Site

Este documento descreve a divisão do projeto em fases de entrega, desde o projeto básico até a finalização com funcionalidades e ferramentas avançadas.

---

## Fase 1: Projeto Básico - Configuração e Funcionalidade Inicial

### Objetivo:
Estabelecer a base do projeto com a configuração inicial das tecnologias (Next.js no frontend, NestJS no backend) e uma funcionalidade mínima para garantir que o fluxo básico do projeto funcione.

### Tarefas:
1. **Configuração Inicial do Frontend (Next.js)**:
   - Inicializar o projeto Next.js.
   - Criar uma página simples de teste, sem integração com backend.
   - Incluir dependências do **React Player** ou **HLS.js** para permitir a futura reprodução de vídeos.
   
2. **Configuração Inicial do Backend (NestJS)**:
   - Criar o projeto NestJS.
   - Configurar a API REST simples para fornecer dados do vídeo atual (somente um endpoint inicial para testar a comunicação).
   - Testar a integração entre frontend e backend.

3. **Banco de Dados e Persistência de Dados (Inicial)**:
   - Escolher entre **PostgreSQL** ou **MongoDB** (conforme necessidade).
   - Configurar a conexão com o banco de dados, mas ainda sem funcionalidades completas de metadados de vídeos.
   
### Entrega:
- Frontend básico configurado com Next.js.
- Backend básico configurado com NestJS e endpoint de teste.
- Banco de dados configurado.

---

## Fase 2: Funcionalidade de Reprodução e Transcodificação de Vídeos

### Objetivo:
Adicionar a reprodução contínua de vídeos, começando com uma lista de vídeos fixa, e integrar a transcodificação para streaming.

### Tarefas:
1. **Implementação da Reprodução de Vídeos no Frontend**:
   - Integrar o player (React Player ou HLS.js) para carregar e reproduzir vídeos.
   - Configurar uma tela inicial para exibir o vídeo atual.
   - Implementar a funcionalidade de lista/playlist básica, onde os vídeos são reproduzidos em sequência.

2. **Integração de Backend - API para Vídeos**:
   - Criar endpoints para fornecer o vídeo atual (ex.: URL do vídeo, título).
   - Implementar funcionalidade de playlist para gerenciar a ordem de reprodução dos vídeos.

3. **Transcodificação com FFmpeg**:
   - Configurar **FFmpeg** no backend para preparar os vídeos para streaming (convertendo para formato HLS, por exemplo).
   - Criar scripts de transcodificação no backend para vídeos enviados.

4. **Hospedagem Inicial de Vídeos**:
   - Armazenar vídeos em um serviço como **AWS S3** ou **Google Cloud Storage**.
   - Configurar a entrega de vídeos via CDN (**CloudFront** ou outro serviço).

### Entrega:
- Funcionalidade de reprodução de vídeos simples implementada.
- API que fornece o vídeo atual e a lista de vídeos configurada.
- Videos preparados para streaming com transcodificação.

---

## Fase 3: Melhoria da Interface e Funcionalidades Avançadas

### Objetivo:
Melhorar a interface de usuário e adicionar funcionalidades avançadas para o controle de playlists, autenticação e gerenciamento de vídeos.

### Tarefas:
1. **Melhoria da Interface no Frontend**:
   - Adicionar controles de reprodução (play, pause, skip).
   - Implementar interface para visualização da playlist.
   - Melhorar a experiência do usuário com um design mais polido (utilizar CSS frameworks como **Tailwind CSS** ou **Material UI**).
   
2. **Gerenciamento de Playlists no Backend**:
   - Implementar endpoints REST ou GraphQL para manipulação da playlist (adicionar, remover ou reorganizar vídeos).
   - Criar lógica para o backend gerenciar a ordem dos vídeos na playlist.

3. **Autenticação de Usuário**:
   - Implementar autenticação via **JWT** ou **OAuth** no backend (login, registro).
   - Adicionar a lógica de controle de acesso para funções sensíveis (como upload de vídeos ou manipulação de playlists).

4. **Aprimoramento do Banco de Dados**:
   - Definir modelos para vídeos e playlists (com **TypeORM** ou **Prisma** no backend).
   - Implementar o armazenamento de metadados (título, descrição, URL do vídeo, etc.).
   
### Entrega:
- Interface de usuário aprimorada.
- Funcionalidade de controle de playlist e autenticação implementada.
- Banco de dados com estrutura mais robusta de vídeos e playlists.

---

## Fase 4: Otimização, Escalabilidade e DevOps

### Objetivo:
Implementar as práticas de DevOps, automação de deploy, monitoramento e escalabilidade da infraestrutura.

### Tarefas:
1. **Infraestrutura como Código (IaC)**:
   - Configurar **Terraform** ou **AWS CloudFormation** para provisionamento de infraestrutura (S3, CDN, EC2, etc.).
   
2. **Automação de Deploy (CI/CD)**:
   - Configurar **GitHub Actions**, **GitLab CI/CD**, ou **Jenkins** para automação do deploy tanto do frontend quanto do backend.

3. **Monitoramento e Logs**:
   - Integrar ferramentas de monitoramento como **Prometheus** e **Grafana**.
   - Implementar **Elastic Stack (ELK)** ou **Datadog** para logs centralizados e análise de métricas.

4. **Contêineres e Orquestração**:
   - Dockerizar o frontend e o backend.
   - Configurar **Kubernetes** para orquestração e escalabilidade automática.
   
5. **Otimização de Performance**:
   - Implementar cache de vídeos ou metadados com **Redis**.
   - Revisar performance da aplicação, garantindo que o sistema possa escalar de acordo com a demanda de usuários.

### Entrega:
- Infraestrutura provisionada e configurada via IaC.
- Pipeline de CI/CD configurado.
- Monitoramento e logs implementados.
- Sistema escalável usando Docker e Kubernetes.

---

## Fase 5: Finalização e Refinamento

### Objetivo:
Finalizar o projeto, realizar testes completos, corrigir bugs e preparar a documentação.

### Tarefas:
1. **Testes**:
   - Implementar testes unitários e de integração (utilizando **Jest**, **Supertest**, etc.).
   - Realizar testes de carga e desempenho para garantir que o sistema possa suportar um número elevado de acessos.

2. **Refinamento e Ajustes Finais**:
   - Ajustar a UI/UX com base no feedback.
   - Corrigir qualquer bug ou inconsistência.

3. **Documentação**:
   - Atualizar o README com detalhes completos sobre como rodar o projeto.
   - Adicionar diagramas de arquitetura e fluxos de dados.

### Entrega:
- Sistema finalizado, com testes completos.
- Documentação finalizada e pronta para produção.

---

## Resumo das Fases de Entrega

| Fase              | Descrição                                                       |
|-------------------|-----------------------------------------------------------------|
| **Fase 1**        | Projeto básico e configuração inicial.                         |
| **Fase 2**        | Funcionalidade de reprodução de vídeos e transcodificação.      |
| **Fase 3**        | Melhoria da interface e funcionalidades avançadas.             |
| **Fase 4**        | DevOps, escalabilidade e monitoramento.                         |
| **Fase 5**        | Testes, refinamento e documentação final.                      |
