# Image gallery for Next.js and Strapi

## Demo

Coming soon...

## Usage

```javascript
<ImageGallery images={images} />
```

#### Custom image url

By default the image url is set to 127.0.0.1:1337.

```javascript
<ImageGallery images={images} imageUrl="https://your-server.com" />
```

## Customization

### Styling

#### Loading image background color

```javascript
<ImageGallery images={images} loadingBackground={"rgb(243, 243, 243)"} />
```

#### Disable default styles

By disabling the default styles you can customize breakpoints, spacing and amount of rows.

```javascript
<ImageGallery images={images} isDefaultStyles={false} />
```

<details>
<summary>expand to see the default styles</summary>

```css
.imageGallery {
  column-count: 4; /* Amount of columns */
  column-gap: 8px; /* Space between columns */
}

.imageGallery div {
  display: inline-block;
  width: 100%;
  margin-bottom: 4px;
  border-radius: 4px;
}

.imageGallery div img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 4px;
}

@media (max-width: 1200px) {
  .imageGallery {
    column-count: 3;
  }
}

@media (max-width: 1024px) {
  .imageGallery {
    column-count: 3;
  }
}

@media (max-width: 768px) {
  .imageGallery {
    column-count: 2;
  }
}

@media (max-width: 480px) {
  .imageGallery {
    column-count: 1;
  }
}
```

</details>

### Transition

With transition config you can modify transition duration and transition timing function

```javascript
<ImageGallery
  images={images}
  transitionConfig={{
    transitionDuration: "250ms",
    transitionTimingFunction: "ease-in-out",
  }}
/>
```

## Contributing

Pull requests are welcome.

```

```
