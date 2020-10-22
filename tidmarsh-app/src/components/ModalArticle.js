import React, { useState, useEffect } from 'react'
import { Header, Modal } from 'semantic-ui-react'

function ModalArticle({ texteArticle, headerArticle, contenuArticle }) {
    const [open, setOpen] = useState(false);
    let newContenuArticle = contenuArticle.replace('\n', <br/>);

    return (
        <div>
            <Modal
                dimmer='blurring'
                closeIcon
                open={open}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                trigger={<div className="article"><p>{texteArticle}</p></div>}
            >
                <Header icon='archive' content={headerArticle} />
                <Modal.Content>
                    <div className="border-article texte">
                        {contenuArticle}
                        {/* {newContenuArticle} */}
                    </div>
                </Modal.Content>
                
            </Modal>
        </div>
    );
}

export default ModalArticle;