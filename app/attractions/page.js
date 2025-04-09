// app/attractions/page.js
import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Grid,AppBar,Toolbar } from '@mui/material';

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
      <AppBar position='static'>
        <Toolbar>
          <h1>
          <Grid container spacing={2} justifyContent={"center"} 
          sx={{
            textAlign : 'center'
          }}
          >
            <item>Patipan</item>
          </Grid>
          </h1>
        </Toolbar>
      </AppBar>

      <Typography variant='h5'>Attractions</Typography>
      <Grid container spacing={4}>
        {data.map(attraction => (
          <Grid item key={attraction.id} xs={12} md={4}>
            <Card>
              <CardMedia
                sx={{ height: 140 }}
                image={attraction.cover_image}
                title={attraction.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {attraction.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" noWrap>
                  {attraction.detail}
                </Typography>
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
