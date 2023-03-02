import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';

function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

 function CustomImageListExm() {
  return (
    <div>
        <h2>Custom images</h2>
    <ImageList
      sx={{
        width: 500,
        height: 450,
    
        transform: 'translateZ(0)',
      }}
      rowHeight={200}
      gap={1}
    >
      {itemData.map((item) => {
        const cols = item.featured ? 2 : 1;
        const rows = item.featured ? 2 : 1;

        return (
          <ImageListItem key={item.img} cols={cols} rows={rows}>
            <img
              {...srcset(item.img, 250, 200, rows, cols)}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              sx={{
                background:
                  'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                  'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
              }}
              title={item.title}
              position="top"
              actionIcon={
                <IconButton
                  sx={{ color: 'white' }}
                  aria-label={`star ${item.title}`}
                >
                  <StarBorderIcon />
                </IconButton>
              }
              actionPosition="left"
            />
          </ImageListItem>
        );
      })}
    </ImageList>
    </div>
  );
}
const itemData = [
    {
        img: 'https://m.media-amazon.com/images/I/81WY43xc5oL._SX679_.jpg',
        title: 'Owl Set',
        author: '@bkristastucchio',
        rows: 2,
        cols: 2,
        featured: true,
      },
      {
        img: 'https://m.media-amazon.com/images/I/71rH7Skt1QL._SL1100_.jpg',
        title: ' Wildlife Elephant',
        author: '@rollelflex_graphy726',
      },
      {
        img: 'https://m.media-amazon.com/images/I/61genUAVkAL._SL1020_.jpg',
        title: ' Glass Tealight Candle Holders ',
        author: '@helloimnik',
      },
      {
        img: 'https://m.media-amazon.com/images/I/61O5HoaOjCS._SX679_.jpg',
        title: ' Basket',
        author: '@nolanissac',
        cols: 2,
      },
      {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
        author: '@hjrc33',
        cols: 2,
      },
      {
        img: 'https://m.media-amazon.com/images/I/7124A8IITcL._SX679_.jpg',
        title: ' Wall Decor',
        author: '@arwinneil',
        rows: 2,
        cols: 2,
        featured: true,
      },
      {
        img: 'https://m.media-amazon.com/images/I/41b5+WfPN0L.jpg',
        title: 'Hanger',
        author: '@tjdragotta',
      },
      {
        img: 'https://m.media-amazon.com/images/I/51IyDjSZxAL._SL1000_.jpg',
        title: 'Head Wall Hanging' ,
        author: '@katie_wasserman',
      },
      {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
        author: '@silverdalex',
        rows: 2,
        cols: 2,
      },
      {
        img: 'https://m.media-amazon.com/images/I/61KufUotTYL._SX679_.jpg',
        title: 'Mini Rickshaw',
        author: '@shelleypauls',
      },
      {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
        author: '@peterlaster',
      },
      {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
        author: '@southside_customs',
        cols: 2,
      },
    ];
    
  export default CustomImageListExm;