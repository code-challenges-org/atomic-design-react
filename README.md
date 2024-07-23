<div align="center">
  <img width="280px" src="https://sa-east-1.graphassets.com/clvfs1ld70bcs07ke07bkdxol/clxcfha33086207lv0j1wex8v" alt="Code Challenges" />
</div>

</br>

**Atomic Design** é uma metodologia desenvolvida por **Brad Frost** e segue uma ideia de que interfaces podem ser quebradas em elementos fundamentais e recombinados para formar estruturas mais complexas.

Para conseguir aplicar Atomic Design da forma correta, você precisa entender como funciona a separação de **átomos**, **moléculas** e **organismos**.

## Átomos

São componentes primitivos que não contém dependência de outros componentes.
</br>

### Exemplo

```jsx
export const Image = (props: ImageProps) => {
  return <img className={props.className} src={props.src} alt={props.alt} />;
};
```

## Moléculas

São componentes que contém dependência de ao menos um átomo.

### Exemplo

```jsx
import { Image } from '@/components/atoms/Image';
import { Button } from '@/components/atoms/Button';

export const Thumbnail = (props: ThumbnailProps) => {
  return (
    <div>
      <Image src={props.imageURL} alt={props.description} />

      <Button onClick={props.onClickPlayButton}>Play</Button>
    </div>
  );
};
```

## Organismo

São componentes que contém dependência de ao menos uma molécula.

### Exemplo

```jsx
import { Video } from '@/components/atoms/Video';
import { Thumbnail } from '@/components/molecules/Thumbnail';

export const VideoThumbnail = (props: VideoThumbnailProps) => {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  if (isPlayingVideo) {
    return <Video />;
  }

  return <Thumbnail />;
};
```

<br />

Ao entender como funciona essa separação é possível ver os ganhos ao aplicar Atomic Design em seus componentes.

Atomic Design faz você pensar mais no **design (modelagem)** dos componentes para que você não ultrapasse os limites de átomos, moléculas e organismos, como criar um átomo contendo um componente como dependência ou um organismo como sendo uma molécula.

Essas restrições geram componentes pequenos, reutilizáveis e fácil de testar.

