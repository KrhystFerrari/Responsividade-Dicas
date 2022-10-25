# Responsividade 

Olá!

Responsividade é um assunto muito importante para que nosso layout seja flexível, conforme o dispositivo que o está acessando, seja ele smartphone, tablet ou desktop. (E até mesmo, a impressora sabia?)

Hoje vou mostrar o que sei sobre CSS Units para que tanto o Layout, quanto os textos, fiquem fluidos. 

Utilizarei também CSS Media Queries para adicionar CSS customizados conforme o breakpoint definido, para que nosso layout fique adaptado ao viewport do dispositivo. 

Além do mais, usarei atributos e tags HTML especiais, para que haja sucesso ao tornar o layout responsivo.

Espero que faça sentido pra você. 


## CSS Units

Unidades de medidas do CSS

Layout Fixo
`px` - Pixels

Layout Fluido
`%` - Porcentagem
`auto` - Automática
`vh` - Viewport Height
`vw` - Viewport Width

Textos fixos
`1px` = 0.75pt
`16px` = 12pt

Texto fluidos
`em` - multiplicado pelo pai 
`rem` - multiplicado pelo root

## CSS Media Queries 

No HTMl eu coloco a seguinte tag meta

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

No CSS eu uso da seguinte forma

```css
@media (max-width: 320px) {
  #form h3 {
    font-size: 2rem;
  }
}
```

## HTML Media Attrib.

Posso utilizar o atribuito `media` no link do meu HTML, ao importar um arquivo css, usando as propriedades da mesma forma que usaria na regra `@media` do css.

```html
<link 
    rel="stylesheet"
    href="responsive.css" 
    media="screen and (max-width: 768px)"
/>

<link rel="stylesheet" href="print.css" media="print">
```

## Imagens

Usamos a tag `<picture>` para que as imagens sejam responsivas.

```html
<picture class="image" alt="Imagem">
    <source media="(min-width: 768px)" 
        srcset="https://i.ytimg.com/vi/GykTLqODQuU/maxresdefault.jpg">
    <source media="(min-width: 320px)" 
        srcset="https://i.ytimg.com/vi/GykTLqODQuU/hqdefault.jpg">
    <source media="(min-width: 10px)" 
        srcset="https://i.ytimg.com/vi/GykTLqODQuU/mqdefault.jpg">

    <img 
        src="https://i.ytimg.com/vi/GykTLqODQuU/hqdefault.jpg" 
        alt="Imagem" />
</picture>
```

Sempre que possível, use SVG ao invés de JPG, PNG.

Espero que isso seja de grande ajuda, pois aprender esses conceitos me ajudou MUITO!


By KrhystFerrari
