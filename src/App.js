import { useState } from 'react';
import './App.css';
import Display from './Component/Display';


function App() {

  const [skills, setSkills] = useState('');

  const myName = () => {
    setSkills('My name is Saul Williams.')
  }

  const mySkill = () => {
    setSkills('I am a Frontend Developer.')
  }


  const [count, likeCount] = useState(0)


  return (
    <div className="container">
      <img className='avatar' src='data:image/png;base64,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' alt='avatar'></img>
      <h1>Greetings!</h1>
      <Display info={skills} />
      <br></br>
      <div>
        <button onClick={myName}>Name</button>
        <button onClick={mySkill}>Skills</button>
      </div>
      <br></br>
      <div className='likeFormat'>
        <p>{count}</p>
        <input type='image' src="https://www.pngkey.com/png/detail/19-199641_building-a-sensible-and-local-service-like-icon.png" alt='likeIcon' id='likeButton' onClick={() => likeCount(count + 1)} />
      </div>
      <a target='_blank' rel='noopener noreferrer' href='https://github.com/saul-will'>
        <img src='https://github.githubassets.com/images/modules/open_graph/github-mark.png' alt='github icon'></img>
      </a>
    </div>
  );
}

export default App;
