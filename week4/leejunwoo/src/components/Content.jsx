const Content = ({items}) => {
    return (<div className="box">
    {items.filter((item) => item.isSold)
    .map(({title, location, timeAgo, price, image, comments, likes}, index)=> (
    <div key={index} className="item">
        <div className="item-img">
            <img src={image} alt="상품 이미지" />
        </div>
        <div className="item-content">
            <div className="item-title">{title}</div>
            <div className="item-meta">
                <div className="item-location">{location}</div>
                <span className="text-dot">·</span>
                <div className="timeAgo">{timeAgo}</div>
            </div>
            <div className="item-price">{price}</div>
            <div className="item-react">
                {comments === 0 ? undefined: <button className="item-react-btn">
                <img src="../images/comment.svg" alt="댓글 이미지" />
                {comments}
                </button>}
                {likes === 0 ? undefined : <button className="item-react-btn">
                <img src="../images/like.svg" alt="좋아요 이미지" />
                {likes}
                </button>}
            </div>
        </div>
    </div>
    ))}
    </div>);
};

export default Content;