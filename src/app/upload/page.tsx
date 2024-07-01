'use client';
// import { FileInput, Label } from 'flowbite-react';
import { fileUpload, savePhoto } from '../api/api';
import { Button, Checkbox, Label, TextInput, FileInput } from 'flowbite-react';
import { useEffect, useRef } from 'react';
import Vditor from 'vditor'
import "vditor/dist/index.css";


export default function Upload() {

  const editRef = useRef<any>('')
  const formRef = useRef<any>('')
  const titleRef = useRef<any>('')
  const fileObj = useRef<any>('')

  useEffect(() => {
    editRef.current = new Vditor('desciption_content', {});
  }, []);

  const savePicture = (e:any) => {
    e.preventDefault();
    console.log(editRef.current.getHTML())
    let url = fileObj.current.path;
    let title = titleRef.current.value;
    let description = editRef.current.getHTML();

    let payload = {
      description,
      title,
      url,
    }
    savePhoto(payload)
    return 
  };

  function fileOnchange(e: React.ChangeEvent<HTMLInputElement>) {
    let files = e.target.files;
    if (files && files.length > 0) {
      let file = files[0];
      const formData = new FormData();
      formData.append('file', file);
      fileUpload(formData).then((data: any) => {
        fileObj.current = data;
      })
    }
  }
  
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <form className="flex flex-col gap-4" ref={formRef} onSubmit={savePicture}>
        <div>
          {/* 图片标题 */}
          <div className="mb-2 block">
            <Label htmlFor="title" value="Your picture title" />
          </div>
          <TextInput
            id="title"
            ref={titleRef}
            type="text"
            placeholder="picture title"
            required
          />
        </div>
        <div id="fileUpload">
          {/* 图片 */}
          <div className="mb-2 block">
            <Label htmlFor="file" value="Upload file" />
          </div>
          <FileInput
            id="file"
            onChange={fileOnchange}
            required
            helperText="A profile picture is useful to confirm your are logged into your account"
          />
        </div>
        <div>
          {/* 图片描述 */}
          <div className="mb-2 block">
            <Label htmlFor="desciption_content" value="Your thoughts" />
          </div>
          <div id="desciption_content" style={{minHeight: '50vh'}}></div>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}