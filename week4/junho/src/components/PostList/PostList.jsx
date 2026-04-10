import './PostList.css';

function PostList() {
    return (
        
    <main className="post-list">
        <article className="post">
          <span className="post__tag">🙌 같이해요</span>
          <div className="post__title">
            <span className="text-orange">모집중</span>
            <span className="text-black">맥주마실 사람~~</span>
          </div>
          <p className="post__desc">쪽지 주세요 고고!!</p>
          <div className="post__info">
            <span><img src="/assets/Chat Message.png" alt="채팅" /> 누구나 참여 가능</span>
            <span><img src="/assets/User Account.png" alt="유저" /> 2/4명 참여</span>
          </div>
          <div className="post__meta">
            <div className="meta-left">
              <span>요우우</span><span>·</span><span>화양동</span>
            </div>
            <span>3분 전</span>
          </div>
        </article>

        <article className="post">
          <span className="post__tag">동네질문</span>
          <div className="post__title">
            <span className="text-orange">Q.</span>
            <span className="text-black">혼밥은 다들 어디서 하시나요? 뻘쭘하지 않고 사장님들께 안 미안한 곳, 어디든 리스트업해서 한번씩 가보려구요. 부탁드립니다!</span>
          </div>
          <div className="post__meta">
            <div className="meta-left">
              <span>도우영</span><span>·</span><span>화양동</span>
            </div>
            <span>15분 전</span>
          </div>
          <div className="post__action">
            <button><img src="/assets/Ok.png" alt="확인" /> 궁금해요</button>
            <button><img src="/assets/answer.png" alt="답변" /> 답변 2</button>
          </div>
        </article>

        <article className="post">
          <span className="post__tag">동네맛집</span>
          <div className="post__title">
            <p className="text-black">송정동 밥집 추천 부탁드려요 퇴근하고 뭐 해먹기 귀찮을때 먹을만한 곳이요.</p>
            <span className="text-gray">...더보기</span>
          </div>
          <div className="post__meta">
            <div className="meta-left">
              <span>도우영</span><span>·</span><span>화양동</span>
            </div>
            <span>15분 전</span>
          </div>
          <div className="post__action">
            <button><img src="/assets/Happy.png" alt="공감" /> 공감하기 </button>
            <button><img src="/assets/answer.png" alt="답변" /> 답변 2 </button>
          </div>
        </article>

        <article className="post">
          <span className="post__tag">분실/실종센터</span>
          <div className="post__title">
            <span className="text-orange">찾아요</span>
            <span className="text-black">카드 지갑을 분실했습니다. 발견하시면 사례하겠습니다. 꼭 찾아주세요.</span>
          </div>
          <div className="post__gallery">
            <img src="/assets/pic1.png" alt="지갑 사진 1" />
            <img src="/assets/pic2.png" alt="지갑 사진 2" />
          </div>
          <div className="post__location-box">
            <div className="location-icon">
              <img src="/assets/map.png" alt="위치 핀" />
            </div>
            <div className="location-text">
              <p className="loc-name">파리게이츠</p>
              <p className="loc-address">서울특별시 광진구 동일로 350</p>
            </div>
          </div>
          <div className="post__meta">
            <div className="meta-left">
              <span>Maro</span><span>·</span><span>중곡동</span>
            </div>
            <span>1시간 전</span>
          </div>
          <div className="post__action">
            <button><img src="/assets/Happy.png" alt="공감" /> 공감하기</button>
            <button><img src="/assets/answer.png" alt="답변" /> 댓글쓰기</button>
          </div>
        </article>
      </main>
    )
}

export default PostList;