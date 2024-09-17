"use client"
import ProfileForm from '@/components/forms/settingsForm'
import React from 'react'
// import { db } from '@/lib/db'
// import { currentUser } from '@clerk/nextjs/server'

const Settings =  () => {
  // const authUser = await currentUser()
  // if (!authUser) return null

  // const user = await db.user.findUnique({ where: { clerkId: authUser.id } })

  // const updateUserInfo = async (name: string) => {
  //   'use server'

  //   const updateUser = await db.user.update({
  //     where: {
  //       clerkId: authUser.id,
  //     },
  //     data: {
  //       name,
  //     },
  //   })
  //   return updateUser
  // }

  return (
    <div className="flex flex-col gap-4 w-[40%]">
      <div className="flex flex-col gap-10 p-6">
        <div>
          <h2 className="text-2xl font-bold">User Profile</h2>
          <p className="text-base text-white/50">
            Add or update your information
          </p>
        </div>
        <ProfileForm
          user={"user"}
          onUpdate={()=>{}}
        />
      </div>
    </div>
  )
}

export default Settings