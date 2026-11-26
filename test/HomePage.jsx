import React from 'react';

function HomePage({ onNavigate }) {
    return (
        <div className="page-container">
            {/* 메인 배너 (Hero) */}
            <section className="hero-section">
                <span className="badge">GAMIFIED PRODUCTIVITY</span>
                <h1 className="hero-title">
                    작심삼일은 이제 그만,<br />
                    성취가 보상이 되는 할 일 관리
                </h1>
                <p className="hero-subtitle">
                    단순히 할 일을 적고 지우는 것을 넘어, 완료 개수에 따라 확실한 보상을 획득하며
                    매일의 작은 목표를 즐거운 습관으로 만들어 보세요.
                </p>
                <div className="hero-buttons">
                    <button
                        type="button"
                        className="btn-primary"
                        onClick={() => onNavigate('demo')}
                    >
                        지금 바로 체험하기
                    </button>
                    <button
                        type="button"
                        className="btn-secondary"
                        onClick={() => onNavigate('guide')}
                    >
                        보상 규칙 알아보기
                    </button>
                </div>
            </section>

            {/* 핵심 기능 3가지 소개 */}
            <section className="highlights-section">
                <h2 className="section-heading">보상형 할 일 관리의 핵심 기능</h2>
                <div className="card-grid">
                    <div className="info-card">
                        <div className="card-icon">STEP 01</div>
                        <h3>직관적인 할 일 목록</h3>
                        <p>복잡한 설정 없이 오늘 해야 할 일을 빠르게 입력하고 한눈에 목록으로 관리합니다.</p>
                    </div>
                    <div className="info-card">
                        <div className="card-icon">STEP 02</div>
                        <h3>실시간 완료 개수 집계</h3>
                        <p>할 일을 달성할 때마다 완료 개수가 자동으로 카운트되어 성취감을 눈으로 확인합니다.</p>
                    </div>
                    <div className="info-card">
                        <div className="card-icon">STEP 03</div>
                        <h3>목표 달성 보상 지급</h3>
                        <p>일정 개수의 할 일을 완료할 때마다 나만의 특별한 보상이 자동으로 잠금 해제됩니다.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HomePage;