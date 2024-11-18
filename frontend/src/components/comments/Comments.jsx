/* eslint-disable react/prop-types */

const Comments = ({comments}) => {
    return (
        <div>
          <button>
            <p>Comments: {comments?.length || 0}</p>
          </button>
        </div>
    );
};

export default Comments;