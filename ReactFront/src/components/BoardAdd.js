import React from "react";
import { post } from "axios";
import qs from "qs";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  hidden: {
    display: "none",
  },
});

class BoardAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      context: "",
      open: false,
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleValueChange = this.handleValueChange.bind(this);
    this.addBoardWrite = this.addBoardWrite.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleFormSubmit(e) {
    e.preventDefault();
    this.addBoardWrite().then((response) => {
      console.log(response.data);
      this.props.stateRefresh();
    });
    this.setState({
      title: "",
      context: "",
      open: false,
    });
  }

  handleValueChange(e) {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  addBoardWrite() {
    const url = "/api/ms-addContent";

    const qstring = qs.stringify({
      user_id: "1",
      title: this.state.title,
      context: this.state.context,
      act_type: "content_create",
    });

    return post(url, qstring);
  }

  handleClickOpen() {
    this.setState({
      open: true,
    });
  }

  handleClose() {
    this.setState({
      title: "",
      context: "",
      open: false,
    });
  }

  render() {
    //const { classes } = this.props;
    return (
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={this.handleClickOpen}
        >
          작성
        </Button>

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle style={{ width: 550 }} id="form-dialog-title">
            게시글 작성 <br />
            백앤드 비즈니스는 NodeJs로 작성된 마이크로 서비스를 활용.
          </DialogTitle>
          <DialogContent>
            <TextField
              fullWidth
              label="제목"
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleValueChange}
            />
            <br />
            <br />
            <TextField
              label="내용"
              type="text"
              name="context"
              value={this.state.context}
              onChange={this.handleValueChange}
              id="outlined-multiline-static"
              multiline
              rows={4}
              variant="outlined"
              fullWidth
            />
            <br />
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleFormSubmit}
            >
              추가
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

export default withStyles(styles)(BoardAdd);
