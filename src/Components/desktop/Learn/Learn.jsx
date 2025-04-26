import React, { useEffect, useState } from 'react';
import './Learn.css';

const bookTopics = {
    'Arrays Book': [
        { title: 'Set Matrix to zero', difficulty: 'easy', leetcode: 'https://leetcode.com/problem1' },
        { title: 'Spiral Matrix', difficulty: 'medium', leetcode: 'https://leetcode.com/problem2' },
        { title: 'Next Greater Element', difficulty: 'hard', leetcode: 'https://leetcode.com/problem3' },
        { title: 'Set Matrix to zero', difficulty: 'easy', leetcode: 'https://leetcode.com/problem1' },
        { title: 'Spiral Matrix', difficulty: 'medium', leetcode: 'https://leetcode.com/problem2' },
        { title: 'Next Greater Element', difficulty: 'hard', leetcode: 'https://leetcode.com/problem3' },
        { title: 'Three Sum', difficulty: 'easy', leetcode: 'https://leetcode.com/problem1' },
        { title: 'Max chunks to make array sorted', difficulty: 'medium', leetcode: 'https://leetcode.com/problem2' },
        { title: 'Topic 3', difficulty: 'hard', leetcode: 'https://leetcode.com/problem3' },
        { title: 'Topic 1', difficulty: 'easy', leetcode: 'https://leetcode.com/problem1' },
        { title: 'Topic 2', difficulty: 'medium', leetcode: 'https://leetcode.com/problem2' },
        { title: 'Topic 3', difficulty: 'hard', leetcode: 'https://leetcode.com/problem3' },
        { title: 'Topic 1', difficulty: 'easy', leetcode: 'https://leetcode.com/problem1' },
        { title: 'Topic 2', difficulty: 'medium', leetcode: 'https://leetcode.com/problem2' },
        { title: 'Topic 3', difficulty: 'hard', leetcode: 'https://leetcode.com/problem3' },
        { title: 'Topic 3', difficulty: 'hard', leetcode: 'https://leetcode.com/problem3' },
        { title: 'Topic 1', difficulty: 'easy', leetcode: 'https://leetcode.com/problem1' },
        { title: 'Topic 2', difficulty: 'medium', leetcode: 'https://leetcode.com/problem2' },
        { title: 'Topic 3', difficulty: 'hard', leetcode: 'https://leetcode.com/problem3' },
        { title: 'Topic 3', difficulty: 'hard', leetcode: 'https://leetcode.com/problem3' },
        { title: 'Topic 1', difficulty: 'easy', leetcode: 'https://leetcode.com/problem1' },
        { title: 'Topic 2', difficulty: 'medium', leetcode: 'https://leetcode.com/problem2' },
        { title: 'Topic 3', difficulty: 'hard', leetcode: 'https://leetcode.com/problem3' },
    ],
    'Trees Book': [
        { title: 'Topic 4', difficulty: 'easy', leetcode: 'https://leetcode.com/problem4' },
        { title: 'Topic 5', difficulty: 'medium', leetcode: 'https://leetcode.com/problem5' },
        { title: 'Topic 6', difficulty: 'hard', leetcode: 'https://leetcode.com/problem6' },
    ],
    'DP Book': [
        { title: 'Topic 7', difficulty: 'easy', leetcode: 'https://leetcode.com/problem7' },
        { title: 'Topic 8', difficulty: 'medium', leetcode: 'https://leetcode.com/problem8' },
        { title: 'Topic 9', difficulty: 'hard', leetcode: 'https://leetcode.com/problem9' },
    ],
    'Graphs Book': [
        { title: 'Topic 10', difficulty: 'easy', leetcode: 'https://leetcode.com/problem10' },
        { title: 'Topic 11', difficulty: 'medium', leetcode: 'https://leetcode.com/problem11' },
        { title: 'Topic 12', difficulty: 'hard', leetcode: 'https://leetcode.com/problem12' },
    ],
};
const Learn = () => {
    const [selectedBook, setSelectedBook] = useState(null); // Default to null

    useEffect(() => {
        const buttons = document.querySelectorAll('.sidebar button');
        const mobile = window.minWidth <= 700;
        buttons.forEach((button, index) => {
            if (mobile && index !== 0 && index !== buttons.length - 1) {
                button.addEventListener('click', function () {
                    this.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center',
                        inline: 'center'
                    });
                });
            }
        });

        return () => {
            buttons.forEach((button, index) => {
                if (index !== 0 && index !== buttons.length - 1) {
                    button.removeEventListener('click', function () {
                        this.scrollIntoView({
                            behavior: 'smooth',
                            block: 'center',
                            inline: 'center'
                        });
                    });
                }
            });
        };
    }, [selectedBook]);

    const handleBookClick = (book) => {
        setSelectedBook(book);
    };

    return (
        <div id="learn" className="learn-projects">
            <div className="learn-projects-content">
                <div className="learn-container">
                    {selectedBook === null ? (
                        // My Books Layout
                        <div className="books-container">
                            <h2 className="section-title">My Books</h2>
                            <div className="books-grid">
                                {Object.keys(bookTopics).map((book, index) => (
                                    <div key={index} className="book-card">
                                        <h3>{book}</h3>
                                        <p>
                                            Learn {book.split(' ')[0]} with my Handwritten Notes which clearly demonstrate every approach in a beautiful way of representation.
                                        </p>
                                        <button
                                            className="view-book-btn"
                                            onClick={() => handleBookClick(book)}
                                        >
                                            View Book
                                        </button>
                                    </div>
                                ))}
                            </div>
                            <p className="books-description">
        These notes were personally prepared by me during my coding journey. As I tackled countless problems, I made it a habit to document important patterns, tricks, and approaches. I believe these notes can really help you build strong problem-solving skills and save you tons of time.
    </p>
                        </div>
                    ) : (
                        // Topics List Layout
                        <div className="topics-container">
                            <h2 className="section-title">{selectedBook} Topics</h2>
                            <div className="topics-list">
                                {bookTopics[selectedBook].map((topic, index) => (
                                    <div key={index} className="topic-item">
                                        <span className="topic-title">{topic.title}</span>
                                        <span className={`topic-difficulty ${topic.difficulty}`}>{topic.difficulty}</span>
                                        <a className="topic-link" href={topic.leetcode} target="_blank" rel="noopener noreferrer">LeetCode</a>
                                    </div>
                                ))}
                            </div>
                            <button className="back-to-books-btn" onClick={() => setSelectedBook(null)}>Back to Books</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Learn;
