import React from 'react';
import FavoritePhotoCard from './favoritePhotoCard';
import FavoriteVideoCard from './FavoriteVideoCard.js';

export default function FavoritePost({data, name}) {

  return (

    <div className="mn-profile mt-3 mb-3 overflow-auto">
      {

        data.length < 1 ? <h1 style={{fontWeight: 800, color: "#333333"}}>There is no {name} to see...</h1> : data.map(x => x.image_url ? <FavoritePhotoCard key={x._id} data={x} type={name} /> : <FavoriteVideoCard key={x.id} type={name} data={x} />)
      }
    </div>
  );
}


// import React from 'react'
// import {useQuery} from '@apollo/client'
// import {FETCH_POSTS} from '../Query'

// const FavoritePost = () => {

//     const {loading, error, data} = useQuery(FETCH_POSTS, {
//         variables: { access_token: localStorage.access_token }
//     })
//     if(loading) return <h1>Loading...</h1>
//     if(error) return <p>Error...  {JSON.stringify(error)}</p>
//     const posts = data.getPosts
//     return (
//         <>
//         {
//             JSON.stringify(posts)
//         }
//             {
//                 !posts.video_url &&
//                 posts.map(post => {
//                     return <img src={post.image_url}></img>
//                 })
//             }
//         </>
//     )
// }

// export default FavoritePost