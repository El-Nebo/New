import { useState } from "react";
import LikeButton from "../LikeButton";
export default function LikeAndDisLike() {
  const [state, setState] = useState({
    likeActive: false,
    dislikeActive: false,
  });

  function setDislike() {
    setState({
      dislikeActive: !state.dislikeActive,
    });
  }
  function setLike() {
    setState({
      likeActive: !state.likeActive,
    });
  }

  function handleLike() {
    if (state.dislikeActive) {
      setLike();
      setDislike();
    }
    setLike();
  }

  function handleDislike() {
    if (state.likeActive) {
      setDislike();
      setLike();
    }
    setDislike();
  }

  return (
    <div className="flex flex-row gap-2">
      <LikeButton handleClick={handleLike}  active={state.likeActive} />
      <LikeButton handleClick={handleDislike}  active={state.dislikeActive} isLike={false} />
    </div>
  );
}
