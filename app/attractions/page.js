// app/attractions/page.js

import Cardkatoon from "@/componants/cardkatoon";
import { Box, Grid, Typography } from "@mui/material";
export async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Page() {
  if (!process.env.NEXT_PUBLIC_API_URL) {
    return null;
  }
  const data = await getData();

  return (
    <div style={{ padding: "20px", maxWidth: 1440, display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Typography variant="h4" fontFamily={"Arial"} textAlign={"center"}>
        มังฮวาแนะนำสำหรับลูกผู้ชาย
      </Typography>
      <Box
        sx={{
          width: "fit-content",
          display: "grid",
          marginTop: "20px",
          gap: "20px",
          justifyContent: "center",
          gridTemplateColumns: "repeat(1, 1fr)",

          "@media (min-width:1440px)": {
            gridTemplateColumns: "repeat(4, 1fr)",
          },
        }}
      >
        {data.map((attraction, index) => (
          <Cardkatoon attraction={attraction} index={index} key={index} />
        ))}
      </Box>
    </div>
  );
}
