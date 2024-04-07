'use client';
import { FileInput, Label } from 'flowbite-react';
import { fileUpload } from '../api/api';


export default function Upload() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div  className="bg-gray-200 p-8 rounded-lg shadow-md">
        <div className="mb-2 block">
          <Label htmlFor="file-upload" value="Upload file" />
        </div>
        <FileInput onChange={fileOnchange} className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded" id="file-upload" />
      </div>
    </main>
  );
}

function fileOnchange(e: React.ChangeEvent<HTMLInputElement>) {
  let files = e.target.files;
  if(files && files.length>0) {
    let file = files[0];
    const formData = new FormData();
    formData.append('file', file);
    fileUpload(formData);
  }
}