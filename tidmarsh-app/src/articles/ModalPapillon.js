import React, { useState } from 'react'
import { Header, Modal, Image } from 'semantic-ui-react'

function ModalPapillon() {
    const [open, setOpen] = useState(true);
    return (
        <div>
            <Modal
                dimmer='blurring'
                closeIcon
                open={open}
                onClose={() => setOpen(false)}
            >
                <Header icon='archive' content="Attention !" />
                <Modal.Content image>
                    <Image style={{ width: "300px" }} src='../images/daily/papillon.png' width="large" className="border-article" wrapped />
                    <Modal.Description>
                        <p>Attention ! Il semblerait qu'un <b>papillion</b> vient de passer à l'instant. L'avez-vous aperçu ?</p> 
                        <p><b>Ouvrez l'oeil !</b></p>
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        </div>
    );
}

export default ModalPapillon;