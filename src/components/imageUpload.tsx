import { Button } from "antd";
import ImageUploadIcon from "../components/icons/imageUpload.icon";
import React, { useState } from "react";
import CancelIcon from "./icons/Cancel.icon";

// interface ImageUploadProps {
//     children?: React.ReactNode;
//     }

const ImageUpload = () => {

    const [openImageModal, setOpenImageModal] = useState(false);

    return (
        <div>
            <Button
                icon={<ImageUploadIcon />}
                onClick={() => setOpenImageModal(true)}
                className="px-2 py-1 rounded bg-gray-100"
            />
            {openImageModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#00000062]">
                    <div className="bg-white rounded-2xl w-[55%] h-[500px] mx-auto p-6 relative">
                        <Button onClick={() => setOpenImageModal(false)} icon={<CancelIcon />} className="absolute top-4 right-4 flex justify-center items-center" />
                        <div>Hello</div>
                        {/* <div>
                            {children}
                        </div> */}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ImageUpload;
