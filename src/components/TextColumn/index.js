import React from 'react';
import './TextColumn.css';
import { IoMdArrowForward } from 'react-icons/io';

function TextColumn() {
    return (
        <div className='info-text'>
            <h2>
                Get Certified Candidates with top-notch skillset
            </h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
            </p>
            <div className="button-container">
                <button>
                    Know more <IoMdArrowForward />
                </button>
            </div>
        </div>
    )
}

export default TextColumn;
