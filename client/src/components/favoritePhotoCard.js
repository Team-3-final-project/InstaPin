import React from "react";
import "./photocard.css";
import Button from "react-bootstrap/Button";
import {useMutation} from '@apollo/client'
import {DEL_POST, DEL_HIGHLIGHT, DEL_STORY} from '../Mutation'
import {FETCH_ALL} from '../Query'
import Swal from 'sweetalert2'
export default function PhotoCard(props) {
  const { image_url, username, _id } = props.data;
  const {type} = props
  const access_token = localStorage.access_token

  const [deletePost] = useMutation(DEL_POST, {
    refetchQueries: [{query: FETCH_ALL, variables: { access_token } }]
  })
  const [deleteHighlight] = useMutation(DEL_HIGHLIGHT, {
    refetchQueries: [{query: FETCH_ALL, variables: { access_token } }]
  })
  const [deleteStory] = useMutation(DEL_STORY, {
    refetchQueries: [{query: FETCH_ALL, variables: { access_token } }]
  })

  const delQuery = {
    _id,
    access_token
  }
  const handleClick = (e) => {
    e.preventDefault()
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {

        switch (type) {
          case 'posts':
            deletePost({variables: delQuery})
            break;
          case 'highlights':
            deleteHighlight({variables: delQuery})
            break;
          case 'stories':
            deleteStory({variables: delQuery})
            break;
          default:
            break;
        }
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })


  }
  return (
    <div className="photo-card shadow-sm mr-2 mt-2 ml-2 mb-2">
      <div className="photo mb-3">
        <img src={image_url} alt="post" />
      </div>
      <div className="d-flex justify-content-center">
      <Button
        onClick={(e) => handleClick(e)}
        variant="light"
        style={{ fontWeight: 700, fontSize: "16px" }}
        className="ml-2 rounded-pill shadow-sm"
      >
        <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
        </svg>

      </Button>
      <Button
        onClick={() => window.open(image_url, "_blank")}
        variant="light"
        style={{ fontWeight: 700, fontSize: "16px" }}
        className="ml-2 rounded-pill shadow-sm"
      >
        <svg
          width="2em"
          height="2em"
          viewBox="0 0 16 16"
          class="bi bi-download"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"
          />
          <path
            fill-rule="evenodd"
            d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"
          />
        </svg>
      </Button>
      </div>
    </div>
  );
}
