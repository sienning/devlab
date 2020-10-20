import React, { Component } from 'react';
import { Header, Modal } from 'semantic-ui-react';

class ModalArticle extends Component {
    state = {
        open : true,
    }

    handleOpen = (e) => this.setState({ open : true });
    handleClose = (e) => this.setState({ open : false });
    
    componentDidMount () {
        console.log(this.props.openArticle)
        this.setState({  
            open : this.props.openArticle,
        })
    }

    render() {
        const {
            open,
        } = this.state;
        return (
            <Modal
                closeIcon
                open={open}
                onClose={this.handleClose}
                onOpen={this.handleOpen}
            >
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
}

export default ModalArticle;