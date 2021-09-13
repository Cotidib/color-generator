import React, {useState} from 'react';
import SingleColor from './Color';
import Values from 'values.js';

import styled, {ThemeProvider} from 'styled-components';
import {GlobalStyles, lightTheme, darkTheme} from './globalStyles';

function App() {
  const [color, setColor] = useState('');
  const [list, setList] = useState(new Values('#a076f5').all(10));
  const [invalidInput, setInvalidInput] = useState(false);
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      setInvalidInput(false);
      let colors = new Values(color).all(10);
      setList(colors);
      console.log(colors);
    }
    catch (error) {
      setInvalidInput(true);
      console.log(error);
    }
    
  }

  return (
    <ThemeProvider theme={theme === 'light'?lightTheme:darkTheme}>
      <GlobalStyles/>
        <main>
          
          <section className='main-container'>
            <div>
              <h1>COLOR generator</h1>
              <form onSubmit={handleSubmit}>
                <input 
                type='text' 
                value={color} 
                onChange={(e)=>setColor(e.target.value)}
                className={invalidInput? 'invalid' : null}
                placeholder='#a076f5'
                />
                <button type='submit' className='btn'>submit</button>
              </form>
            </div>
            <div>
              <label className='switch'>
                <input type='checkbox' onChange={toggleTheme}/>
                <span className='slider'/>
              </label>
            </div>
          </section>
          <section className='colors-container'>
            {
              list.map((clr, index)=>{
                return <SingleColor key={index} {...clr} hexColor={clr.hex}/>
              })
            }
          </section>
          
        </main>
    </ThemeProvider>
  );
}

export default App;
