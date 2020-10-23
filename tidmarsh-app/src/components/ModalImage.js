import React from 'react'
import { Button, Image, Modal } from 'semantic-ui-react'

const ModalImage = ({ srcImage }) => {
  const [open, setOpen] = React.useState(false)

  return (

    <Modal
        closeIcon
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<div className='article'><Image src={srcImage} /></div>}
        >
        <Modal.Content image>
            <Image size={300} src={srcImage} />
        </Modal.Content>
    </Modal>
  );
}

export default ModalImage;