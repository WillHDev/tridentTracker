import HabitButton from './HabitButton';

const Habit = ({ habit }) => {
    console.log(habit);
    return (
        <article>
            <h3>{habit}</h3>
          <div>
           <HabitButton />
           <HabitButton />
           <HabitButton />
           <HabitButton />
           <HabitButton />
       
          </div>
        </article>
    )
}

export default Habit;