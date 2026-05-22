import React from 'react'

const Header=()=>{
  const age="18";
  return <div>
    This is header!
    <Content age={age}/>
    </div>
};

const Content=(props)=>{
  const name="김소혜";
  return (
    <>
    <div>This is Content!</div>
    <div>여기 하나 더~</div>
    <div>제 이름은 {name}입니다.</div>
    {name==="김소혜" ? <div>{name}</div> : <div>몰라요</div>}
    <div>{props.age}</div>
    </>
  );
};

const App=()=>{
  return <Header/>
};

export default App