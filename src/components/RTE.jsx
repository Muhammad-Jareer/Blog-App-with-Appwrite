import React from 'react'
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";

export default function RTE({name, control, label, defaultValue = ""}) {
    return (
        <div className='w-full'>
            {label && <label className='inline-block mb-1 pl-1'>{label}</label>}

            <Controller 
            name={name || "content"}
            control={control}
            render={({field: {onChange}}) => (
                <Editor
                init={{
                  initialValue: {defaultValue},
                  height: 500,
                  menubar: false,
                  plugins: [
                    'advlist autolink link image lists charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table paste code help wordcount',
                    'imagetools textpattern noneditable save autosave',
                    'visualchars hr pagebreak nonbreaking toc',
                    'codesample emoticons template directionality',
                    'textcolor colorpicker contextmenu textpattern'
                  ],
              
                  toolbar: 'undo redo | bold italic underline strikethrough | formatselect | \
                            alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | \
                            link image media | insertfile codesample anchor | \
                            forecolor backcolor emoticons | preview fullscreen code',
                  content_style: "body {font-family: Helvetica, Arial, sans-serif; font-size:14px}"
                }}
                onEditorChange={onChange}
                />
            )}
            />
        </div>
    )
}
