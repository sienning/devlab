import React, { useState } from "react";
import { Header, Modal } from "semantic-ui-react";

function ModalArticle({
  texteArticle,
  headerArticle,
  contenuArticle,
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

export default ModalArticle;
