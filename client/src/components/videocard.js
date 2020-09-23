import React, {useEffect, useState} from "react";
import Button from "react-bootstrap/Button";
import {useParams} from 'react-router-dom'
import {useMutation, useQuery} from '@apollo/client'
import {ADD_POST, ADD_HIHGHLIGHT, ADD_IGTV, ADD_STORY} from '../Mutation'
import {FETCH_ALL} from '../Query'
import Swal from 'sweetalert2'
export default function VideoCard(props) {
  const params = useParams()
  const {profile} = params
  const { video_url, id } = props.data;
  const {type} = props
  const access_token = localStorage.access_token
  const [isFavorite, setIsFavorite] = useState(false)

  const {data} = useQuery(FETCH_ALL, {
    variables: { access_token: localStorage.access_token }
  })

  useEffect(() => {
    if(data) {
      const checkFav = data.getFavorites[type].filter(post => post.id === id)
      if(checkFav.length > 0) setIsFavorite(true)
    }
  }, [data])

  const [addPost] = useMutation(ADD_POST, {
    refetchQueries: [{query: FETCH_ALL, variables: { access_token } }]
  })

  const [addHighlight] = useMutation(ADD_HIHGHLIGHT, {
    refetchQueries: [{query: FETCH_ALL, variables: { access_token } }]
  })

  const [addIgtv] = useMutation(ADD_IGTV, {
    refetchQueries: [{query: FETCH_ALL, variables: { access_token } }]
  })

  const [addStory] = useMutation(ADD_STORY, {
    refetchQueries: [{query: FETCH_ALL, variables: { access_token } }]
  })

  const inputQuery = {
    id,
    image_url: null,
    access_token : localStorage.access_token,
    username: profile,
    video_url
  }
  const handleClick = (e)=> {
    e.preventDefault()
    switch (type) {
      case 'posts':
        addPost({ variables: inputQuery })
        break;
      case 'stories':
        addStory({ variables: inputQuery })
        break;
      case 'igtvs':
        addIgtv({ variables: inputQuery })
        break;
      case 'highlights':
        addHighlight({ variables: inputQuery })
        break;
      default:
        break;
    }
    Swal.fire(
      'Success!',
      'Added to your favorite!',
      'success'
    )
  }

  return (
    <div className="photo-card shadow-sm mr-2 mt-2 ml-2 mb-2">
      <div className="photo mb-2">
        <video width="640" height="360" controls>
          <source
            src={video_url}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="d-flex justify-content-center">
        {
          !isFavorite &&
        <Button
          variant="light"
          onClick={(e) => handleClick(e)}
          style={{ fontWeight: 700, fontSize: "16px" }}
          className="ml-2 rounded-pill shadow-sm"
        >
          <svg
            width="2em"
            height="2em"
            viewBox="0 0 16 16"
            className="bi bi-heart-fill"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
            />
          </svg>
        </Button>
        }
        <Button
          onClick={() => window.open(video_url, "_blank")}
          variant="light"
          style={{ fontWeight: 700, fontSize: "16px" }}
          className="ml-2 rounded-pill shadow-sm"
        >
          <svg
            width="2em"
            height="2em"
            viewBox="0 0 16 16"
            className="bi bi-download"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"
            />
            <path
              fillRule="evenodd"
              d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
}
