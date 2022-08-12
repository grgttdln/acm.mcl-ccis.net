const content = [
  {
    id: '1',
    contentType: 'GROUP',
    x: 0,
    y: 0,
    scale: 1,
    children: [
      {
        contentType: 'IMAGE',
        image: '/anniversary/2022/gallery-bg.svg',
        x: 12,
        y: 46,
        rotation: 0,
      },
      {
        contentType: 'IMAGE',
        image: '/anniversary/2022/star-thing.svg',
        x: 236,
        y: 14,
        rotation: 0,
      },

      {
        contentType: 'IMAGE',
        image: '/anniversary/2022/gallery/pic-1.png',
        text: 'Group 39986',
        x: 20,
        y: 66,
        width: 126.18,
        height: 211.57,
        rotation: 0,
      },
      {
        contentType: 'IMAGE',
        image: '/anniversary/2022/gallery/pic-5.png',
        text: 'Group 39990',
        x: 20,
        y: 283.73,
        width: 195.84,
        height: 92.43,
        rotation: 0,
      },
      {
        contentType: 'IMAGE',
        image: '/anniversary/2022/gallery/pic-7.png',
        text: 'Group 39993',
        x: 20,
        y: 383,
        width: 160,
        height: 177,
        rotation: 0,
      },
      {
        contentType: 'IMAGE',
        image: '/anniversary/2022/gallery/pic-2.png',
        text: 'Group 39987',
        x: 154.26,
        y: 66,
        width: 185.74,
        height: 118.11,
        rotation: 0,
      },
      {
        contentType: 'IMAGE',
        image: '/anniversary/2022/gallery/pic-4.png',
        text: 'Group 39989',
        x: 244,
        y: 189,
        width: 96,
        height: 88,
        rotation: 0,
      },
      {
        contentType: 'IMAGE',
        image: '/anniversary/2022/gallery/pic-3.png',
        text: 'Group 39988',
        x: 154.26,
        y: 189.24,
        width: 84.74,
        height: 87.3,
        rotation: 0,
      },
      {
        contentType: 'IMAGE',
        image: '/anniversary/2022/gallery/pic-6.png',
        text: 'Group 39991',
        x: 222.9,
        y: 283.73,
        width: 117.1,
        height: 92.43,
        rotation: 0,
      },
      {
        contentType: 'IMAGE',
        image: '/anniversary/2022/gallery/pic-8.png',
        text: 'Group 39992',
        x: 188,
        y: 384,
        width: 152,
        height: 63,
        rotation: 0,
      },
      {
        contentType: 'IMAGE',
        image: '/anniversary/2022/gallery/pic-9.png',
        text: 'Group 39994',
        x: 188,
        y: 456,
        width: 152,
        height: 104,
        rotation: 0,
      },
    ],
  },

  {
    id: '2',
    contentType: 'GROUP',
    x: 0,
    y: 0,
    scale: 1,
    children: [
      {
        contentType: 'TEXT',
        text: 'Be part of our community!',
        x: 28,
        y: 637,
        width: 360,
        height: 50,
        fontFamily: 'Reenie Beanie',
        fontSize: 32,
        lineHeight: 1,
        fontStyle: '300',
      },
      {
        contentType: 'IMAGE',
        image: '/anniversary/2022/registration-btn.svg',
        text: 'Group 39994',
        x: 91,
        y: 687,
      },
      {
        contentType: 'TEXT',
        text: 'Check out our events',
        x: -16,
        y: 795,
        width: 360,
        height: 50,
        fontFamily: 'Reenie Beanie',
        fontSize: 32,
        lineHeight: 1,
        align: 'right',
        fontStyle: '300',
      },
      {
        contentType: 'IMAGE',
        image: '/anniversary/2022/event-btn.svg',
        x: 23,
        y: 839,
      },
    ],
  },
  {
    contentType: 'IMAGE',
    image: '/anniversary/2022/bottom-arrow.svg',
    text: 'Group 39994',
    x: 200,
    y: 523,
    rotation: 0,
  },
];

const indexedContent = content.map((e, index) => ({
  ...e,
  id: index + 1,
}));

export default indexedContent;
