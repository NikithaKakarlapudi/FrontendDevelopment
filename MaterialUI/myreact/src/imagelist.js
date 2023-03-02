import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function StandardImageListExm() {

  return (
    <div>
        <h2>StandardImageList</h2>
    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>

    <QuiltedImageListExm/>
    </div>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'fashion',
    
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://healthydietingtips.com/wp-content/uploads/2014/09/diet-low-in-carbohydrates-pic.jpg',
    title: 'veg',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://th.bing.com/th/id/R.7b265a5b4f9a9114dd1b495e3b1b6e17?rik=VO3b9x6R2H7AjA&riu=http%3a%2f%2fs1.picswalls.com%2fwallpapers%2f2014%2f07%2f24%2ffashion-desktop-wallpaper_112918868_85.jpg&ehk=ATtxa%2bTUeGo%2fUfW4oAB3rHaNZb7lNdqAaVRTAFrl8PQ%3d&risl=&pid=ImgRaw&r=0',
    title: 'lady',
  },
  {
    img: 'https://th.bing.com/th/id/OIP.ucjREDo6yyGGCrRbOpnQawHaEo?pid=ImgDet&rs=1',
    title: 'Flowers',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.alphacoders.com/282/thumb-1920-282191.jpg',
    title: 'twoladys',
  },
  {
    img:'https://images3.alphacoders.com/274/thumb-1920-274899.jpg',
    title:'fashionlady'
  },
];

function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }
  
   function QuiltedImageListExm() {

    return (
        <div>
            <h2>QuiltedImageList</h2>
      <ImageList
        sx={{ width: 500, height: 450 }}
        variant="quilted"
        cols={4}
        rowHeight={121}
      >
        {itemValue.map((item) => (
          <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      </div>
    );
  }
  const itemValue = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'fashion',
      row:2,
      col:2,
      
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
      
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
      col:8,
    
    },
    {
      img: 'https://healthydietingtips.com/wp-content/uploads/2014/09/diet-low-in-carbohydrates-pic.jpg',
      title: 'veg',
      col:2,
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
      
    },
    {
      img: 'https://th.bing.com/th/id/R.7b265a5b4f9a9114dd1b495e3b1b6e17?rik=VO3b9x6R2H7AjA&riu=http%3a%2f%2fs1.picswalls.com%2fwallpapers%2f2014%2f07%2f24%2ffashion-desktop-wallpaper_112918868_85.jpg&ehk=ATtxa%2bTUeGo%2fUfW4oAB3rHaNZb7lNdqAaVRTAFrl8PQ%3d&risl=&pid=ImgRaw&r=0',
      title: 'lady',

    },
    {
        img: 'https://th.bing.com/th/id/OIP.ucjREDo6yyGGCrRbOpnQawHaEo?pid=ImgDet&rs=1',
        title: 'Flowers',
        col:2
      },
      {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
      },
      {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
        row:2,
        col:5,
      },
      {
        img: 'https://images.alphacoders.com/282/thumb-1920-282191.jpg',
        title: 'twoladys',
      },
      {
        img:'https://images3.alphacoders.com/274/thumb-1920-274899.jpg',
        title:'fashionlady'
      },
]
export default StandardImageListExm;