import React, { Component, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import axios from 'axios';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import { Button } from "@mui/material";
import { Box } from "@mui/system";

export default class TextEditor extends Component {

  state = {
    editorState: EditorState.createEmpty(),
  };

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };
  
  render() {
     
    const { editorState } = this.state;
    const details = `${(draftToHtml(convertToRaw(editorState.getCurrentContent())))}`;
    const data ={
        posts: details
    }
    const postCodes=()=>{
        axios.post('http://localhost:5000/posts', data)
        .then(res => {
                alert('data inserted');
        })
    }
    return (
      <Box sx={{ height:'50%',
      }}>
        <Editor
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={this.onEditorStateChange}
          placeholder="Wright Your Blog"
          
        />
        <Box sx={{display:'flex', alignItems:'end', justifyContent:'end', mb:3}}>
        <Button variant="contained" onClick={postCodes}>Post</Button>
        </Box>
      </Box>
    );
  }
}