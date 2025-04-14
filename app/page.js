
import Image from "next/image";
import styles from "./page.module.css";
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Grid,Container,Box } from '@mui/material';
import Link from "next/link";
// export async function getData() {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api`);
//   if (!res.ok) {
//     throw new Error('Failed to fetch data');
//   }
//   return res.json();
// }

export default async function Home() {
  if (!process.env.NEXT_PUBLIC_API_URL) {
    return null;
  }
  // const data = await getData();

  return (
    <div style={{ padding: '0px' }}>
        <Box className = "SectionOne" >
        
          <Typography variant="h2" fontWeight="bold">
            Website Project Final Deadline
          </Typography>
          <Typography variant="subtitle1" mt={2} fontSize={18}>
             Website นี้ถูกสร้างขึ้นมาเพื่อใช้ส่งโปรเจ็คดังนั้นหากมีข้อผิดพลาดหรืออ้างอิงได้ที่เกิดความเสียหายโปรดเข้าใจว่าเป็นการทำแค่ส่งงานไม่ได้มีเจตนาอันใด
          </Typography>
         
       
      </Box>



      <Box className = "SectionTwo">
        <Container sx={{border:3, 
          width: 400, 
          display: "block",
          marginLeft:8,
           backgroundColor: "#fef6e4"
        }}>
        <Typography variant="h4" gutterBottom textAlign={"center"} marginTop={2} >
             เกี่ยวกับเว็บไซต์นี้
          </Typography>
          <Grid container spacing={4} marginBottom={2} border={2} borderColor={"green"}>
            <Grid item xs={12}  >
              <Card sx={{ p: 3,  backgroundColor: "#dbeafe" }}  >
                <Typography variant="h6">ทันสมัย</Typography>
                <Typography>
                 เป็นเว็บรีวิวเกี่ยวกับมังฮวาสำหรับลูกผู้ชาย มีการกล่าวถึงเกี่ยวกับเนื้อหามากมาย ถ้าเกิดยังอายุไม่ถึง 18 กรณีปิดไป
                </Typography>
              </Card>
            </Grid>
            </Grid>
          </Container>

          <Container sx={{
            marginTop: 10
          }}>
            <Link href={"/attractions" }>
          <Button variant="outlined" color="primary">
          รายละเอียดเพิ่มเติม
        </Button>
        </Link>
          </Container>

      </Box>

        

    </div>
    
    

  );
}
