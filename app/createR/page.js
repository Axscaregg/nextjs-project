"use client";

import {
  Box,
  Button,
  CardMedia,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const id = uuidv4();

export default function Page() {
  const [form, setForm] = useState({
    title: "",
    author: "",
    artist: "",
    detail: "",
    review: "",
    genre: "",
    cover_image: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        alert("เพิ่มข้อมูลเรียบร้อยแล้ว ✅");
        setForm({
          title: "",
          author: "",
          artist: "",
          detail: "",
          review: "",
          genre: "",
          cover_image: "",
        });
      } else {
        const err = await res.json();
        alert("เกิดข้อผิดพลาด: " + err.error);
      }
    } catch (error) {
      alert("เกิดข้อผิดพลาด: " + error.message);
    }
  };

  return (
    <Container maxWidth="md">
      <Typography
        variant="h4"
        gutterBottom
        mt={4}
        style={{ textAlign: "center" }}
      >
        เพิ่มมังฮวาใหม่
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 2 }}>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <TextField
            fullWidth
            label={"ชื่อเรื่อง"}
            name={"title"}
            value={form["title"]}
            onChange={handleChange}
            multiline={false}
            rows={1}
          />
          {form?.cover_image && (
            <CardMedia
              component="img"
              image={form?.cover_image}
              alt="cover"
              sx={{
                height: 500,
                width: 500,
                objectFit: "contain",
                display: "block",
                margin: "0 auto",
              }}
            />
          )}
          <TextField
            fullWidth
            label={"ลิงก์รูปภาพ"}
            name={"cover_image"}
            value={form["cover_image"]}
            onChange={handleChange}
            multiline={false}
            rows={1}
          />
          <TextField
            fullWidth
            label={"ผู้เขียน"}
            name={"author"}
            value={form["author"]}
            onChange={handleChange}
            multiline={false}
            rows={1}
          />
          <TextField
            fullWidth
            label={"ผู้วาด"}
            name={"artist"}
            value={form["artist"]}
            onChange={handleChange}
            multiline={false}
            rows={1}
          />
          <TextField
            fullWidth
            label={"เรื่องย่อ"}
            name={"detail"}
            value={form["detail"]}
            onChange={handleChange}
            multiline={true}
            rows={3}
          />
          <TextField
            fullWidth
            label={"รีวิว"}
            name={"review"}
            value={form["review"]}
            onChange={handleChange}
            multiline={true}
            rows={3}
          />
          <TextField
            fullWidth
            label={"หมวดหมู่"}
            name={"genre"}
            value={form["genre"]}
            onChange={handleChange}
            multiline={false}
            rows={1}
          />

          <Button type="submit" variant="contained" sx={{ mt: 3 }}>
            บันทึก
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
