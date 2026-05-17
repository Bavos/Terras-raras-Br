# Terras Raras Brasil — Remotion

Projeto completo em **Remotion + React + TypeScript** para gerar um vídeo jornalístico moderno de 46 segundos sobre **“Terras Raras e o Potencial Estratégico do Brasil”**.

## Objetivo

Gerar um vídeo em motion graphics, estilo jornalístico jovem, tecnológico e premium, com fundo claro, elementos procedurais, infográficos editoriais e fontes discretas no canto inferior esquerdo.

## Stack utilizada

- React
- TypeScript
- Remotion
- SVG procedural
- CSS
- Animações com `interpolate`, `spring`, `useCurrentFrame` e `useVideoConfig`

## Configuração do vídeo

- Composição: `TerrasRarasBrasil`
- Duração: 46 segundos
- FPS: 30
- Frames totais: 1380
- Resolução: 1920x1080
- Formato final: MP4
- Saída: `downloads/final/terras_raras_brasil_2026_v1.mp4`

## Instalação

```bash
npm install
```

## Rodar preview

```bash
npm run dev
```

## Renderizar

```bash
npm run render
```

## Estrutura de arquivos

```text
src/
  components/   Componentes reutilizáveis, HUD, mapas, gráficos, ícones e transições.
  scenes/       Cenas separadas por bloco narrativo.
  animations/   Helpers de movimento e timing.
  styles/       CSS global do projeto.
  utils/        Utilitários matemáticos.
  data/         Constantes, cores, duração e textos do roteiro.
  assets/       Apenas documentação; sem imagens binárias.
  sources/      Lista editorial de fontes.
remotion/
  Root.tsx        Registro da composição Remotion.
  Composition.tsx Timeline principal do vídeo.
downloads/final/  Destino do render MP4.
```

## Observações importantes

Este projeto **não usa áudio, locução, imagens binárias, PNG, JPG, WebP, stock footage ou arquivos externos de mídia**. Todos os elementos visuais são criados com SVG, CSS, textos, formas e animações procedurais.

## Fontes usadas

- ANM
- Serviço Geológico Brasileiro
- ABPM
