import React, { useState } from "react";
import { Header, Modal, Image } from "semantic-ui-react";

function ModalImageArticle({
    texteArticle,
    headerArticle,
    animation = "heartBeat",
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
                    <p
                        className={`article vertical-mobile animate__animated animate__${animation} animate__infinite`}
                    >
                        {texteArticle}
                    </p>
                }
            >
                <Header icon="archive" content={headerArticle} />
                <Modal.Content>
                    <Image src="../images/polluant-1.gif" />
                    <Image src="../images/polluant-2.gif" />
                </Modal.Content>
            </Modal>
        </div>
    );
}

export default ModalImageArticle;
