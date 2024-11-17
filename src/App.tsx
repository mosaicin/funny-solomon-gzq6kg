import { useState } from 'react';

const alphabets = {
  russian: [
    'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я',
  ],
  armenian: [
    'Ա', 'Բ', 'Գ', 'Դ', 'Ե', 'Զ', 'Է', 'Ը', 'Թ', 'Ժ', 'Ի', 'Լ', 'Խ', 'Ծ', 'Կ', 'Հ', 'Ձ', 'Ղ', 'Ճ', 'Մ', 'Յ', 'Ն', 'Շ', 'Ո', 'Չ', 'Պ', 'Ջ', 'Ռ', 'Ս', 'Վ', 'Տ', 'Ր', 'Ց', 'Ւ', 'Փ', 'Ք', 'Օ', 'Ֆ',
  ],
  tajik: [
    'А', 'Б', 'В', 'Г', 'Ғ', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Ӣ', 'Й', 'К', 'Қ', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ӯ', 'Ф', 'Х', 'Ҳ', 'Ч', 'Ҷ', 'Ш', 'Ъ', 'Э', 'Ю', 'Я',
  ],
  uzbek: [
    'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Қ', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ў', 'Ф', 'Х', 'Ҳ', 'Ч', 'Ш', 'Ъ', 'Э', 'Ю', 'Я',
  ],
  hindi: [
    'अ', 'आ', 'इ', 'ई', 'उ', 'ऊ', 'ए', 'ऐ', 'ओ', 'औ', 'क', 'ख', 'ग', 'घ', 'ङ', 'च', 'छ', 'ज', 'झ', 'ञ', 'ट', 'ठ', 'ड', 'ढ', 'ण', 'त', 'थ', 'द', 'ध', 'न', 'प', 'फ', 'ब', 'भ', 'म', 'य', 'र', 'ल', 'व', 'श', 'ष', 'स', 'ह',
  ],
  hebrew: [
    'א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח', 'ט', 'י', 'כ', 'ל', 'מ', 'נ', 'ס', 'ע', 'פ', 'צ', 'ק', 'ר', 'ש', 'ת',
  ],
};

const pigSound = new Audio('https://www.freesound.org/data/previews/98/98653_1494678-lq.mp3');

const Gallery = () => {
  const [selectedAlphabet, setSelectedAlphabet] = useState('russian');
  const [selectedLetter, setSelectedLetter] = useState(alphabets[selectedAlphabet][0]);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleAlphabetChange = (alphabet: string) => {
    setSelectedAlphabet(alphabet);
    setSelectedLetter(alphabets[alphabet][0]);
    pigSound.play();
  };

  const handleLetterChange = (letter: string) => {
    setSelectedLetter(letter);
    pigSound.play();
  };

  const handleCommentSubmit = () => {
    setComments([...comments, newComment]);
    setNewComment('');
    pigSound.play();
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="flex justify-center mb-4">
        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mr-4" />
        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
      </div>
      <div className="flex justify-center mb-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={() => handleAlphabetChange('russian')}>Русский</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={() => handleAlphabetChange('armenian')}>Армянский</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={() => handleAlphabetChange('tajik')}>Таджикский</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={() => handleAlphabetChange('uzbek')}>Узбекский</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={() => handleAlphabetChange('hindi')}>Индийский</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleAlphabetChange('hebrew')}>Еврейский</button>
      </div>
      <div className="flex flex-wrap justify-center">
        {alphabets[selectedAlphabet].map((letter, index) => (
          <button key={index} className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2 ${selectedLetter === letter ? 'bg-blue-700' : ''}`} onClick={() => handleLetterChange(letter)}>{letter}</button>
        ))}
      </div>
      <div className="mt-4">
        <input type="text" value={newComment} onChange={(e) => setNewComment(e.target.value)} className="w-full p-2 border border-gray-400 rounded" placeholder="Оставьте комментарий" />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleCommentSubmit}>Отправить</button>
      </div>
      <div className="mt-4">
        {comments.map((comment, index) => (
          <div key={index} className="bg-gray-200 p-2 border border-gray-400 rounded mb-2">{comment}</div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;