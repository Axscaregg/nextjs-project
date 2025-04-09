import { NextResponse } from 'next/server'

export async function GET() {
  const data = [
    {
      id: 1,
      name: 'สถานที่ท่องเที่ยวที่หนึ่ง',
      detail: 'รายละเอียด...',
      coverimage: 'https://via.placeholder.com/300x140'
    },
    // ...ข้อมูลอื่น ๆ
  ]
  return NextResponse.json(data)
}
