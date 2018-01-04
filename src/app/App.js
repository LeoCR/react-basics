import ReactDOM from 'react-dom';
import React from 'react';
import getBlog from '../components/blog/Blog'
var numbers = [1, 2, 3, 4, 5];
var listItems = numbers.map((numbers) =>
  <li>{numbers}</li>
);
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>
      {number*2}
    </li>
  );
  return (
    <ul>
      <h1>Assign a key to our list items inside numbers.map()</h1>
      {listItems}
      </ul>
  );
}

const numbers02 = [6, 7, 8, 9, 20];

function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return <li>{props.value}</li>;
}

function NumbersList(props) {
  let numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // Correct! Key should be specified inside the array.
    <ListItem key={number.toString()}
              value={number} />
  );
  return (
    <ul>
      <h1>Correct! Key should be specified inside the array.  </h1>
      {listItems}
    </ul>
  );
}

var numbers03 = [9, 7, 2, 4, 1];



function EmbeddingNumberListInJsx(props) {
  const numbers = props.numbers;
  return (
    <ul>
      <h1>EmbeddingNumberListInJsx</h1>
      {numbers.map((number) =>
        <ListItem key={number.toString()}
                  value={number} />
      )}
    </ul>
  );
}



export default function simpleList(){
    ReactDOM.render(
      <ul>
        <h1>      Basic List Component</h1>
        {listItems}
        </ul>,
      document.getElementById('numberList')
    );
    ReactDOM.render(
      <EmbeddingNumberListInJsx numbers={numbers} />,
      document.getElementById('embedding_number_list_in_jsx')
    );
    ReactDOM.render(
      <NumberList numbers={numbers02} />,
      document.getElementById('list02')
    );
    ReactDOM.render(
      <NumbersList numbers={numbers03} />,
      document.getElementById('list03')
    );
    getBlog();
}