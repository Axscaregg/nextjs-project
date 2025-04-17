import { Card, CardContent, CardMedia, Container, Typography } from '@mui/material';


export async function getData(id) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/attractions/${id}/`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function Page({params}) {
   if (!process.env.NEXT_PUBLIC_API_URL) {
      return null;
    }
   
    const id =  params?.id; 
    const data = await getData(id);

  return (
    <Container maxWidth="md" sx={{ mt: 2 }}>
      { data.length > 0 &&
        <Card >
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data[0].title}
            </Typography>
          </CardContent>
          <CardMedia
            sx={{ 
               height: 500, width: 500, objectFit: 'contain', display: 'block', margin: '0 auto'
              }}
            image={data[0].cover_image}
            title={data[0].title}
          />
          <CardContent>
          <Typography variant="h6">Author: {data[0].author}  Artist: {data[0].artist}</Typography>
          <Typography variant="h6">Synopsis</Typography>
            <Typography variant="body2" color="text.secondary">
              {data[0].detail}
            </Typography>
            <Typography variant="h6">Review</Typography>
            <Typography variant="body2" color="secondary">
              {data[0].review}
            </Typography>
          </CardContent>
        </Card>
      }
    </Container>
  )
}
