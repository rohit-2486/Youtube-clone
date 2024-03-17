import React from 'react'

const VideoCard = ({info}) => {
    // console.log(info)
    // const {snippet , statistics } = info;
    // const {channelTitle , title }  = snippet;

    const formatViewCount = (viewCount) => {
      if (viewCount >= 1000000) {
        return (viewCount / 1000000).toFixed(1) + 'M';
      } else if (viewCount >= 1000) {
        return (viewCount / 1000).toFixed(1) + 'K';
      } else {
        return viewCount.toString();
      }
    };

    const fomatPublishedAt = (publishedAt)=>{
      const now = new Date()
      const publishedDate = new Date (publishedAt)
      const timeDifference = Math.abs(now - publishedDate);
      const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));
      return hoursDifference + ' hours ago';
    }

    const thumbnailsUrl = info?.snippet?.thumbnails?.high?.url || "";
    const viewCount =  info?.statistics?.viewCount ||"";
    const publishedAt = info?.snippet?.publishedAt || "";
  return (
    <div className='ml-2 my-4 md:m-5 flex-col gap-1 w-[320px]  h-[260px] shadow-lg rounded-lg'>
      <div>
        <img className='rounded-lg w-full md:w-96 h-44  ' alt='thumbnails' src = {thumbnailsUrl}/>
      </div>
        <ul>
            <li className='font-bold truncate '>{info?.snippet?.title}</li>
            <li>{info?.snippet?.channelTitle}</li>
            <div className='flex'>
            <li className='mr-3'>{formatViewCount(viewCount) } views</li>
            <li>{fomatPublishedAt(publishedAt)}</li>
            </div>
        </ul>
    </div>
  )
}

export default VideoCard;

// import React from 'react'

// const VideoCard = ({info}) => {
//     console.log(info)
//     // const {snippet , statistics } = info;
//     // const {channelTitle , title }  = snippet;

//     const thumbnailsUrl = info?.snippet?.thumbnails?.high?.url || "";
//     const viewCount =  info?.statistics?.viewCount ||"";
//   return (
//     <div className="flex flex-col gap-1 shadow-lg w-[320px] h-[260px]   rounded-xl ">
//       <div>
//         <img className='rounded-lg ' alt='thumbnails' src = {thumbnailsUrl}/>
//        </div>
//         <ul>
//             <li className='font-bold truncate '>{info?.snippet?.title}</li>
//             <li>{info?.snippet?.channelTitle}</li>
//             <li>{viewCount } views</li>
//         </ul>
//     </div>
//   )
// }

// export default VideoCard
