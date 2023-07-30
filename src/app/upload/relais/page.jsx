
export default function Home() {
    const fileUpload = async (event) => {
        /* event.preventDefault();

        const formData = new FormData();
        formData.append('file', event.target.file.files[0]);

        const response = await fetch('/api/upload', {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            console.log('Uploaded successfully!');
        } else {
            console.error('Upload failed.');
        } */
    };

    return (
        <div>
            <form>
                <input type="file" name="file" />
                <button type="submit">Upload</button>
            </form>
        </div>
    );
}
