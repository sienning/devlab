import React from 'react'
import { Image, Modal } from 'semantic-ui-react'

const ModalImage = ({ srcImage }) => {
  const [open, setOpen] = React.useState(false)
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
    <Modal
      closeIcon
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Image onMouseOver={toggleWobble} className='imageArticle animate__animated' src={srcImage} />}
    >
      <Modal.Content image>
        <Image src={srcImage} />
      </Modal.Content>
    </Modal>
  );
}

export default ModalImage;