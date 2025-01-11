# img-compressor-sc

![img-compressor-sc logo](assets/img/img-compressor-sc.png)

## Easy images compressor for to use

img-compressor-sc is a library in Node.js for compress images in local location in live time.

> You can use this library for compress differents image types in live time to make your 
> project more light.

## Description

This library is a project think by a frontend developer with the need of, how can to use many images with a light size and very easy to implementate?, when for example the client or the design team we give the images packet and these has a high weight, wich cause our web page are very slow.

This library solve that problem with your funcionalities which help us to compress many images before the web page loaded or your web component.

## Accepted formats

| # | format       |
|---|--------------|
| 1 | `JPEG / JPG` |
| 2 | `PNG`        |
| 3 | `WebP`       |
| 4 | `SVG`        |

Note: In the SVG format is manipulation of vector, not compression.

## Installation

You can add img-compressor-sc in your project via npm.

```
npm install img-compressor-sc
```

After installation, you need import the components.

```js
import { compressImage } from ‘img-compressor-sc’;
```

## Usage and Examples

### React

```jsx
import React, { useState } from 'react';
import { compressImage } from 'img-compressor-sc';

const App = () => {
  const [compressedImage, setCompressedImage] = useState(null);

  const handleCompress = async () => {
    const localImagePath = './test.jpg';

    try {
      const compressedBuffer = await compressImage(localImagePath, 75);
      const base64Image = `data:image/jpeg;base64,${compressedBuffer.toString('base64')}`;
      setCompressedImage(base64Image);
    } catch (error) {
      console.error('Error compressing image:', error.message);
    }
  };

  return (
    <div>
      <h1>Image Compressor</h1>
      <button onClick={handleCompress}>Compress Image</button>
      {compressedImage && <img src={compressedImage} alt="Compressed" />}
    </div>
  );
};

export default App;
```

### JS Vainilla

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Image Compressor Example</title>
  <script src="path/to/img-compressor-sc.js"></script>
</head>
<body>
  <h1>Image Compressor Example</h1>
  <script>
    async function compressImageExample() {
      const compressedBuffer = await imgCompressorSc.compressImage('./test.jpg', 75);
      const base64Image = `data:image/jpeg;base64,${compressedBuffer.toString('base64')}`;
      document.getElementById('result').src = base64Image;
    }

    compressImageExample();
  </script>
  <img id="result" />
</body>
</html>
```