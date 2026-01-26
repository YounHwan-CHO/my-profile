import React, { useState } from 'react';
import './App.css';

function App() {
  const [tab, setTab] = useState('경력');

  // 각 박스에 들어갈 내용이야. 스컬.
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
    <div className="App" style={{ backgroundColor: '#f4f7f6', minHeight: '100vh', padding: '40px 20px' }}>
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ color: '#2c3e50', fontSize: '2.5rem' }}>HR 매니저의 포트폴리오</h1>
        <p style={{ color: '#7f8c8d' }}>사진은 곧 업데이트 예정! 스컬.</p>
      </header>

      <section className="goals-section" style={{ maxWidth: '600px', margin: '0 auto 40px', background: 'white', padding: '20px', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
        <h2 style={{ fontSize: '1.2rem', marginBottom: '15px' }}>2026년 독서 목표: {goalBooks}권 완독</h2>
        <div style={{ background: '#eee', borderRadius: '10px', height: '25px', width: '100%', overflow: 'hidden' }}>
          <div style={{ width: `${progress}%`, background: '#27ae60', height: '100%', transition: 'width 0.5s ease', color: 'white', fontSize: '12px', textAlign: 'center', lineHeight: '25px' }}>
            {booksRead} / {goalBooks}
          </div>
        </div>
        <p style={{ textAlign: 'center', marginTop: '10px', fontSize: '0.9rem', color: '#666' }}>현재 목표의 {progress.toFixed(1)}% 달성 중! 스컬.</p>
      </section>

      <div className="tab-container" style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
        <div className="tabs" style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
          {Object.keys(content).map((menu) => (
            <button 
              key={menu} 
              onClick={() => setTab(menu)}
              style={{ padding: '10px 20px', border: 'none', borderRadius: '20px', cursor: 'pointer', background: tab === menu ? '#2c3e50' : '#ddd', color: tab === menu ? 'white' : 'black', fontWeight: 'bold' }}
            >
              {menu}
            </button>
          ))}
        </div>
        <div className="content-box" style={{ background: 'white', padding: '30px', borderRadius: '15px', minHeight: '100px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', fontSize: '1.1rem', lineHeight: '1.6' }}>
          {content[tab]}
        </div>
      </div>
    </div>
  );
}

export default App;