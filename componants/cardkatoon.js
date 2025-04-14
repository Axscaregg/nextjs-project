import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
export default function Cardkatoon({ attraction, index }) {
  return (
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
            href={`/attractions/${attraction.id}`}
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
          <a href={`/attractions/${attraction.id}`}>
            <Button size="small">Learn More</Button>
          </a>
        </CardActions>
      </Card>
    </Grid>
  );
}
