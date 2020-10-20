import React, { useState, useEffect } from 'react'
import { Header, Modal } from 'semantic-ui-react'

function ModalArticle({ openArticle, texteArticle }) {
    const [open, setOpen] = useState(false)

    return (
        <Modal
            closeIcon
            open={open}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            trigger={<p className="article">{texteArticle}</p>}
        >
            {console.log("openArticle", openArticle)}
            {console.log("open", open)}
            <Header icon='archive' content='Archive Old Messages' />
            <Modal.Content>
                <p>
                    Your inbox is getting full, would you like us to enable automatic
                    archiving of old messages?
                </p>
            </Modal.Content>
            
        </Modal>
    );
}

export default ModalArticle;