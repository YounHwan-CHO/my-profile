import React, { useState } from 'react';
import './App.css';
import myPhoto from './ㄹㄹㄹ.jpg'; 

function App() {
  // 
  const [tab, setTab] = useState('경력');

  // 각 박스에 들어갈 내용들이야. 스컬.
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

  return (
    <div className="App">
      <div style={{ backgroundColor: '#f4f7f6', minHeight: '100vh', padding: '40px 20px' }}>
        
        {/* 상단 프로필 */}
        <header style={{ textAlign: 'center', marginBottom: '30px' }}>
          <img src={myPhoto} alt="프로필" style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover', border: '5px solid white', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }} />
          <h1 style={{ color: '#2c3e50', marginTop: '15px' }}>HR 매니저 포트폴리오</h1>
          <p>2026년 목표: 독서 70권 완독 진행 중! 📚</p>
        </header>

        {/* 4개의 박스 (버튼) */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', maxWidth: '600px', margin: '0 auto' }}>
          {['자격증', '경력', '취업률', '경험'].map((item) => (
            <div 
              key={item}
              onClick={() => setTab(item)}
              style={{
                padding: '20px',
                backgroundColor: tab === item ? '#3498db' : 'white',
                color: tab === item ? 'white' : '#333',
                borderRadius: '12px',
                textAlign: 'center',
                cursor: 'pointer',
                fontWeight: 'bold',
                boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                transition: '0.3s'
              }}
            >
              {item}
            </div>
          ))}
        </div>

        {/* 클릭하면 바뀌는 상세 내용 박스 */}
        <div style={{ maxWidth: '600px', margin: '30px auto', backgroundColor: 'white', padding: '30px', borderRadius: '15px', textAlign: 'center', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
          <h2 style={{ color: '#3498db', marginBottom: '15px' }}>{tab} 상세 정보</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#555' }}>
            {content[tab]}
          </p>
        </div>

      </div>
    </div>
  );
}

export default App;