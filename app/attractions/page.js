// app/attractions/page.js

import Cardkatoon from '@/componants/cardkatoon';
import { Box, Grid, Typography } from '@mui/material';
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
    <div style={{ padding: '20px', maxWidth:1440}}>
      <Typography variant='h4' fontFamily={"Arial"} textAlign={"center"}>มังฮวาแนะนำสำหรับลูกผู้ชาย</Typography>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'start', gap: '20px', marginTop: '20px', width: 'fit-content' }}>
        {data.map((attraction, index) => (
         <Cardkatoon attraction ={attraction} index={index} key={index}/>
        ))}
      </div>
    </div>  
  );
}
