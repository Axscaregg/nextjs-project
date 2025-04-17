"use client";

import {
  Box,
  Button,
  CardMedia,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import { use, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Page = () => {
  const [form, setForm] = useState({
    title: "",
    author: "",
    artist: "",
    detail: "",
    review: "",
    genre: "",
    cover_image: "",
  });
  const params = useParams();
  // console.log("params :", params?.id);

  const getData = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/edit/${params?.id}`,
        {
          method: "GET",
        }
      );

      const data = await res.json(); // 👈 Get the actual response body

      // console.log("data:", data[0]);
      setForm({
        title: data?.[0]?.title,
        author: data?.[0]?.author,
        artist: data?.[0]?.artist,
        detail: data?.[0]?.detail,
        review: data?.[0]?.review,
        genre: data?.[0]?.genre,
        cover_image: data?.[0]?.cover_image,
      });
      // setData(data); // Or whatever you're doing with the result
    } catch (error) {
      console.log("error:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/edit/${params?.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        alert("แก้ไขข้อมูลเรียบร้อยแล้ว ✅");
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
      // router.push("/attractions");
      window.location.href = "/attractions";
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
};

export default Page;
