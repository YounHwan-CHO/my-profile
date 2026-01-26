import React, { useState } from 'react';
import './App.css';

function App() {
  const [tab, setTab] = useState('경력');

  const content = {
    '자격증': (
      <>
        📜 TOEIC 875<br />
        📜 TOSS AL<br />
        📜 직업상담사 2급
      </>
    ),
    '경력': '🏢 IT 아카데미 HR 매니저로서 관리자 직무를 수행 중입니다.',
    '취업률': '📈 "아이들을 취업시키는 자리"에서 높은 성과를 내고 있습니다.',
    '경험': '🎉 500명 규모의 전사 보물찾기 이벤트 기획 및 운영 총괄 경험이 있습니다.'
  };

  const booksRead = 2; //
  const goalBooks = 70; //
  const progress = (booksRead / goalBooks) * 100;

  return (
    <div className="App">
      <header className="hero">
        <h1>HR 매니저의 포트폴리오</h1>
        <p>사진은 조만간 업데이트 예정입니다! 스컬.</p>
      </header>

      <section className="goals-section">
        <h2>2026년 독서 목표: {goalBooks}권 완독</h2>
        <div className="progress-container">
          <div className="progress-bar" style={{ width: `${progress}%` }}>
            {booksRead} / {goalBooks}
          </div>
        </div>
        <p>현재까지 {booksRead}권을 읽었습니다. 목표까지 {goalBooks - booksRead}권 남았어요! 스컬.</p>
      </section>

      <div className="tab-container">
        <div className="tabs">
          {Object.keys(content).map((menu) => (
            <button 
              key={menu} 
              className={tab === menu ? 'active' : ''} 
              onClick={() => setTab(menu)}
            >
              {menu}
            </button>
          ))}
        </div>
        <div className="content-box">
          {content[tab]}
        </div>
      </div>
    </div>
  );
}

export default App;