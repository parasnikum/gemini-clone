import React from 'react';
import './Main.css';
import { Plus, User, PencilRuler, Mic } from 'lucide-react';

function Main() {
    const suggestionCards = ['Create Image', 'Clone Website', 'Research', 'Solve Math'];

    return (
        <div className='main'>
            <div className='nav'>
                <p>Gemini</p>
                <User className='user-avatar' />
            </div>

            <div className='main-container'>
                <div className='greet'>
                    <p>Hello, User</p>
                </div>

                <div className='input-div'>
                    <div className='input-text'>
                        <input type='text' placeholder='Ask Something..' />
                    </div>
                    <div className='tools'>
                        <div className='combo'>
                            <Plus />
                            <div className='tools-label'>
                                <PencilRuler />
                                <span>Tools</span>
                            </div>
                        </div>
                        <Mic />
                    </div>
                </div>

                <div className='suggestion-cards'>
                    {suggestionCards.length > 0 ? (
                        suggestionCards.map((element, index) => (
                            <p key={index} className='suggestion-item'>
                                {element}
                            </p>
                        ))
                    ) : (
                        <p>No suggestions</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Main;
