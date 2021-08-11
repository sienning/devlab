import React from "react";
import { Image, Modal } from "semantic-ui-react";

const ModalImage = ({ srcImage, animation = "heartBeat" }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <Modal
      closeIcon
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Image
          className={`imageArticle animate__animated animate__${animation} animate__infinite`}

          src={srcImage}
        />
      }
    >
      <Modal.Content image>
        <Image src={srcImage} />
      </Modal.Content>
    </Modal>
  );
};

export default ModalImage;
