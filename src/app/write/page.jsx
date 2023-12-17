"use client"
import React, { useEffect, useState } from 'react'
import styles from './write.module.css'
import Image from 'next/image'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.bubble.css'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { app } from '@/utils/firebase'
function page() {
    const [open, setOpen] = useState(false)
    const [value, setvalue] = useState("")
    const [file, setfile] = useState(null)
    const [media, setmedia] = useState("")
    const [title, settitle] = useState("")
    const storage = getStorage(app);

    useEffect(() => {
        const upload = () => {
            const name = new Date().getTime + file.name
            const storageRef = ref(storage, name);
            const uploadTask = uploadBytesResumable(storageRef, file);

            // Register three observers:
            // 1. 'state_changed' observer, called any time the state changes
            // 2. Error observer, called on failure
            // 3. Completion observer, called on successful completion
            uploadTask.on('state_changed',
                (snapshot) => {
                    // Observe state change events such as progress, pause, and resume
                    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                    }
                },
                (error) => {
                    // Handle unsuccessful uploads
                },
                () => {
                    // Handle successful uploads on complete
                    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        setmedia(downloadURL)
                        console.log('File available at', downloadURL);
                    });
                }
            );
        }
        file && upload()
    }, [file])
    const slugify = (str) => str
        .toLowerCase()
        .trim()
        .replace(/[^\w\s\-/g]/g, "")
        .replace(/[\s_-]+/g, "_").replace(/^-+|-+$/g, "");

    const handlesubmit = async () => {
        const res = await fetch("/api/posts", {
            method: "POST",
            body: JSON.stringify({
                title,
                desc: value,
                img: media,
                postSlug:slugify(title),
                catSlug:"style"
            })
        })
     
    }
    return (
        <div className={styles.container}>

            <input type='text' placeholder='Title' className={styles.input} onChange={(e)=>settitle(e.target.value)} />
            <div className={styles.editor}>
                <button className={styles.button} onClick={() => setOpen(!open)}>
                    <Image src={"/plus.png"} alt="" width={16} height={16} />
                </button>
                {open && (
                    <div className={styles.add}>
                        <input type='file' id='image' onChange={(e) => setfile(e.target.files[0])}
                            style={{ display: "none" }}
                        />

                        <button className={styles.addbutton}>
                            <label htmlFor='image'>

                                <Image src={"/image.png"} alt='' width={16} height={16} />
                            </label>
                        </button>
                        <button className={styles.addbutton}>
                            <Image src={"/external.png"} alt='' width={16} height={16} />
                        </button>
                        <button className={styles.addbutton}>
                            <Image src={"/video.png"} alt='' width={16} height={16} />
                        </button>
                    </div>)}
                <ReactQuill
                    className={styles.textArea}
                    theme='bubble'
                    value={value}
                    onChange={setvalue}
                    placeholder='Tell your story...'

                />
            </div>
            <button className={styles.publish}
            
            onClick={handlesubmit}
            >
                Publish
            </button>
        </div>
    )


}

export default page