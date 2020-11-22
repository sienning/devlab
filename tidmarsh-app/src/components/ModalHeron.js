import React, { useState } from 'react'
import { Header, Modal } from 'semantic-ui-react'

function ModalHeron({  }) {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <Modal
                dimmer='blurring'
                closeIcon
                open={open}
                onClose={() => setOpen(false)}
            >
                <Header icon='archive' content={headerArticle} />
                <Modal.Content>
                    <div className="border-article texte">
                        {
                            contenuArticle.map((p, i) => {
                                return(
                                    <p key={i}>{p}</p>
                                )
                            })
                        }
                    </div>
                </Modal.Content>
                
            </Modal>
        </div>
    );
}

export default ModalHeron;