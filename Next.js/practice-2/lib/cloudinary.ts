import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

/*
    Function: uploadOnCloudinary
    Purpose: Uploads a file (Blob) to Cloudinary and returns its secure URL.
    Why use this: 
      - Cloudinary is used to store and manage images, videos, or any media files in the cloud.
      - It returns a URL that can be used directly in your frontend.
      - It reduces your app’s storage load and improves performance.
*/
const uploadOnCloudinary = async (file: Blob | null): Promise<string | null> => {
    
    // If no file is provided, return null immediately (no upload needed)
    if (!file) {
        return null
    }

    try {
        // Convert the file (Blob) into an ArrayBuffer (binary data format)
        const arrayBuffer = await file?.arrayBuffer()

        // Convert the ArrayBuffer into a Node.js Buffer
        // Cloudinary’s uploader only accepts Buffers or Streams
        const buffer = Buffer.from(arrayBuffer)

        // The upload_stream method allows streaming the file to Cloudinary.
        // It’s efficient for handling large files and works asynchronously.
        return new Promise((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream({
                resource_type: "auto"    // auto-detects file type (image, video, etc.)
            },
                (error, result) => {
                    if (error) {
                        // Reject the promise if upload fails
                        reject(error)
                    } else {
                        // Resolve with the uploaded file’s secure URL
                        resolve(result?.secure_url ?? null)
                    }
                }
            )

            // Send the file data (buffer) to the upload stream
            uploadStream.end(buffer)
        })

    } catch (error) {
        console.log(error)
        return null
    }
}

export default uploadOnCloudinary