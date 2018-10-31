Slider with gaps of 10:

```js
const list = [
  {
    title: 'Demo Video 1',
    image: 'http://via.placeholder.com/350x150',
    duration: '10:12',
  },
  {
    title: 'Demo Video 2',
    image: 'http://via.placeholder.com/350x150',
    duration: '90:12',
  },
  {
    title: 'Demo Video 3',
    image: 'http://via.placeholder.com/350x150',
    duration: '14:23',
  },
  {
    title: 'Demo Video 5',
    duration: '14:23',
  },
  {
    title: 'Demo Video 6',
    duration: '14:23',
  },
  {
    title: 'Demo Video 7',
    duration: '14:23',
  },
  {
    title: 'Demo Video 8',
    duration: '14:23',
  },
  {
    title: 'Demo Video 9',
    duration: '14:23',
  },
  {
    title: 'Demo Video 10',
    duration: '14:23',
  },
  {
    title: 'Demo Video 11',
    duration: '14:23',
  },
  {
    title: 'Demo Video 12',
    duration: '14:23',
  },
]
;<div style={{background: '#ccc'}}>
  <FeatureVideoSlider list={list} vGap={10} hGap={10} />
</div>
```
