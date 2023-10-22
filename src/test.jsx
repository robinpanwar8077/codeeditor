import React, { useEffect, useState, useRef } from 'react';
import './Editor.css'; // Import your CSS for styling

function Editor() {
    const [inputtext, setInput] = useState('');
    const [markup, setHtmlMarkup] = useState('');
    const textareaRef = useRef(null);

    useEffect(() => {
        if (GFG_Fun(inputtext)) {
            setHtmlMarkup(inputtext);
        }
    }, [inputtext]);

    useEffect(() => {
        // Add line numbers dynamically when the content changes
        const textarea = textareaRef.current;
        const lineNumbers = document.querySelector('.line-numbers');

        textarea.addEventListener('input', () => {
            const content = textarea.value;
            const lines = content.split('\n');
            const lineCount = lines.length;

            // Generate line numbers HTML
            const lineNumbersHTML = Array.from({ length: lineCount }, (_, i) => i + 1)
                .map(lineNumber => `<div>${lineNumber}</div>`)
                .join('');

            lineNumbers.innerHTML = lineNumbersHTML;
        });
    }, []);

    function GFG_Fun(input) {
        const res = /<([A-Za-z][A-Za-z0-9]*)\b[^>]*>.*?<\/\1>/i.test(input);
        console.log(res);
        return res;
    }

    return (
        <div className="editor-container">
            <div className="line-numbers"></div>
            <div className="editor">
                <textarea ref={textareaRef} value={inputtext} onChange={(e) => setInput(e.target.value)} />
            </div>
            <div className="result">
                <div dangerouslySetInnerHTML={{ __html: markup }}></div>
            </div>
        </div>
    );
}

export default Editor;
