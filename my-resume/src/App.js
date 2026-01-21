import React from 'react';
import './App.css';
import myPhoto from './ㄹㄹㄹ.jpg';

function App() {
  return (
    <div className="App">
      <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh', padding: '50px 20px', color: '#2d3436' }}>
        
        {/* 상단 프로필 구역 */}
        <header style={{ textAlign: 'center', marginBottom: '40px' }}>
          <img src={myPhoto} alt="프로필 사진" style={{ width: '160px', height: '160px', borderRadius: '50%', objectFit: 'cover', border: '4px solid #3498db', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} />
          <h1 style={{ fontSize: '2.8rem', marginTop: '20px', color: '#2c3e50' }}>HR 매니저 OOO</h1>
          <p style={{ fontSize: '1.2rem', color: '#636e72' }}>사람과 교육의 가치를 잇는 IT 아카데미 관리자</p>
        </header>

        {/* 메인 콘텐츠 구역 */}
        <main style={{ maxWidth: '850px', margin: '0 auto', backgroundColor: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
          
          {/* 핵심 경력 */}
          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ color: '#0984e3', borderLeft: '5px solid #0984e3', paddingLeft: '15px' }}>Professional Experience</h2>
            <div style={{ marginTop: '20px' }}>
              <h3 style={{ marginBottom: '5px' }}>IT 아카데미 인사 매니저</h3>
              <p style={{ color: '#7f8c8d', fontSize: '0.9rem' }}>2024 - Present</p>
              <ul style={{ lineHeight: '1.8' }}>
                <li>실무 중심에서 관리자 직무로 전환하여 팀 매니지먼트 수행</li>
                <li>약 500명 규모의 학생 대상 전사적 보물찾기 이벤트 기획 및 운영 총괄</li>
                <li>IT 트렌드 및 프로그래밍 기초 지식을 활용한 교육 지원</li>
              </ul>
            </div>
          </section>

          {/* 자기 계발 */}
          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ color: '#00b894', borderLeft: '5px solid #00b894', paddingLeft: '15px' }}>Self-Growth</h2>
            <p style={{ fontSize: '1.1rem', marginTop: '20px' }}>
              꾸준함의 가치를 믿습니다. 2025년 한 해 동안 **60권의 책**을 완독했으며, 
              2026년에는 **70권 완독**을 목표로 매일 성장하고 있습니다. 스컬!
            </p>
          </section>

          {/* 연락처 버튼 */}
          <section style={{ textAlign: 'center', marginTop: '50px' }}>
            <a href="mailto:your-email@example.com" style={{ textDecoration: 'none', backgroundColor: '#0984e3', color: 'white', padding: '15px 35px', borderRadius: '30px', fontWeight: 'bold', fontSize: '1.1rem', display: 'inline-block', boxShadow: '0 5px 15px rgba(9, 132, 227, 0.3)' }}>
              제게 연락하기 (Email)
            </a>
          </section>
          
        </main>
      </div>
    </div>
  );
}

export default App;