import React from "react";
import { post } from "axios";
import qs from "qs";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Typography from "@material-ui/core/Typography";

class BoardDelete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClickOpen() {
    this.setState({
      open: true,
    });
  }

  handleClose() {
    this.setState({
      open: false,
    });
  }

  deleteBoard(id) {
    const url = "/api/ms-deleteContent";
    const qstring = qs.stringify({
      content_id: id,
      act_type: "content_delete",
    });

    post(url, qstring).then((response) => {
      console.log(response.data);
      this.props.stateRefresh();
    });

    /*
        const url = 'http://127.0.0.1:8800/mdb_boards/' + qs.stringify({content_id: id});
        fetch(url, {
           method: 'DELETE' 
        });

        this.props.stateRefresh();
        */
  }

  render() {
    return (
      <div style={{ display: "inline-block" }}>
        <Button
          variant="contained"
          color="secondary"
          onClick={this.handleClickOpen}
        >
          삭제
        </Button>
        <Dialog onClose={this.handleClose} open={this.state.open}>
          <DialogTitle onClose={this.handleClose}>삭제 경고</DialogTitle>
          <DialogContent>
            <Typography gutterBottom>선택한 정보가 삭제됩니다.</Typography>
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              color="primary"
              onClick={(e) => {
                this.deleteBoard(this.props.id);
              }}
            >
              삭제
            </Button>
            <Button
              variant="outlined"
              color="primary"
              onClick={this.handleClose}
            >
              닫기
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default BoardDelete;
