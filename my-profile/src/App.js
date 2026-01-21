import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* 프로필 섹션 */}
        <section className="profile">
          <h1>IT 아카데미 HR 매니저 포트폴리오</h1>
          <p>안녕하세요, 500명 규모의 이벤트를 총괄하는 열정적인 매니저입니다! 스컬.</p>
        </section>

        <hr />

        {/* 자격증 섹션 */}
        <section className="certificates">
          <h2>학습 및 자격증</h2>
          <ul>
            <li><strong>TOEIC:</strong> 875점</li>
            <li><strong>TOSS (토익스피킹):</strong> AL (Advanced Low)</li>
          </ul>
        </section>

        <hr />

        {/* 2026년 목표 섹션 */}
        <section className="goals">
          <h2>2026년 나의 도전</h2>
          <p>📚 <strong>올해의 독서 목표:</strong> 70권 완독하기 (작년 60권 달성!)</p>
          <p>💻 <strong>기술 목표:</strong> 리액트로 수강생들을 위한 취업 가이드 사이트 제작</p>
        </section>

        <hr />

        {/* 경력 사항 */}
        <section className="experience">
          <h2>주요 경력</h2>
          <p>• IT 아카데미 HR 부서 매니저 재직 중</p>
          <p>• 약 500명 대상의 보물찾기 및 이벤트 기획/운영</p>
        </section>
      </header>
    </div>
  );
}

export default App;