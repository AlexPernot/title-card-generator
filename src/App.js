import React, { Fragment, useEffect, useState } from 'react';
import "./index.css";
import Jimp from "jimp";
import originalImageSrc from "./nox.jpg";

function App() {

    const [imageSrc, setImageSrc] = useState(null);

    useEffect(() => {
        Jimp.read(originalImageSrc)
            .then(image => {
                image
                    .resize(600, Jimp.AUTO)
                    .greyscale()
                    .getBase64(Jimp.MIME_JPEG, (err, src) => {
                        setImageSrc(src);
                    })
            })
            .catch(err => console.error(err))
        ;
    }, []);

    return (
        <div className="mx-auto mt-40">
            <header>
                <h1 className="text-center">Title card generator</h1>
            </header>
            <main className=" mx-auto">
                {
                    imageSrc ? <img src={imageSrc} alt="Custom"/> : <p>...</p>
                }
            </main>
        </div>
    );
}

export default App;
