import React, { useState } from 'react'
import { Header, Modal, Image } from 'semantic-ui-react'

function ModalHeron() {
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
                <Modal.Content image className="texte">
                    <Image src='./images/heron.svg' width="large" className="border-article" />
                    <Modal.Description>
                        <p>Attention ! Il semblerait qu'un <b>héron</b> vient de passer à l'instant. L'avez-vous aperçu ?</p> 
                        <p><b>Ouvrez l'oeil !</b> ... et votre esprit.</p>
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        </div>
    );
}

export default ModalHeron;