import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";

export async function POST( req: Request){
    //here basically clerk gives us a webhook when a user login / signup
    console.log("hell111o");
    try{
        const body = await req.json();
        const data = body?.data;
        console.log("hello");
        const user =await db.user.upsert({
            where:{
                clerkId : data.id
            },
            update:{
                email : data.email_addresses[0]?.email_address,
                name : data.first_name || '',
                profileImage : data.image_url || '',
            },
            create:{
                clerkId : data.id,
                email : data.email_addresses[0]?.email_address,
                profileImage : data.image_url || '',
                name : data.first_name || '',
            }
        })
        console.log(user);
        return new NextResponse('User updated or inserted in database successfully', {
            status: 200,
        })
    }catch(err){
        console.log(err);
        return new NextResponse('Error while creating or updating user', {
            status: 500,
        })
    }
}