import React from 'react';// pwede kahit wala na ito import React from 'react';
import Header from './components/Header';// for Components
import Footer from './components/Footer';// for Components
import './App.css';
import { useState } from 'react';
/* Components yung tawag sa paggawa ng folder sa src at import sa App.tsx as 
  <Header/> at <Footer/>.
*/

function App() {
  //basic Varibale beginning
  /* ito yung basic na pag gawa ng variable */
  const firstname: string = "Carl";
  const lastname : string = "Arocha";
  const age: number = 20;
  /*
  at kung nakikita moyung {firstname},{lastname},{age} 
  ayan yung way sa REACT.JS kung paano i-insert ang value sa tsx/jsx.

  another example pa is yung pwede ka mag direct ng value sa tsx using syntax na ganito
  {"Carl"},{"Arocha"},{20}.
  */
  const arr = [1,2,3,4,5]; //array using map()
  const student = [ //with multiple objects
  {
    stud1: "Maria",
    stud2: "Burat"
  },
  {
    stud1: 'Burikat',
    stud2: 'Chitae'
  },
  {
   stud1: 'Jaburat',
   stud2: 'Ohio'
  }
]
  //basic variable end


  //CSS in Javascript beginning
  /*
  CSS in Javascript kung nakikita mo yung naka object const textColor = {color: 'white'} yan yung css niya 
  then malalagay mo yung design niya using style={textColor} sa HTML tags na gusto mo ilagay
  }
  */
  const textColor = {
    color: 'white'
  }
//CSS in Javascript End

//useState Beginning
  /* useState 

  #1st Ex:
  sa unang useState na const [num, setNum] = useState<number>(1), si num variable ay may value na 1 na nakalagay kay 
  <h2>{num}</h2>. at si setNum naman ay gagamitin sa button, paliwanag:
  <button onClick={() => setNum(num + 1)}>add</button> si onclick ay isang event handler function kapag ito ay napindot
  mati-trigger ito ng event kung saan si () => setNum na isang updater ay i-update niya ang value na meron si <h2>{num}
  </h2> using expression (num + 1) na magdagdag ng +1 sa value na meron ni {num}.

  #2nd Ex:
  sa pangalawang paliwanag na const [username, setUsername] = useState<string>('Arocha Pogi');, si username ay may
  value na <string>('Arocha Pogi'); na nakalagay kay <h1>{username}</h1>. at si setUsername ay gagamitin kay button,
  paliwanag:
  <button onClick={() => setUsername(changetxt => "Pogi ako Talaga")}>Click Me</button> ang event handler na si onClick
  once na matrigger, siya at ang arrow pointer () =>, at ang updater nasi setUsername ay babaguhin ang value na meron si
  <h1>{username}</h1> at papalitan ito ng changtxt => "Pogi ako Talaga".

  #3rd Ex:
  sa pangatlong paliwanag ay meron dalawanag state declaration na const [inputValue, setInputValue] = 
  useState<string>(''); at const [outputValue, setOutputValue] = useState<string>(''); ang dalawang to ay ginagamit
  para malaman ang value na ilalagay sa input at malalagay ang value sa output after maclick yung button na 
  <button onClick={handleButtonClick}>Print Value</button>, paliwanag: 
  ang value ng dalawang Hooks State declarion ay dalawang empty useState<string>('') hibig sabihin gagamit ka
  ng <input> tag at functions, si setInputValue ay naka functions na const handleInputChnge = 
  (event: React.ChangeEvent<HTMLInputElement>) => { setInputValue(event.target.value); }; kung saan i-update niya ang 
  value na meron si inputValue kapag may i-type ang user sa <input> tag, ang const handleButtonClick = () => {
  setOutputValue(inputValue); }; kapag ang button nasi <button onClick={handleButtonClick}>Print Value</button> ay na
  trigger ang current value na meron si value={inputValue} ay ilalagay niya sa <h2>{outputValue}</h2>.

    - kumbaga nagsisilbing updater lang si const handleInputChnge = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value); or yung setInputValue kapag may ita-type si user na bago sa <input> tag.
      ganun din si const handleButtonClick = () => { setOutputValue(inputValue); }; kung ano nayung na update ni 
      setInputValue at naging value na ni value={inputValue} ay kukunin ni  setOutputValue(inputValue); ay i-print ang
      value nayun sa <h2>{outputValue}</h2>.



  */
  const [num, setNum] = useState<number>(1)
  const [username, setUsername] = useState<string>('Arocha Pogi');


  const [inputValue, setInputValue] = useState<string>('');
  const [outputValue, setOutputValue] = useState<string>('');
  
  const handleInputChnge = (event: React.ChangeEvent<HTMLInputElement>) => {
  setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
      setOutputValue(inputValue);
  }
  

//useState End
  return (
    <>
      <Header />
      <main style={textColor}>
      <h1>Hello {firstname} {lastname} {age}</h1>
      {arr.map((num => <p> {num * 5} </p>))}
      {student.map((s => <p> {s.stud1} {s.stud2}</p>))}
      <h2>{num}</h2>
      <button onClick={() => setNum(num + 1)}>add</button>
      <h1>{username}</h1>
      <button onClick={() => setUsername(changetxt => "Pogi ako Talaga")}>Click Me</button>
      <input type='text' value={inputValue} onChange={handleInputChnge}/>
      <button onClick={handleButtonClick}>Print Value</button>
      <h2>{outputValue}</h2>

      </main>
      <Footer />
    </>
  );
}
export default App;
