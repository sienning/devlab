import React from 'react'
import { Image, Modal } from 'semantic-ui-react'

const ModalImage = ({ srcImage }) => {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      closeIcon
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<div><Image className='imageArticle' src={srcImage} /></div>}
    >
      <Modal.Content image>
          <Image src={srcImage} />
      </Modal.Content>
    </Modal>
  );
}

export default ModalImage;