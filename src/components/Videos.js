import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useVideoList from "../hooks/useVideoList";
import Video from "./Video";
const Videos = () => {
  const [page, setPage] = useState(1);
  const { loading, videos, error, hasMore } = useVideoList(page);

  return (
    <>
      {videos.length > 0 && (
        <InfiniteScroll
          dataLength={videos.length}
          hasMore={hasMore}
          next={() => setPage(page + 8)}
          loader={<h4>Loading...</h4>}
        >
          {videos.map((video) => (
            <Video
              key={video.youtubeID}
              title={video.title}
              id={video.youtubeID}
              noq={video.noq}
            />
          ))}
        </InfiniteScroll>
      )}

      {!loading && videos.length === 0 && <div>No Data Found!</div>}
      {error && <div>There was an error</div>}
      {loading && <div>Loading...</div>}
    </>
  );
};

export default Videos;
