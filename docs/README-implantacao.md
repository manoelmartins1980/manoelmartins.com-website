# Site profissional — manoelmartins.com

## Estrutura de pastas

```
My_website/
├── site/                  ← conteúdo a publicar no Dreamhost (tudo aqui dentro)
│   ├── index.html
│   ├── .htaccess          ← cabeçalhos de segurança + força HTTPS
│   └── assets/
│       ├── css/style.css
│       ├── js/main.js
│       └── img/
│           ├── favicon.svg
│           └── og-cover.png
└── docs/
    └── README-implantacao.md   ← este arquivo
```

## Conteúdo usado

Extraído do seu LinkedIn (`linkedin.com/in/manoelmartins`) após login manual, e do GitHub
(`github.com/manoelmartins1980`):

- Cargo atual: Cyber Security Engineer @ Fortinet (nov/2022–presente)
- Histórico: Network Administrator (New Tecnologia), CEO (Manoel Martins Tecnologia),
  System Administrator (Prodest, R7 Tecnologia)
- Certificações: Cisco "Designing Cisco Security Infrastructure", Microsoft MCSA/MCSE (2003),
  membro do LPI (Linux Professional Institute)
- Skills técnicas (GitHub): Python, C, Docker, Kubernetes, Ansible, Debian/Ubuntu/RedHat, Apache

Não incluí uma seção "Sobre mim" nem "Projetos GitHub" porque você não selecionou essas opções —
é fácil adicionar depois se quiser.

## Decisões de design que tomei (revise antes de publicar)

1. **Foto de perfil**: não usei a foto do seu LinkedIn (evitar expor imagem sem confirmação
   explícita sua). O layout está pronto para receber uma foto — me avise se quiser que eu
   adicione.
2. **E-mail de contato**: em vez de expor `manoel.junior@manoelmartins.com.br` em texto puro no
   HTML (o que facilita coleta por spam bots), o endereço é montado via JavaScript só quando o
   link "Email" é clicado. Se preferir um formulário de contato de verdade (com envio de e-mail),
   posso configurar usando um serviço externo (ex: Formspree) — me avise.
3. **Tema**: dark, com acento verde-água (`#00d1a0`) e azul (`#4da6ff`), estilo
   "network/security" combinando com a temática do seu banner do LinkedIn.
4. **Sem dependências externas** (sem CDN, sem fontes do Google) — reduz superfície de ataque e
   melhora performance/privacidade.

## Segurança (.htaccess)

O arquivo `.htaccess` já inclui:
- Redirecionamento forçado para HTTPS
- Content-Security-Policy restritiva (só permite recursos do próprio domínio)
- HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy
- Bloqueio de listagem de diretórios e de arquivos ocultos (`.env`, `.git`, etc.)

## Como publicar na Dreamhost

1. No painel da Dreamhost, confirme que o domínio `manoelmartins.com` aponta para uma pasta
   (geralmente algo como `manoelmartins.com/` dentro do seu usuário SFTP).
2. **Ative o SSL gratuito (Let's Encrypt)** em "Sites Seguros" antes ou logo após o upload —
   necessário para o redirecionamento HTTPS do `.htaccess` funcionar.
3. Faça backup ou remova o conteúdo genérico atual daquela pasta (você mencionou que será
   descartado — eu não tenho acesso ao servidor, então essa etapa é manual, feita por você via
   SFTP/gerenciador de arquivos).
4. Envie **todo o conteúdo da pasta `site/`** (não a pasta em si, o conteúdo dela) para a raiz do
   domínio na Dreamhost, via SFTP (FileZilla, Cyberduck, etc.) ou o gerenciador de arquivos do
   painel.
5. Acesse `https://manoelmartins.com` e confirme que carregou corretamente, em desktop e celular.

## Pontos para revisar com você

- Quer que eu adicione uma foto sua? Envie o arquivo de imagem e eu insiro no hero.
- Quer uma seção "Sobre mim" com um resumo de carreira (não existe um "About" escrito no seu
  LinkedIn — eu redigi apenas a frase de introdução do hero)?
- Quer que eu inclua projetos do GitHub (ex: `first-frontend-project`)?
- Quer um formulário de contato funcional (envio de e-mail) em vez do link `mailto`?
