"use client";

import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Grid,
} from "@mui/material";

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
          <Typography variant="h4" gutterBottom mt={4}>
            เพิ่มมังฮวาใหม่
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 2 }}>
            <Grid container spacing={2}>
              {[
                { label: "ชื่อเรื่อง", name: "title" },
                { label: "ผู้เขียน", name: "author" },
                { label: "ผู้วาด", name: "artist" },
                { label: "เรื่องย่อ", name: "detail", multiline: true },
                { label: "รีวิว", name: "review", multiline: true },
                { label: "หมวดหมู่", name: "genre" },
                { label: "ลิงก์รูปภาพ", name: "cover_image" },
              ].map((field) => (
                <Grid item xs={12} key={field.name}>
                  <TextField
                    fullWidth
                    label={field.label}
                    name={field.name}
                    value={form[field.name]}
                    onChange={handleChange}
                    multiline={field.multiline}
                    rows={field.multiline ? 3 : 1}
                  />
                </Grid>
              ))}
            </Grid>
            <Button type="submit" variant="contained" sx={{ mt: 3 }}>
              บันทึก
            </Button>
          </Box>
        </Container>
      );
}
