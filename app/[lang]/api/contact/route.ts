import { NextRequest, NextResponse } from "next/server";
export const dynamic = 'force-static'

export async function POST(request: NextRequest){
    const formData = await request.formData()
    const email = formData.get('email')
    const subject = formData.get('subject')
    return NextResponse.json({email, subject})
}