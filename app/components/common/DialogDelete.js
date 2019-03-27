import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

const DeleteDialog = (props)=>{
   
    const { openDialogDelete, closeDialogDelete, dialogDelete, dialogDeleteSubmit} = props;

        return (
            <div>
            
                <Dialog
                    open={dialogDelete}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={closeDialogDelete}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle id="alert-dialog-slide-title">
                        {"Apakah anda yakin ingin menghapus ?"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                           Data yang telah dihapus tidak bisa dikembalikan seperti semula.
                           Tekan hapus jika ingin melanjutkan.
            </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={dialogDeleteSubmit} variant="contained" color="primary">
                            Hapus
            </Button>
                        <Button onClick={closeDialogDelete} color="primary">
                            Batal
            </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    
}

export default DeleteDialog;