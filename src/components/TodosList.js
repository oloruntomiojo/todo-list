import Todo from "./Todo";
import styled from 'styled-components';

// styled components
const Heading2 = styled.h2`
    text-align: center;
    font-weight: 600;
    color: ${props => props.theme.colors.light};
    margin-bottom: .5rem;
`

const TodosWrapper = styled.div`
    margin-top: 2rem;
    box-shadow: 2px 2px 5px rgba(0,0,0,0.15);
    border-radius: 4px;
    padding: 2rem 1rem;
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    background-color: ${props => props.theme.colors.dark};
`

const EmptyTodo = styled.p`
    margin-top: 2rem;
    text-align: center;
    color: ${props => props.theme.colors.light};
    line-height: 1.6;
    font-size: .9rem
`

// component
const TodosList = ({ todosList, setTodosList }) => {
    return ( 
        <div>
            { todosList.length === 0 &&
                <EmptyTodo>Yayy!!! <br />You have nothing to do. Or do you?</EmptyTodo> 
            }

            { todosList.length > 0 && 
                <TodosWrapper>
                    <Heading2>All</Heading2>
                    { todosList.map(todo => (
                        <Todo key={todo.id}
                            todo={todo}
                            todosList={todosList} 
                            setTodosList={setTodosList}
                        />
                    )) }
                </TodosWrapper>
            }
        </div>
     );
}
 
export default TodosList;