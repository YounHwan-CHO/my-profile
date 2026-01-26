import React from 'react';
import './App.css';

function App() {
  const booksRead = 2; // 현재 읽은 책
  const goalBooks = 70; // 2026년 목표
  const progress = (booksRead / goalBooks) * 100;

  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo">IT Academy Manager</div>
        <ul className="nav-links">
          <li>About</li>
          <li>Skills</li>
          <li>Goals</li>
        </ul>
      </nav>

      <header className="hero">
        <div className="hero-content">
          <h1>끈기 있는 HR 매니저의 포트폴리오</h1>
          <p>사진은 조만간 멋진 모습으로 업데이트 예정입니다! 스컬.</p>
          <div className="status-badge">2026년 독서 챌린지 진행 중 📚</div>
        </div>
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

      <section className="skills-section">
        <div className="skill-card">
          <h3>Work Experience</h3>
          <p>IT 아카데미 관리직 (개발 및 클라우드 교육 운영)</p>
        </div>
        <div className="skill-card">
          <h3>Certifications</h3>
          <p>직업상담사 2급 / TOEIC 875</p>
        </div>
      </section>
    </div>
  );
}

export default App;