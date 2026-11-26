import React, { useState } from 'react';

function DemoPage() {
    const [inputValue, setInputValue] = useState('');
    const [todos, setTodos] = useState([]);

    // 할 일 추가
    const handleAddTodo = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;
        setTodos([...todos, { id: Date.now(), text: inputValue, completed: false }]);
        setInputValue('');
    };

    // 할 일 완료 체크
    const toggleTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    // 완료 개수 계산
    const completedCount = todos.filter((t) => t.completed).length;

    // 완료 개수에 따른 보상 목록 생성
    const getRewards = (count) => {
        const earned = [];
        if (count >= 1) earned.push('☕ 1개 달성 보상: 커피 한 잔의 여유');
        if (count >= 3) earned.push('🍰 3개 달성 보상: 달콤한 디저트 타임');
        if (count >= 5) earned.push('🎬 5개 달성 보상: 영화/유튜브 자유시간 1시간');
        return earned;
    };

    const rewards = getRewards(completedCount);

    return (
        <div className="page-container">
            <div className="demo-box">
                <h1 className="demo-title">보상형 할 일 관리</h1>

                {/* 할 일 입력창 */}
                <form onSubmit={handleAddTodo} className="demo-input-group">
                    <input
                        type="text"
                        placeholder="할 일을 입력하세요"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className="demo-input"
                    />
                    <button type="submit" className="demo-add-btn">추가</button>
                </form>

                {/* 할 일 목록 */}
                <div className="demo-section">
                    <h2 className="demo-subtitle">할 일 목록</h2>
                    {todos.length === 0 ? (
                        <p className="demo-muted">등록된 할 일이 없습니다. 위에서 추가해 보세요.</p>
                    ) : (
                        <ul className="demo-todo-list">
                            {todos.map((todo) => (
                                <li
                                    key={todo.id}
                                    onClick={() => toggleTodo(todo.id)}
                                    className={`demo-todo-item ${todo.completed ? 'done' : ''}`}
                                >
                                    <input type="checkbox" checked={todo.completed} onChange={() => {}} />
                                    <span>{todo.text}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* 완료 개수 */}
                <div className="demo-section">
                    <p className="demo-count">완료 개수: {completedCount}</p>
                </div>

                {/* 보상 영역 */}
                <div className="demo-section">
                    <h2 className="demo-subtitle">보상</h2>
                    {rewards.length === 0 ? (
                        <p className="demo-muted">아직 보상이 없습니다.</p>
                    ) : (
                        <ul className="demo-reward-list">
                            {rewards.map((reward, index) => (
                                <li key={index} className="demo-reward-item">{reward}</li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}

export default DemoPage;