import React, { useState } from "react";
import { Header, Modal, Image } from "semantic-ui-react";

function ModalImageArticle({
    srcImage,
    headerArticle,
    contenuArticle,
    // animation = "heartBeat",
}) {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <Modal
                dimmer="blurring"
                closeIcon
                open={open}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                trigger={
                    <Image
                        className={`imageArticle`}
                        src={srcImage}
                    />
                }
            >
                <Header icon="archive" content={headerArticle} />
                <Modal.Content>
                    <div className="border-article texte">
                        {contenuArticle.map((p, i) => {
                            return <p key={i}>{p}</p>;
                        })}
                    </div>
                </Modal.Content>
            </Modal>
        </div>
    );
}

export default ModalImageArticle;
