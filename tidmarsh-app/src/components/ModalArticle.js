import React, { useState, useEffect } from 'react'
import { Header, Modal } from 'semantic-ui-react'

function ModalArticle({ texteArticle }) {
    const [open, setOpen] = useState(false)

    return (
        <div>
            <Modal
                closeIcon
                open={open}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                trigger={<div className="article"><p>{texteArticle}</p></div>}
            >
                <Header icon='archive' content="Définition d'une zone humide" />
                <Modal.Content>
                    <p>
                        Hello
                    </p>
                </Modal.Content>
                
            </Modal>
        </div>
    );
}

export default ModalArticle;