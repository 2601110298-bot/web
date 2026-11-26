import React, { useState } from 'react';
import HomePage from './HomePage';
import GuidePage from './GuidePage';
import DemoPage from './DemoPage';
import './App.css';

function App() {
    const [activePage, setActivePage] = useState('home');

    return (
        <div className="site-wrapper">
            {/* 공통 상단 헤더 */}
            <header className="site-header">
                <div className="header-inner">
                    <div className="logo" onClick={() => setActivePage('home')}>
                        REWARD TODO
                    </div>
                    <nav className="nav-menu">
                        <button
                            type="button"
                            className={`nav-item ${activePage === 'home' ? 'active' : ''}`}
                            onClick={() => setActivePage('home')}
                        >
                            서비스 소개
                        </button>
                        <button
                            type="button"
                            className={`nav-item ${activePage === 'guide' ? 'active' : ''}`}
                            onClick={() => setActivePage('guide')}
                        >
                            보상 시스템 안내
                        </button>
                        <button
                            type="button"
                            className={`nav-item ${activePage === 'demo' ? 'active' : ''}`}
                            onClick={() => setActivePage('demo')}
                        >
                            직접 체험하기
                        </button>
                    </nav>
                </div>
            </header>

            {/* 선택된 페이지 렌더링 */}
            <main className="site-main">
                {activePage === 'home' && <HomePage onNavigate={setActivePage} />}
                {activePage === 'guide' && <GuidePage onNavigate={setActivePage} />}
                {activePage === 'demo' && <DemoPage />}
            </main>

            {/* 공통 하단 푸터 */}
            <footer className="site-footer">
                <p>© 2026 REWARD TODO - 보상형 할 일 관리 서비스. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;