// app/attractions/page.js

import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Grid,AppBar,Toolbar } from '@mui/material';
import Link from 'next/link';
export async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function Page() {
  if (!process.env.NEXT_PUBLIC_API_URL) {
    return null;
  }
  const data = await getData();

  return (
    <div style={{ padding: '20px' }}>

      <Typography variant='h4' fontFamily={"Arial"} textAlign={"center"}>มังฮวาแนะนำสำหรับลูกผู้ชาย</Typography>
      <Grid container spacing={4}>
        {data.map(attraction => (
          <Grid item key={attraction.id} xs={12} md={4}
          sx={{
            width: 200
          }}
          >
          <Card>
            <CardMedia
              component="img"
              sx={{ width: 200,height: 300, objectFit: 'cover' }}
              image={attraction.cover_image}
              alt={attraction.title}
            />
            <CardContent>
            <a href={`/attractions/${attraction.id}`} style={{ textDecoration: 'none' }}>
  <Typography
    gutterBottom
    variant="h6"
    sx={{
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      cursor: 'pointer',
      '&:hover': {
        textDecoration: 'underline',
        
      },
    }}
  >
    {attraction.title}
  </Typography>
</a>
            </CardContent>
            <CardActions>
              <a href={`/attractions/${attraction.id}`}>
                <Button size="small">Learn More</Button>
              </a>
            </CardActions>
          </Card>
        </Grid>
        
        ))}
      </Grid>
    </div>  
  );
}
