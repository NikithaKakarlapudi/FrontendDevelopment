import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';

const heights = [150, 30, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#d4b8d8',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function BasicMasonryExm() {
  return (
    <div>
        <h2>Masonry examples</h2>
    <Box sx={{ width: 500, minHeight: 393 }}>
      <Masonry columns={4} spacing={2}>
        {heights.map((height, index) => (
          <Item key={index} sx={{ height }}>
            {index + 1}
          </Item>
        ))}
      </Masonry>
    </Box>


    <ImageMasonryExm/>
    </div>
  );
}


const Label = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  }));

 function ImageMasonryExm() {
    return (
      <Box sx={{ width: 500, minHeight: 829 }}>
        <Masonry columns={3} spacing={2}>
          {itemData.map((item, index) => (
            <div key={index}>
              <Label>{index + 1}</Label>
              <img
                src={`${item.img}?w=162&auto=format`}
                srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
                style={{
                  borderBottomLeftRadius: 4,
                  borderBottomRightRadius: 4,
                  display: 'block',
                  width: '100%',
                }}
              />
            </div>
          ))}
        </Masonry>
      </Box>
    );
  }

  const itemData = [

    {
        img:"https://2.bp.blogspot.com/-LwrAlaR88TQ/W7qmBCZYFgI/AAAAAAAADJg/hR0XFKz_iEwEatRw5NTxpB1SDH8UAgDIgCLcBGAs/s1600/social%2Bmedia%2Bprofile%2Bpicture-1.jpg",
        title:"birds",
    },
    {
        img:"https://th.bing.com/th/id/OIP._SXMkyl8tdCqn5iEPDYtBgHaEs?pid=ImgDet&rs=1",
        title:"nature",
    },
    {
        img:"https://artfiles.alphacoders.com/815/thumb-1920-81541.jpg",
        title:"buetyfullgirl",
    },
    {
        img:"https://pluspng.com/img-png/foods-png--1542.png",
        title:"vegs",
    },
    {
        img:"https://images.unsplash.com/photo-1522770179533-24471fcdba45",
        title:"camera",
    },
    {
        img:"https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
        title:"bike",
    },
    {
        img:"https://th.bing.com/th/id/OIP.JJ7zKioKVMYinU8LkSbZngHaJ4?pid=ImgDet&rs=1",
        title:"flowers",
    },
    {
        img:"https://th.bing.com/th/id/R.385e3d82412e0bf72ddbfc4b80082e1a?rik=Geopyk9nc%2bJkAw&riu=http%3a%2f%2fthewondrous.com%2fwp-content%2fuploads%2f2015%2f07%2fstylish-profile-pictures-for-facebook-for-girls.jpg&ehk=Zt9CkuMdQsda3wIHojZZ%2fLcqVf0C%2bCSCRVlvKPG07%2bk%3d&risl=&pid=ImgRaw&r=0",
        title:"girl",
    },
    {
        img:"https://images.unsplash.com/photo-1533827432537-70133748f5c8",
        title:"hats",
    },
    {
        img:"https://st.hotrod.com/uploads/sites/21/2016/07/2016-show-classic-trucks-dark-green-ford-f-100-truck-alt.jpg",
        title:"classic cars",
    },
    {
        img:"https://th.bing.com/th/id/OIP.PSI6zsY1ocX0BpWb4yF9bAHaE8?pid=ImgDet&rs=1",
        title:"cake",
    },
    {
        img:"https://wallpapercave.com/wp/wp4054057.jpg",
        title:"caves",
    },
    {
        img:"https://static3.hotcarsimages.com/wordpress/wp-content/uploads/2020/06/feature-image-expensive-cars-that-look-cheap.jpg",
        title:"car",
    },

  ]
export default BasicMasonryExm;