import { Form, Field } from '@leveluptuts/fresh';
//fresh allows field to be referenced with whatever the lowercase
//version is
 
const HabitForm = ({ setHabits }) => {
    return (
        <Form onSubmit={data => {
           
            setHabits( prevState => [...prevState, data.habit])
        }}>
            <Field>Habit</Field>
        </Form>
    )
}

export default HabitForm;