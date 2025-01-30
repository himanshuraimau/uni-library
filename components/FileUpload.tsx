import React from 'react'


interface FileUploadProps {
    type: string
    accept: string
    placeholder: string
    folder: string
    variant: string
    onFileChange: (file: File) => void
}

const FileUpload = ({
    type,
    accept,
    placeholder,
    folder,
    variant,
    onFileChange,
}:FileUploadProps) => {
  return (
    <div>ImageUpload</div>
  )
}

export default FileUpload