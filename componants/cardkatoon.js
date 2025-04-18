"use client";
import CloseIcon from "@/icon/closeIcon";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
export default function Cardkatoon({
  attraction,
  index,
  isEdit = false,
  id = "",
}) {


const deleteCartoon = async () => {
  try{
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/edit/${id}`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: id,
          title: attraction?.title,
        }),
      }
    );
    if (!res.ok) {
      throw new Error("Failed to delete data");
    }
    alert("Delete success");
    window.location.reload()
  }catch (error) {
    console.log("error :", error);
  }
   
}

  return (
    <div style={{ position: "relative" }}>
      {isEdit && (
        <CloseIcon style={{ position: "absolute", top: 0, right: 0 }} onClick={deleteCartoon} />
      )}
      <Grid
        item
        key={attraction?.id}
        xs={12}
        md={4}
        sx={{
          width: 300,
        }}
      >
        <Card>
          <CardMedia
            component="img"
            sx={{ width: "100%", height: 300, objectFit: "cover" }}
            image={attraction.cover_image}
            alt={attraction.title}
          />
          <CardContent>
            <a
              href={
                isEdit
                  ? `/editCartoon/${attraction.title}`
                  : `/attractions/${attraction.id}`
              }
              style={{ textDecoration: "none" }}
            >
              <Typography
                gutterBottom
                variant="h6"
                sx={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  cursor: "pointer",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                {attraction.title}
              </Typography>
            </a>
          </CardContent>
          <CardActions>
            <a
              href={
                isEdit
                  ? `/editCartoon/${attraction.title}`
                  : `/attractions/${attraction.id}`
              }
            >
            </a>
            <Typography variant="h7">{attraction.genre}</Typography>
          </CardActions>
        </Card>
      </Grid>
    </div>
  );
}
