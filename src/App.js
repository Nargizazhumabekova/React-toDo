import { Button } from './components/button/Button';
import User from './page/user/User';
import Example from './components/example/Example';
import Header from './components/header/Header';
import NewComponent from './components/newComponent/NewComponent';
import Modal from './components/modal/Modal';
import React, { useState } from 'react';
//import CountPage from './page/countPage/CountPage';
import Input from './components/input/Input';
import InputShow from './components/inputShow/InputShow';
import ToDoList from './components/toDoList/ToDoList';
import PokemonPage from "./page/pokemonPage/PokemonPage";
import PokemonCard from "./components/pokemonCard/PokemonCard";





function App() {
    const navbar = [ 'Главная', 'О нас', 'Контакты' ];

    const [ show, setShow ] = useState(false);

    const [ input, setInput ] = useState('');
    const [searchInput,SetSearchInput]=useState('');
    console.log(input, '+++++++++++++++++++++++++++++++');



    const onChangeInput = (event) => {
        setInput(event.target.value);
    };
    const handleShow = () => {
        setShow(!show);
    };
    const [ tasks, setTasks ] = useState([
            {
                id: 1,
                title: 'coding',
                completed: false
            },
            {
                id: 2,
                title: 'eat',
                completed: false
            },
            {
                id: 3,
                title: 'sleep',
                completed: false
            }
        ]
    );
    console.log(tasks);

    const handleAdd = () => {
        setTasks(prev=>[...prev,
            {
                id: tasks.length + 1,
                title: input,
                completed: false,
            }
        ]

        );
    };

    const handleDelete = (id) => {
    const updatedTodos = tasks.filter((todo) => todo.id !== id);
    setTasks(updatedTodos);
  };
    const handleSearch = (event) => {
        SetSearchInput(event.target.value);
    const filtered = tasks.filter((task) =>
        task.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setTasks(filtered);
};

    const a= [1,2,3]
    const b = [4,5,6]
    const c = [...a,...b]
    console.log(c);

    return (
        <>
            {
                show && <Modal handleShow={handleShow}>
                    <Input
                        placeholder={'Добавить таск'}
                        onChangeInput={onChangeInput}
                    />
                    <Button onClick={handleAdd} text={'добавить'}/>
                </Modal>
            }
            <button onClick={handleShow}>открыть</button>
            <Input placeholder={'поиск'} type={'search'} onChangeInput={handleSearch}></Input>
            {/*<div className='wrapper'></div>*/}

            {/*<CountPage/>*/}
            {/*<InputShow input={input}/>*/}
            {/*<Input placeholder={'напишите'} onChangeInput={onChangeInput}/>*/}
            <ToDoList tasks={tasks} handleDelete={handleDelete}/>
                       <PokemonPage/>
        </>

    );
}


export default App;


// const sum = (a,b) => a+b
//
// sum(5,9)

// const user = {
//     name: 'Bakyt',
//     age: 18
// }
//
// user.name

