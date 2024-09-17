'use client'
import React, { useEffect, useRef } from 'react'
import * as LR from '@uploadcare/blocks'
import { useRouter } from 'next/navigation'

type Props = {
  onUpload: (e: string) => any
}

LR.registerBlocks(LR)

const UploadCareButton = ({ onUpload }: Props) => {
  const router = useRouter()
  const ctxProviderRef = useRef<
    typeof LR.UploadCtxProvider.prototype & LR.UploadCtxProvider
  >(null)

  useEffect(() => {
    const handleUpload = async (e: any) => {
      const file = await onUpload(e.detail.cdnUrl)
      if (file) {
        router.refresh()
      }
    }
    //this means that the event listener is added to the ctxProviderRef , which is the upload context provider 
    // this will listen for the file-upload-success event and call the handleUpload function , when the file gets uploaded
    // and handleUpload function will call the onUpload function and pass the cdnUrl as an argument
    // onUpload function will then make DB call to update the user profile image
    if (ctxProviderRef.current) {
      ctxProviderRef.current.addEventListener('file-upload-success', handleUpload)
    }
  }, [router, onUpload])

  return (
    <div>
      <lr-config
        ctx-name="my-uploader"
        pubkey="e8b513c32da62d839c92"
      />

      <lr-file-uploader-regular
        ctx-name="my-uploader"
        css-src={`https://cdn.jsdelivr.net/npm/@uploadcare/blocks@0.35.2/web/lr-file-uploader-regular.min.css`}
      />

      <lr-upload-ctx-provider
        ctx-name="my-uploader"
        ref={ctxProviderRef}
      />
    </div>
  )
}

export default UploadCareButton