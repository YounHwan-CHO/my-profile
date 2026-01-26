import React from 'react';
import './App.css';

function App() {
  // 현재 읽은 책 수 (나중에 이 숫자만 바꾸면 돼!)
  const booksRead = 2;
  const goalBooks = 70;
  const progress = (booksRead / goalBooks) * 100;

  return (
    <div className="App">
      {/* 네비게이션 헤더 (예시 사이트 스타일!) */}
      <nav className="navbar">
        <div className="logo">IT Academy Manager</div>
        <ul className="nav-links">
          <li>About</li>
          <li>Skills</li>
          <li>Goals</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* 메인 히어로 섹션 */}
      <header className="hero">
        <div className="hero-content">
          <h1>안녕하세요, 끈기 있는 HR 매니저입니다.</h1>
          <p>IT 교육 관리부터 개인적 성찰까지, 어제보다 더 나은 오늘을 기록합니다. 스컬.</p>
          <div className="status-badge">2026년 독서 목표 진행 중! 📚</div>
        </div>
      </header>

      {/* 독서 목표 프로그레스 섹션 (핵심 포인트!) */}
      <section className="goals-section">
        <h2>2026년 독서 챌린지 📖</h2>
        <div className="progress-container">
          <div className="progress-bar" style={{ width: `${progress}%` }}>
            {booksRead} / {goalBooks}
          </div>
        </div>
        <p>현재까지 {booksRead}권을 읽었습니다! 목표까지 {goalBooks - booksRead}권 남았어요. 스컬.</p>
      </section>

      {/* 자격증 및 스킬 카드 섹션 */}
      <section className="skills-section">
        <div className="skill-card">
          <h3>Work Experience</h3>
          <p>IT 아카데미 관리직 (개발/클라우드 교육)</p>
          <p>500명 규모 행사 총괄 운영</p>
        </div>
        <div className="skill-card">
          <h3>Certifications</h3>
          <p>직업상담사 2급</p>
          <p>TOEIC 875 / TOSS AL</p>
        </div>
      </section>
    </div>
  );
}

export default App;