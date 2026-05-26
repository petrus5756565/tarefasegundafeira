# Projeto de Ícones de Redes Sociais

Este projeto exibe três cards de redes sociais com ícones de Instagram, Twitter e YouTube. 
O layout é totalmente responsivo e funciona perfeitamente em dispositivos móveis, tablets e desktops.

## Estrutura do projeto

- `src/index.html` - página principal com os cards e botões (comentada).
- `src/style.css` - estilos responsivos para o layout (comentado).
- `src/icons/instagram.svg` - ícone do Instagram.
- `src/icons/twitter.svg` - ícone do Twitter.
- `src/icons/youtube.svg` - ícone do YouTube.
- `package.json` - definição do projeto.
- `vercel.json` - configuração para deploy no Vercel.

## Como usar localmente

1. Abra `src/index.html` diretamente em um navegador.
2. Ou execute um servidor HTTP simples:
   ```bash
   npm install
   npm start
   ```

3. Clique nos botões abaixo de cada ícone para acessar as redes sociais.

## Deploy no Vercel

1. **Configurar repositório Git:**
   ```bash
   git init
   git add .
   git commit -m "Projeto inicial"
   ```

2. **Push para GitHub:**
   - Crie um repositório no GitHub
   - Execute:
     ```bash
     git remote add origin https://github.com/seu-usuario/seu-repositorio.git
     git push -u origin main
     ```

3. **Fazer deploy no Vercel:**
   - Acesse [vercel.com](https://vercel.com)
   - Clique em "New Project"
   - Selecione seu repositório
   - Clique em "Deploy"

4. **Pronto!** Seu site estará disponível com um URL do Vercel.

## Características

- ✅ **Responsivo:** Funciona em todas as telas (mobile, tablet, desktop)
- ✅ **Comentado:** Todo o código está comentado em português
- ✅ **Ícones SVG:** Imagens vetoriais que escalam perfeitamente
- ✅ **Botões interativos:** Com efeitos de hover e animações suaves
- ✅ **Design moderno:** Cards com sombras e gradientes

## Observações

- Cada cartão possui um quadro branco/transparente ao redor do ícone.
- O texto `loren` aparece abaixo do ícone, dentro do quadrado.
- A página se adapta automaticamente para diferentes tamanhos de tela.
- Otimizado para performance e acessibilidade.
