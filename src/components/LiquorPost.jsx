import React, { useState } from "react";
import {
  postLiquorPost,
  putLiquorPost,
  deleteLiquorPost,
  getLiquorPost,
} from "../api/LiquorPost";
import "../styles/LiquorPost.css";

function LiquorPost() {
  const [liquor, setLiquor] = useState({
    userId: 0,
    name: "",
    category: 0,
    volume: 0,
    price: 0,
    rate: 0,
    picture: "",
    etc: "",
  });

  const handlePost = () => {
    postLiquorPost(liquor)
      .then(({ status, code, data, message }) => {
        console.log(status, code, data, message);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <h1>Liquor Posts</h1>
      <div>
        <h2 onClick={handlePost}>등록</h2>

        <div className="liquor-post-row">
          <div className="liquor-post-left">User ID</div>
          <input
            value={liquor.userId}
            onChange={(e) =>
              setLiquor({ ...liquor, userId: parseInt(e.target.value) })
            }
          />
        </div>

        <div className="liquor-post-row">
          <div className="liquor-post-left">Name</div>
          <input
            value={liquor.name}
            onChange={(e) => setLiquor({ ...liquor, name: e.target.value })}
          />
        </div>

        <div className="liquor-post-row">
          <div className="liquor-post-left">Category</div>
          <input
            value={liquor.category}
            onChange={(e) =>
              setLiquor({ ...liquor, category: parseInt(e.target.value) })
            }
          />
        </div>

        <div className="liquor-post-row">
          <div className="liquor-post-left">Volume</div>
          <input
            value={liquor.volume}
            onChange={(e) =>
              setLiquor({ ...liquor, volume: parseInt(e.target.value) })
            }
          />
        </div>

        <div className="liquor-post-row">
          <div className="liquor-post-left">Price</div>
          <input
            value={liquor.price}
            onChange={(e) =>
              setLiquor({ ...liquor, price: parseInt(e.target.value) })
            }
          />
        </div>

        <div className="liquor-post-row">
          <div className="liquor-post-left">Rate</div>
          <input
            value={liquor.rate}
            onChange={(e) =>
              setLiquor({ ...liquor, rate: parseInt(e.target.value) })
            }
          />
        </div>

        <div className="liquor-post-row">
          <div className="liquor-post-left">Picture</div>
          <input
            value={liquor.picture}
            onChange={(e) => setLiquor({ ...liquor, picture: e.target.value })}
          />
        </div>

        <div className="liquor-post-row">
          <div className="liquor-post-left">Etc</div>
          <input
            value={liquor.etc}
            onChange={(e) => setLiquor({ ...liquor, etc: e.target.value })}
          />
        </div>
      </div>
    </div>
  );
}

export default LiquorPost;
