import { Alert, Button, FileInput, Select, TextInput } from 'flowbite-react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';
import toast, { Toaster } from 'react-hot-toast';
import app from '../../../../../configs/firebase';
import { useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ColorRing } from 'react-loader-spinner';

export default function CreateArticle() {
  const [file, setFile] = useState(null);
  const [imageUploadProgress, setImageUploadProgress] = useState(null);
  const [imageUploadError, setImageUploadError] = useState(null);
  const [formData, setFormData] = useState({});
  const [publishError, setPublishError] = useState(null);
  const [validationError, setvalidationError] = useState()
  const [fetchingBlog, setfetchingBlog] = useState(false)

  const BlogAddSucess = (value) => toast.success(`Sucess:${value}`);
  const BlogAddFaliure = (value) => toast.error(`Error:${value}`);

  const navigate = useNavigate();
  console.log(formData);
  const handleUpdloadImage = async () => {
    try {
      if (!file) {
        setImageUploadError('Please select an image');
        return;
      }
      setImageUploadError(null);
      const storage = getStorage(app);
      const fileName = new Date().getTime() + '-' + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setImageUploadProgress(progress.toFixed(0));
        },
        (error) => {
          setImageUploadError('Image upload failed');
          setImageUploadProgress(null);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImageUploadProgress(null);
            setImageUploadError(null);
            setFormData({ ...formData, image: downloadURL });
          });
        }
      );
    } catch (error) {
      setImageUploadError('Image upload failed');
      setImageUploadProgress(null);
      console.log(error);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('handle submit clicked');
    try {
      setfetchingBlog(true)
      const res = await fetch('https://vedicapi.onrender.com/api/blog/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(res);
      console.log(data);
      if (!res.ok) {
        BlogAddFaliure(data.message)
        setfetchingBlog(false)
      }

      if (res.ok) {
        setfetchingBlog(false)
        setPublishError(null);
        BlogAddSucess(data.message)
        setFormData({});
        formData.image = null
      }
    } catch (error) {
      BlogAddFaliure(error)
    }
  };
  return (
    <div className='p-3 max-w-3xl mx-auto min-h-screen'>
      <Toaster />
      <h1 className='text-center text-3xl my-7 font-semibold '>Create a post</h1>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <div className=' border-l-2  py-3 flex flex-col gap-4 sm:flex-row justify-between'>
          <input
            type='text'
            value={formData.title}
            placeholder='Title'
            required
            id='title'
            className="w-full outline-none border-none focus:ring-0 focus:border-none placeholder:text-black font-bold"
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }

          />

        </div>
        <div className='flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3 text-black'>
          <FileInput
            type='file'
            accept='image/*'
            onChange={(e) => setFile(e.target.files[0])}
            className='text-black'
          />
          <button

            onClick={handleUpdloadImage}
            disabled={imageUploadProgress}
            className='text-white bg-secondary rounded-lg px-4'
          >

            {imageUploadProgress ? (
              <div className='w-16 h-16'>
                <CircularProgressbar
                  value={imageUploadProgress}
                  text={`${imageUploadProgress || 0}%`}
                />
              </div>
            ) : (
              'Upload Image'
            )}
          </button>
        </div>
        {imageUploadError && <Alert color='failure'>{imageUploadError}</Alert>}
        {formData.image && (
          <img
            src={formData.image}
            alt='upload'
            className='w-full h-72 object-cover'
          />
        )}
        <ReactQuill
          theme='snow'
          placeholder='Write something...'
          className='h-72 mb-12'
          required
          value={formData.content}
          onChange={(value) => {
            setFormData({ ...formData, content: value });
          }}
        />

        {
          fetchingBlog ?
            <Button type='submit' gradientDuoTone='purpleToPink' className='border text-black bg-secondary_shade hover:bg-secondary' disabled>
              <ColorRing
                visible={true}
                height="40"
                width="40"
                ariaLabel="color-ring-loading"
                wrapperStyle={{}}
                wrapperClass="color-ring-wrapper"
                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
              />
            </Button>
            :
            <Button type='submit' gradientDuoTone='purpleToPink' className='border text-black bg-secondary_shade hover:bg-secondary'>
              Publish
            </Button>
        }
        {/* <Button type='submit' gradientDuoTone='purpleToPink' className='border text-black bg-secondary_shade hover:bg-secondary'>
          Publish
        </Button> */}


        {publishError && (
          <Alert className='mt-5 text-red-600' color='failure' >
            {publishError}
          </Alert>
        )}
      </form>
    </div>
  );
}