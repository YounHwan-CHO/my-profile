import React, { useState } from 'react';
import './App.css';

function App() {
  const [tab, setTab] = useState('경력');
  const booksRead = 2; //
  const goalBooks = 70; //
  const progress = (booksRead / goalBooks) * 100;

  const content = {
    '자격증': (
      <div className="info-grid">
        <div className="info-item">📜 TOEIC 875</div>
        <div className="info-item">📜 TOSS AL</div>
        <div className="info-item">📜 직업상담사 2급</div>
      </div>
    ),
    '경력': '🏢 IT 아카데미 매니저로서 개발/클라우드 교육 운영을 총괄합니다.',
    '취업 성과': '📈 수강생들의 성공적인 커리어를 지원하는 전문가입니다.',
    '2026 목표': '📚 올해 70권의 책을 읽고 끊임없이 성장하는 것이 목표입니다.'
  };

  return (
    <div className="App">
      <header className="main-header">
        <div className="badge">Professional IT Manager</div>
        <h1>YOUNHWAN CHO</h1>
        <p className="subtitle">성장을 현실로 만드는 교육 운영 전문가</p>
      </header>

      <div className="container">
        <section className="progress-section card">
          <h3>2026 Reading Goal 📖</h3>
          <div className="progress-info">
            <span>{goalBooks}권 중 <strong>{booksRead}권</strong> 완료</span>
            <span className="percent">{progress.toFixed(1)}%</span>
          </div>
          <div className="progress-bar-bg">
            <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
          </div>
        </section>

        <div className="tab-section">
          <div className="tab-buttons">
            {Object.keys(content).map((menu) => (
              <button key={menu} className={tab === menu ? 'active' : ''} onClick={() => setTab(menu)}>{menu}</button>
            ))}
          </div>
          <div className="tab-content card">{content[tab]}</div>
        </div>
      </div>
    </div>
  );
}

export default App;