import React from 'react';

const REWARD_TIERS = [
    { count: '1개 완료', title: '스타터 배지 & 커피 타임', desc: '첫 번째 할 일을 완수한 나에게 주는 작은 휴식 보상' },
    { count: '3개 완료', title: '집중력 마스터 & 간식 권리', desc: '오늘의 핵심 목표 3가지를 모두 해냈을 때 주어지는 보상' },
    { count: '5개 완료', title: '갓생 달성 & 자유 시간 1시간', desc: '계획한 할 일을 완벽히 소화한 날 누리는 특별한 보상' },
];

function GuidePage({ onNavigate }) {
    return (
        <div className="page-container">
            <div className="page-header">
                <span className="badge">HOW IT WORKS</span>
                <h1>완료 개수가 쌓일수록 커지는 보상</h1>
                <p>작은 성공을 반복하면 더 큰 동기부여가 만들어집니다.</p>
            </div>

            {/* 단계별 보상 안내 */}
            <section className="tier-section">
                <h2 className="section-heading">단계별 보상 기준</h2>
                <div className="tier-list">
                    {REWARD_TIERS.map((tier, idx) => (
                        <div key={idx} className="tier-card">
                            <div className="tier-badge">{tier.count}</div>
                            <div className="tier-content">
                                <h3>{tier.title}</h3>
                                <p>{tier.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 하단 체험 유도 */}
            <div className="cta-box">
                <h3>직접 할 일을 추가하고 보상을 획득해 보세요!</h3>
                <button
                    type="button"
                    className="btn-primary"
                    onClick={() => onNavigate('demo')}
                >
                    보상형 할 일 관리 실행하기
                </button>
            </div>
        </div>
    );
}

export default GuidePage;