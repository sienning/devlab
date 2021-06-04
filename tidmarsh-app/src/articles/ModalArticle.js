import React, { useState } from 'react'
import { Header, Modal } from 'semantic-ui-react'

function ModalArticle({ texteArticle, headerArticle, contenuArticle }) {
    const [open, setOpen] = useState(false);
    const toggleWobble = (e) => {
        e.currentTarget.classList.add("animate__wobble");
        rmToggle(e.currentTarget, "animate__wobble");
    };
    const toggleShakeY = (e) => {
        e.currentTarget.classList.add("animate__shakeY");
        rmToggle(e.currentTarget, "animate__shakeY");
    };
    const toggleFlash = (e) => {
        e.currentTarget.classList.add("animate__flash");
        rmToggle(e.currentTarget, "animate__flash");
    };
    const toggleBounceOut = (e) => {
        e.currentTarget.classList.add("animate__bounceOutDown");
        toggleComeback(e.currentTarget, "animate__bounceOutDown");
    };
    const rmToggle = (ect, animateType) => {
        setTimeout(() => ect.classList.remove(animateType), 1400);
    };
    const toggleComeback = (ect, animateType) => {
        ect.classList.add("animate__fadeIn", "animate__delay-3s");
        setTimeout(
            () =>
                ect.classList.remove(
                    animateType,
                    "animate__fadeIn",
                    "animate__delay-3s"
                ),
            4000
        );
    };
    return (
        <div >
            <Modal
                dimmer='blurring'
                closeIcon
                open={open}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                trigger={<p onMouseOver={toggleShakeY} className="article vertical-mobile animate__animated">{texteArticle}</p>}
            >
                <Header icon='archive' content={headerArticle} />
                <Modal.Content>
                    <div className="border-article texte">
                        {
                            contenuArticle.map((p, i) => {
                                return (<p key={i}>{p}</p>)
                            })
                        }
                    </div>
                </Modal.Content>

            </Modal>
        </div>
    );
}

export default ModalArticle;